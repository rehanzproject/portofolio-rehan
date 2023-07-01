import { educationCard } from "./constant";

function EducationCard() {
  return (
    <div className="rounded-md p-2 md:px-4 hover:bg-zinc-400/5">
      {educationCard.map((list) => (
        <div key={list.name} className="py-2">
          <h1 className="text-white font-bold md:text-xl">
            {list.name}  <span className="text-slate-400 text-xs">{list.duration}</span>{" "}
          </h1>
          <p className="text-sm">{list.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationCard;
