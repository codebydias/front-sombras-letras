import { Link } from "react-router-dom";
import { useState } from "react";
import { CircleUserRound, LibraryBig, Truck, Tag, Moon } from "lucide-react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-[#121212] text-white">
      <div className="flex justify-between px-4 py-1 text-sm bg-[#121212]">
        <span className="flex gap-2">
          <Truck /> Frete grátis acima de R$ 150
        </span>
        <span className="flex gap-2">
          <Tag /> Primeira compra com 15% OFF
        </span>
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="flex items-center text-2xl font-bold space-x-2">
              <Moon />
              <span className="text-3xl">SOMBRAS</span>
              <span className="text-red-800 text-3xl">& LETRAS</span>
            </h1>
            <p className="text-xs text-gray-300">
              Onde as trevas encontram a literatura
            </p>
          </div>
        </Link>

        <input
          type="text"
          placeholder="Buscar livros sombrios, autores, categorias..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 mx-4 px-3 py-2 rounded bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center space-x-4">
          <button className="text-xl cursor-pointer">
            {" "}
            <CircleUserRound />
          </button>
          <button className="relative text-xl cursor-pointer">
            <LibraryBig />

          </button>
        </div>
      </div>

    
      <nav className="flex space-x-6 px-4 py-2 border-t border-gray-700 text-sm text-center justify-center">
        {[
          { label: "Lançamentos", slug: "releases" },
          { label: "Terror & Horror", slug: "horror" },
          { label: "Fantasia Dark", slug: "dark-fantasy" },
          { label: "Mistério", slug: "mystery" },
          { label: "Coleções Especiais", slug: "special-collections" },
          { label: "Clube do Livro", slug: "book-club" },
          { label: "Promoções", slug: "deals" },
          { label: "Sobre nós", slug: "about-us" },
        ].map(({ label, slug }) => (
          <Link
            key={slug}
            to={`/${slug}`}
            className="hover:text-blue-400 transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
