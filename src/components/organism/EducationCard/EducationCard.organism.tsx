import { educationCard } from "./constant";

function EducationCard() {
  return (
    <>
      <div className="rounded-md md:py-2">
        {educationCard.map((list) => (
          <div key={list.name} className=" hover:bg-zinc-400/5 py-2 md:px-2">
            <h1 className="border-l px-4 text-white font-bold md:text-xl">
              {list.name}{" "}
              <span className="text-slate-400 text-xs">{list.duration}</span>{" "}
              <p className="italic text-xs text-gray-500">
                Final Score: {list.finalScore}
              </p>
            </h1>
          
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationCard;
