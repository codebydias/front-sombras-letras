import { formatCurrencyBRL } from "@/utils/formats";
import { useLibrary } from "@/hooks/use-library";

export function LibraryCart() {
  const { items, removeItem } = useLibrary();

  const total = items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  if (items.length === 0) return <div className="text-gray-400">Seu carrinho está vazio.</div>;

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center p-3 bg-[#1a1a1d] rounded">
          <span className="text-sm text-gray-200">{item.name}</span>
          <div className="flex items-center gap-2">
            <span className="text-[#ff4d6d] text-sm font-medium">
              {formatCurrencyBRL(item.price)}
            </span>
            <button
              onClick={() => removeItem(item.id)}
              className="text-xs px-2 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white"
            >
              Remover
            </button>
          </div>
        </div>
      ))}
      <div className="mt-3 border-t border-[#2a2a2d] pt-3 flex justify-between font-semibold text-gray-100">
        <span>Total:</span>
        <span>{formatCurrencyBRL(total)}</span>
      </div>
    </div>
  );
}
