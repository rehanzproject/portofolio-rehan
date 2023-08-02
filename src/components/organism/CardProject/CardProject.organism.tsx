import { ICardProject } from "./constant";

function CardProject({ desc, name, pdf, techStack }: ICardProject) {
  const handleOpenPDF = (pdf: string) => {
    window.open(pdf, "_blank");
  };
  return (
    <div
      key={name}
      className="rounded-md group/item md:px-4 hover:bg-zinc-500/10"
    >
      
      <p className="font-bold text-lg py-1 group-hover/item:text-emerald-400 text-white">
        {name}
      </p>
    
      <p className="py-2">{desc}</p>
      <div className="flex flex-wrap">
        {techStack.map((card) => (
          <div
            key={card}
            className="rounded-full m-2 md:m-1 bg-slate-600/20 text-emerald-400 p-1 px-2 text-sm"
          >
            {card}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => handleOpenPDF(pdf)}
        className="p-1 py-2 text-blue-500"
      >
        See Detail
      </button>
    </div>
  );
}

export default CardProject;
