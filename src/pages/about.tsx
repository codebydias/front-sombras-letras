export default function About() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 text-[#a30036] tracking-wide">
            Sobre Sombras & Letras
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Conheça nossa missão, visão e os valores que nos tornam únicos.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#d32f58] mb-2">Missão</h2>
          <p className="text-gray-300 text-base">
            Oferecer aos leitores uma experiência completa, com lançamentos e
            promoções de livros e coleções, priorizando qualidade, preço justo e
            atendimento ágil.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#d32f58] mb-2">Visão</h2>
          <p className="text-gray-300 text-base">
            Ser referência no mercado de livros online, promovendo a leitura e
            facilitando o acesso às principais obras, de forma prática e
            confiável.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#d32f58] mb-2">
            Valores
          </h2>
          <ul className="list-disc list-inside text-gray-300 text-base space-y-1">
            <li>Compromisso com a qualidade e autenticidade dos livros.</li>
            <li>Promoções transparentes e preços justos.</li>
            <li>Valorização da leitura e cultura.</li>
            <li>Atendimento ágil e eficiente.</li>
            <li>Inovação constante na experiência do usuário.</li>
          </ul>
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sombras & Letras . Todos os direitos
          reservados.
        </footer>
      </div>
    </div>
  );
}
