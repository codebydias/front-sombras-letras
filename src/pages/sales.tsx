import { useEffect, useState } from "react";
import axios from "axios";
import { formatCurrencyBRL } from "@/utils/formats";
import { useLibrary } from "@/hooks/use-library";

type Sale = {
  id: string;
  type: "book" | "serie";
  price: number;
  sale_price: number;
  book: { id: string; title: string; subtitle?: string } | null;
  serie: { id: number; name: string } | null;
};

export default function Sales() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem, isInCart, removeItem } = useLibrary();

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const { data } = await axios.get<{ sales: Sale[] }>(
          `${import.meta.env.VITE_API_URL}/books/sales`
        );
        setSales(data.sales);
      } catch (err) {
        console.error("Erro ao buscar sales:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSales();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 bg-[#0b0b0d]">
        Carregando promoções...
      </div>
    );

  if (!sales.length)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 bg-[#0b0b0d]">
        Nenhuma promoção disponível.
      </div>
    );

  const renderCard = (item: Sale) => {
    const discount =
      item.price && item.sale_price < item.price
        ? Math.round(((item.price - item.sale_price) / item.price) * 100)
        : 0;

    const title = item.type === "book" ? item.book?.title : item.serie?.name;
    const subtitle = item.type === "book" ? item.book?.subtitle : null;

    return (
      <div
        key={item.id}
        className="relative rounded-2xl border border-[#1f1f21] bg-[#111113] overflow-hidden hover:border-[#a30036]/60 hover:shadow-[0_0_10px_rgba(163,0,54,0.2)] transition cursor-pointer p-5"
      >
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-[#a30036] text-white text-xs font-semibold px-2 py-1 rounded">
            -{discount}%
          </div>
        )}

        <h2 className="text-xl font-semibold text-[#d32f58] mb-1">{title}</h2>
        {subtitle && <p className="text-gray-400 text-sm mb-2">{subtitle}</p>}

        {item.type === "book" && item.serie && (
          <p className="text-xs text-gray-500 mb-2">
            Faz parte da coleção: {item.serie.name}
          </p>
        )}

        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#ff4d6d] font-semibold">
            {formatCurrencyBRL(item.sale_price)}
          </span>
          {item.sale_price < item.price && (
            <span className="text-gray-500 line-through text-sm">
              {formatCurrencyBRL(item.price)}
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            const name = subtitle
              ? `${title} - ${subtitle}`
              : title ?? "Produto";

            if (isInCart(item.id)) removeItem(item.id);
            else
              addItem({
                id: item.id,
                name,
                price: item.sale_price,
              });
          }}
          className={`w-full text-sm py-2 rounded-md transition ${
            isInCart(item.id)
              ? "bg-red-600 hover:bg-red-700"
              : "bg-[#a30036] hover:bg-[#d32f58]"
          }`}
        >
          {isInCart(item.id) ? "Remover do carrinho" : "Adicionar ao carrinho"}
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2 text-[#a30036] tracking-wide">
            Promoções
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Aproveite os descontos especiais nos nossos produtos.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sales.map(renderCard)}
        </div>
      </div>
    </div>
  );
}
