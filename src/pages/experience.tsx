import { CardExperiences } from '../components/card-experiences';
import { SEO } from '../components/seo';
import { experiencesDetails } from '../constants';

export function Experience() {
  return (
    <>
      <SEO title="Experiencias" />

      <section className="m-5">
        <h1 className="font-bold text-2xl md:text-3xl pb-4">Formação</h1>

        <div className="flex flex-col gap-6">
          <div className=" flex gap-2">
            <div className="border-2 border-[#b5a265] rounded-md p-2">
              <span className="p-1 dark:text-amber-50">
                2018 - Em andamento
              </span>
              <p className="text-sm">
                <strong>Universidade Federal Rural da Amazônia (UFRA)</strong> -
                Bacharelado em Sistemas de Informação
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-2xl pt-2 pb-4">Experiências</h2>
            <div className="flex flex-col gap-4">
              {experiencesDetails.map((experience) => (
                <CardExperiences
                  key={experience.id}
                  company={experience.company}
                  logo={experience.logo}
                  role={experience.role}
                  period={experience.period}
                  description={experience.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
