import axios from "axios";
import { useEffect, useState } from "react";
import { useLibrary } from "@/hooks/use-library";
import { formatCurrencyBRL } from "@/utils/formats";

type Book = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
};

type Collection = {
  id: number;
  name: string;
  resume?: string;
  price: string;
  books: Book[];
};

export default function Collections() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const { addItem, isInCart, removeItem } = useLibrary();

  const fetchCollections = async () => {
    try {
      const { data } = await axios.get<{ collections: Collection[] }>(
        `${import.meta.env.VITE_API_URL}/books/collections`
      );
      setCollections(data.collections);
    } catch (error) {
      console.error("Erro ao buscar coleções:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0b0b0d] text-gray-400">
        Carregando coleções...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2 text-[#a30036] tracking-wide">
            Coleções Literárias
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Explore sagas e séries que marcaram gerações de leitores.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => {
            const collectionId = collection.id;
            const collectionAdded = isInCart(collectionId);

            return (
              <div
                key={collection.id}
                onClick={() =>
                  setSelected(selected === collection.id ? null : collection.id)
                }
                className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  selected === collection.id
                    ? "border-[#a30036] bg-[#151518] shadow-[0_0_20px_rgba(163,0,54,0.3)]"
                    : "border-[#1f1f21] bg-[#111113] hover:border-[#a30036]/60 hover:shadow-[0_0_10px_rgba(163,0,54,0.2)]"
                }`}
              >
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-[#d32f58] mb-1">
                    {collection.name}
                  </h2>
                  <p className="text-sm text-gray-400 mb-3">
                    {collection.resume || "Sem descrição disponível."}
                  </p>

                  <div className="text-sm text-gray-500 mb-3">
                    <span className="font-medium text-[#a30036]">
                      Valor da coleção:
                    </span>{" "}
                    {formatCurrencyBRL(collection.price)}
                  </div>

                  {selected === collection.id && (
                    <div className="mt-4 border-t border-[#2a2a2d] pt-3 space-y-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (collectionAdded) removeItem(collectionId);
                          else
                            addItem({
                              id: collectionId,
                              name: `COLEÇÃO: ${collection.name}`,
                              price: Number(collection.price),
                            });
                        }}
                        className={`w-full text-xs px-3 py-1 rounded-md ${
                          collectionAdded
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-[#a30036] hover:bg-[#d32f58]"
                        }`}
                      >
                        {collectionAdded
                          ? "Remover coleção"
                          : "Adicionar coleção"}
                      </button>

                      {collection.books.map((book) => {
                        const bookAdded = isInCart(book.id);
                        return (
                          <div
                            key={book.id}
                            className="flex justify-between items-center gap-2 bg-[#1a1a1d] p-3 rounded-lg"
                          >
                            <span className="text-sm text-gray-200">
                              {book.subtitle}
                              <span className="text-red-400"> {formatCurrencyBRL(book.price)}</span>
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (bookAdded) removeItem(book.id);
                                else
                                  addItem({
                                    id: book.id,
                                    name: `${book.title} ${book.subtitle}`,
                                    price: Number(collection.price),
                                  });
                              }}
                              className={`text-xs px-3 py-1 rounded-md ${
                                bookAdded
                                  ? "bg-red-600 hover:bg-red-700"
                                  : "bg-[#a30036] hover:bg-[#d32f58]"
                              }`}
                            >
                              {bookAdded ? "Remover" : "Adicionar"}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
