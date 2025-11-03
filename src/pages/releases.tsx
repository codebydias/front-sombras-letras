import { useEffect, useState } from "react";
import axios from "axios";
import { formatCurrencyBRL } from "@/utils/formats"; // função utilitária pra formatar preços

type Release = {
  id: string;
  title: string;
  subtitle?: string;
  synopsis?: string;
  autor_id: number;
  category_id?: number;
  serie_id?: number;
  is_release: string;
  price: number;
};

export default function Releases() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const { data } = await axios.get<{ releases: Release[] }>(
          `${import.meta.env.VITE_API_URL}/books/releases`
        );
        setReleases(data.releases);
      } catch (err) {
        console.error("Erro ao buscar lançamentos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReleases();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 bg-[#0b0b0d]">
        Carregando lançamentos...
      </div>
    );
  }

  if (!releases) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 bg-[#0b0b0d]">
        Nenhum lançamento disponível.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2 text-[#a30036] tracking-wide">
            Lançamentos
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Confira os livros mais recentes disponíveis na nossa loja.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {releases.map((book) => (
            <div
              key={book.id}
              className="rounded-2xl border border-[#1f1f21] bg-[#111113] p-5 hover:border-[#a30036]/60 transition cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-[#d32f58] mb-1">
                {book.title}
              </h2>
              {book.subtitle && (
                <h3 className="text-gray-400 text-sm mb-2">{book.subtitle}</h3>
              )}
              {book.synopsis && (
                <p className="text-gray-300 text-sm mb-3">{book.synopsis}</p>
              )}
              <span className="text-[#ff4d6d] font-semibold">
                {formatCurrencyBRL(book.price)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
