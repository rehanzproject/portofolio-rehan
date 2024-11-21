import { ICardProject } from "./constant";

function CardProject({ desc, name, image, techStack }: ICardProject) {

  return (
    <div
      key={name}
      className="rounded-md group/item p-4 hover:bg-zinc-500/10 hover:scale-105 transform transition duration-300 ease-in-out"
    >
      <img
        src={image}
        alt="portfolio"
        width={1280}
        height={720}
        className="object-contain w-auto"
      />
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

    </div>
    
  );
}

export default CardProject;
