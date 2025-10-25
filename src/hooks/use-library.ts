// src/hooks/use-library.ts
import { useEffect, useState } from "react";

export type LibraryItem = {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
};

const STORAGE_KEY = "library_items";

export function useLibrary() {
  const [items, setItems] = useState<LibraryItem[]>([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) setItems(JSON.parse(data));
  }, []);

  const save = (newItems: LibraryItem[]) => {
    setItems(newItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
  };

  const addItem = (item: Omit<LibraryItem, "quantity">) => {
    const existing = items.find((i) => i.id === item.id);
    if (existing) {
      save(items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      save([...items, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id: number | string) => save(items.filter(i => i.id !== id));

  const clearCart = () => save([]);

  const isInCart = (id: number | string) => items.some(i => i.id === id);

  return { items, addItem, removeItem, clearCart, isInCart };
}
