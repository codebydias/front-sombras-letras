import { useEffect, useState } from "react";
import axios from "axios";
import { formatCurrencyBRL } from "@/utils/formats";

type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  discountPrice?: number;
  image?: string;
};

export default function Sales() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const { data } = await axios.get<{ products: Product[] }>(
          `${import.meta.env.VITE_API_URL}/sales`
        );
        setProducts(data.products);
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
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        Carregando promoções...
      </div>
    );

  if (products.length === 0)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        Nenhuma promoção disponível.
      </div>
    );

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
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-[#1f1f21] bg-[#111113] overflow-hidden hover:border-[#a30036]/60 hover:shadow-[0_0_10px_rgba(163,0,54,0.2)] transition cursor-pointer"
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-[#d32f58] mb-1">
                  {product.name}
                </h2>
                {product.description && (
                  <p className="text-sm text-gray-400 mb-3">{product.description}</p>
                )}
                <div className="flex items-center gap-2">
                  {product.discountPrice ? (
                    <>
                      <span className="text-[#ff4d6d] font-semibold">
                        {formatCurrencyBRL(product.discountPrice)}
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        {formatCurrencyBRL(product.price)}
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-100 font-semibold">
                      {formatCurrencyBRL(product.price)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
