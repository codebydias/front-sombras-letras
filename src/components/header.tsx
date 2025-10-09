import { Link } from "react-router-dom";
import { useState } from "react";
import { LibraryBig, Truck, Tag, Moon } from "lucide-react";
import { NavLinks } from "./navLink";
import UserMenu from "./user-menu";

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
          <div className="flex flex-col items-start">
            <h1 className="flex flex-col sm:flex-row sm:items-center text-2xl sm:text-3xl font-bold sm:space-x-2">
              <Moon className="text-2xl sm:text-3xl" />
              <span className="text-3xl sm:text-4xl">SOMBRAS</span>
              <span className="text-red-800 text-3xl sm:text-4xl">
                & LETRAS
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Onde as trevas encontram a literatura
            </p>
          </div>
        </Link>

        <input
          type="text"
          placeholder="Buscar livros sombrios, autores, categorias..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-auto flex-1 mx-2 sm:mx-4 px-3 py-2 sm:px-4 sm:py-3 rounded bg-gray-800 placeholder-gray-400 text-white text-sm sm:text-base focus:outline-none focus:ring focus:ring-blue-500 transition-all
  "
        />

        <div className="flex items-center space-x-4">
          <UserMenu />
          <button className="relative text-xl cursor-pointer">
            <Link to="/libary">
              <LibraryBig />
            </Link>
          </button>
        </div>
      </div>

      <NavLinks
        className="flex flex-wrap justify-center text-center px-2 sm:px-4 py-2 space-x-2 sm:space-x-6 border-t border-gray-700 text-sm sm:text-base
  "
        direction="row"
      />
    </header>
  );
}
