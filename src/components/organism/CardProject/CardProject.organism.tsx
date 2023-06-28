import { ICardProject } from "./constant";

function CardProject(list: ICardProject) {
  const handleOpenPDF = (pdf: string) => {
    window.open(pdf, "_blank");
  };
  return (
    <div
      key={list.name}
      className="rounded-md group/item hover:bg-zinc-500/10  sm:text-sm md:px-4 sm:py-2 sm:px-4"
    >
      <p className="font-bold text-lg py-1 group-hover/item:text-emerald-400 text-white">{list.name}</p>
      <p className="py-2">{list.desc}</p>
      <div className="flex">
        {list.techStack.map((card) => (
          <div
            key={card}
            className="rounded-full bg-slate-600/20 text-emerald-400 p-1 px-2 mx-1 text-sm md:flex"
          >
            {card}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => handleOpenPDF(list.pdf)}
        className="p-1 py-2 text-blue-500"
      >
        See Detail
      </button>
    </div>
  );
}

export default CardProject;
