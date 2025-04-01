type CardExperiencesProps = {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
};

export function CardExperiences({
  company,
  role,
  period,
  logo,
  description,
}: CardExperiencesProps) {
  return (
    <div className="border-2 border-[#b5a265] rounded-md p-2 flex gap-4 justify-items-normal items-center">
      <img
        src={logo}
        className="border-2 border-[#b5a265]/30 rounded-md w-20 h-20"
      />
      <div className="text-sm flex flex-col gap-2">
        <p>
          <strong>{company}</strong>
        </p>
        <p>
          <strong>Função: </strong>
          {role}
        </p>
        <p>
          <strong>Período: </strong> {period}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
