type CardProfileProps = {
  imgUrl: string;
  title: string;
  alt: string;
  description: string;
};

export function CardProfile({
  imgUrl,
  title,
  alt,
  description,
}: CardProfileProps) {
  return (
    <div className="w-full h-90 border-2 border-[#b5a265] rounded-xl flex flex-row font-inter">
      <div className="w-2/5">
        <img className="w-full h-full object-cover" src={imgUrl} alt={alt} />
      </div>
      <div className="w-4/5 p-4 overflow-y-auto rounded-r-xl bg-[#FDF4F4] dark:bg-[#60594B] dark:text-[#D1D1CD]">
        <h2 className="font-semibold text-xl pb-3 dark:text-amber-50">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
