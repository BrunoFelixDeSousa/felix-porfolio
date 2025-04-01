import { CardProfile } from '../components/card-profile';
import { SEO } from '../components/seo';
import { profileCardDetails } from '../constants';

export function Profile() {
  return (
    <>
      <SEO title="Perfil" />

      <section className="m-5">
        <h1 className="font-bold text-2xl md:text-3xl pb-4">Sobre</h1>

        <div className="text-justify">
          <div>
            <p>
              Olá, meu nome é <strong>Bruno Félix de Sousa!</strong> Sou
              apaixonado por tecnologia e desenvolvimento de software, sempre em
              busca de evolução para criar soluções eficientes e inovadoras.
            </p>
            <p>
              Atualmente, tenho a oportunidade de trabalhar com Microserviços,
              APIs e BFF (Backend for Frontend), o que tem sido essencial para
              meu crescimento como desenvolvedor. Meu foco está em aprimorar
              minhas habilidades em arquitetura de sistemas escaláveis e
              enfrentar novos desafios que transformem ideias em resultados
              concretos.
            </p>

            <h2 className="font-semibold text-2xl pb-4 pt-6">
              Objetivos Profissionais
            </h2>
            <p>
              Minha jornada na tecnologia é marcada por dedicação e aprendizado
              contínuo. Meu objetivo é crescer na carreira, passando por cada
              etapa com evolução constante:
            </p>
            <p className="pt-2">
              ✅ Estagiário ➡️ ✅ Trainee ➡️ 🔷 Júnior ➡️ 🔹 Pleno ➡️ 🏅 Sênior
              ➡️ 🌟 Especialista ➡️ 🏆 Arquiteto de Software
            </p>
          </div>
          <div className="w-full h-full font-poppins">
            <h2 className="font-bold text-2xl pb-4 pt-6">O que eu faço</h2>
            <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
              {profileCardDetails.map((card, index) => (
                <CardProfile
                  key={index}
                  imgUrl={card.imgUrl}
                  title={card.title}
                  alt={card.alt}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
