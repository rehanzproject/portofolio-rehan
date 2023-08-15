import { educationCard } from "./constant";

function EducationCard() {
  return (
    <>
      <div className="rounded-md pb-[80px] ">
        {educationCard.map((list) => (
          <div key={list.name} className=" hover:bg-zinc-400/5 py-4 md:px-2">
            <h1 className="border-l px-4 text-white font-bold md:text-xl">
              {list.name}{" "}
              <span className="text-slate-400 text-xs">{list.duration}</span>{" "}
              <p className="italic text-xs text-gray-500">
              {list.degree}
              </p>
            </h1>
          
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationCard;
