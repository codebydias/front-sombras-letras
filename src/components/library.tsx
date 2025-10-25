"use client";

import { useLibrary } from "@/hooks/use-library";
import { formatCurrencyBRL } from "@/utils/formats";

export function Library() {
  const { items, removeItem, clearCart } = useLibrary();

  if (items.length === 0)
    return <div className="p-4 text-gray-400">Seu carrinho está vazio</div>;

  return (
    <div className="p-4 bg-[#111113] rounded-lg max-w-md w-full space-y-3">
      <h2 className="text-lg font-bold text-[#a30036]">Carrinho</h2>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-[#1a1a1d] p-2 rounded"
        >
          <div>
            <div className="text-sm font-medium">{item.name}</div>
            <div className="text-xs text-gray-400">
              {formatCurrencyBRL(item.price)} x {item.quantity}
            </div>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-600 text-sm px-2 py-1 rounded"
          >
            Remover
          </button>
        </div>
      ))}
      <div className="flex justify-between font-medium">
        <span>Total:</span>
        <span>
          {formatCurrencyBRL(
            items.reduce((acc, i) => acc + i.price * i.quantity, 0)
          )}
        </span>
      </div>
      <button
        onClick={clearCart}
        className="w-full mt-2 bg-[#a30036] hover:bg-[#d32f58] text-white py-2 rounded"
      >
        Limpar carrinho
      </button>
    </div>
  );
}
