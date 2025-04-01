import noImage from '../assets/no-image.jpg';
import { SEO } from '../components/seo';

export function Projects() {
  return (
    <>
      <SEO title="Projetos" />

      <section className="m-5">
        <h1 className="font-bold text-2xl md:text-3xl pb-4">Projetos</h1>
        <p className="mb-6">
          Em breve, novos projetos estarão disponíveis para visualização.
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="flex flex-col gap-4 border-2 border-[#b5a265] rounded-md items-center p-4 hover:shadow-md transition-shadow"
            >
              <img
                src={noImage}
                alt={`Imagem do Projeto 0${num}`}
                className="h-auto w-full max-h-40 object-cover"
              />
              <span className="font-medium">Projeto 0{num}</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-[#b5a265] text-white rounded-md text-sm hover:bg-amber-800 transition-colors">
                  Demo
                </button>
                <button className="px-3 py-1 border border-[#b5a265] rounded-md text-sm hover:bg-amber-100 transition-colors">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
