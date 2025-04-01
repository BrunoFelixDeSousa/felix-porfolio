import { SEO } from '../components/seo';
import { skills } from '../constants';

export function Skills() {
  return (
    <>
      <SEO title="Habilidades" />

      <section className="m-5">
        <h1 className="font-bold text-2xl md:text-3xl pb-4">
          Habilidades com:
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-2"
              />
              <span className="text-center font-inter">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
