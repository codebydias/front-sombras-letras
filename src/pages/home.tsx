import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Flame, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#232222] text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/fundo-sombras-letras.jpg')" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.8)_100%)] z-0"></div>
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl text-center md:text-left space-y-6">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Crown className="h-5 w-5 text-gothic-red" />
              <span className="font-medium tracking-wide uppercase text-sm">
                Literatura Extraordinária
              </span>
            </div>

            <h1 className="text-3xl  md:text-5xl font-bold leading-tight">
              Desperte Sua <br />
              <span className="text-red-800">Imaginação</span> <br />
              Sombria
            </h1>

            <p className="text-zinc-300 italic">
              <em>"Quoth the Raven: Nevermore."</em> Aqui, cada página é um
              portal para os mistérios da alma humana. Onde a literatura
              clássica e contemporânea desperta as profundezas da imaginação.
            </p>

            {/* <div className="flex items-center justify-center md:justify-start gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gothic-red gothic-title">
                  500+
                </div>
                <div className="text-sm text-zinc-400 gothic-text">
                  Títulos Sombrios
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-gothic-red/30"></div>

              <div className="text-center">
                <div className="text-2xl font-bold text-gothic-red gothic-title">
                  50k+
                </div>
                <div className="text-sm text-zinc-400 gothic-text">
                  Leitores Apaixonados
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-gothic-red/30"></div>

              <div className="text-center">
                <div className="text-2xl font-bold text-gothic-red gothic-title">
                  15
                </div>
                <div className="text-sm text-zinc-400 gothic-text">
                  Anos de Histórias
                </div>
              </div>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                variant={"outline"}
                className="flex items-center justify-center gap-2 w-full sm:w-auto bg-red-700 hover:bg-red-900 text-white px-6 md:px-8 py-3 rounded-lg transition-colors shadow-lg"
              >
                <Sparkles className="h-5 w-5" />
                <Link to="/colections">Explorar Coleção</Link>
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                variant={"link"}
                className="flex items-center justify-center gap-2 w-full sm:w-auto border border-gothic-red text-gothic-red hover:bg-gothic-red hover:text-white px-6 md:px-8 py-3 rounded-lg transition-colors"
              >
                <Flame className="h-5 w-5" />
                <Link to="/new-releases" className="flex flex-col">
                  Lançamentos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
