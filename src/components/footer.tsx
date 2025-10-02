import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Moon,
} from "lucide-react";
import { NavLinks } from "./navLink";

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Moon className="h-8 w-8 text-red-600" />
              <h1 className="text-2xl font-bold text-white">
                Sombras <span className="text-red-600">& Letras</span>
              </h1>
            </div>
            <p className="text-sm mb-6 leading-relaxed italic">
              "Tudo o que somos resulta do que pensamos." – Buda
              <br />
              Há 15 anos cultivamos jardins sombrios onde florescem as mais
              belas inquietações da alma humana.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-gray-800 p-3 rounded-xl hover:bg-red-600 hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-semibold text-red-600 mb-6">Categorias</h4>
            <NavLinks direction="col" />
          </div>

          <div>
            <h4 className="font-semibold text-red-600 mb-6">Atendimento</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Central de Ajuda",
                "Política de Troca",
                "Frete e Entrega",
                "Formas de Pagamento",
                "Clube do Livro",
                "Programa de Fidelidade",
                "Dúvidas Frequentes",
                "Contato",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-600 mb-6">Contato</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-red-600" />
                <p>
                  Rua das Sombras, 777
                  <br />
                  Vila Dark - Belém/PA
                  <br />
                  CEP: 01234-567
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-red-600" />
                <span>(91) 98765-4321</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-red-600" />
                <span>contato@sombraseletras.com.br</span>
              </div>
              <p className="text-xs">
                Atendimento:
                <br />
                Seg a Sex: 9h às 18h
                <br />
                Sáb: 9h às 15h
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 text-center text-xs text-gray-500 border-t border-gray-800">
          <p>© 2025 Sombras & Letras. Todos os direitos reservados.</p>
          <p className="mt-1 italic">
            "No final, somos todos apenas histórias." Feito para aqueles que
            dançam com as sombras
          </p>
        </div>
      </div>
    </footer>
  );
}
