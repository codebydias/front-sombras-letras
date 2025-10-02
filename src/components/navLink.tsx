// src/components/NavLinks.tsx
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Lançamentos", path: "/releases" },
  { label: "Terror & Horror", path: "/horror" },
  { label: "Fantasia Dark", path: "/dark-fantasy" },
  { label: "Mistério", path: "/mystery" },
  { label: "Ocultismo", path: "/occultism" },
  { label: "Coleções Especiais", path: "/special-collections" },
  { label: "Clube do Livro", path: "/book-club" },
  { label: "Promoções", path: "/deals" },
  { label: "Sobre", path: "/about" },
];

interface NavLinksProps {
  direction?: "row" | "col";
  className?: string;
}

export function NavLinks({ direction, className }: NavLinksProps) {
  return (
    <nav
      className={`flex ${
        direction === "row" ? "space-x-6" : "flex-col space-y-2"
      } ${className}`}
    >
      {navLinks.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="hover:text-blue-400 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
