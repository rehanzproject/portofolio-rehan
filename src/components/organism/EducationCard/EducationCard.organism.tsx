import { educationCard } from "./constant";

function EducationCard() {
  return (
    <>
      <div className="rounded-md pb-[80px]">
        {educationCard.map((list) => (
          <div
            key={list.name}
            className=" hover:bg-zinc-400/5 py-4 md:px-2"
          >
            <div className="flex justify-between md:justify-normal">
            <h1 className="border-l px-4 text-lg text-white font-bold md:text-xl">
              {list.name}</h1>
              <span className="text-slate-300 text-sm pt-1">{list.duration}</span>{" "}
            </div>
              <p className="italic text-base text-gray-300">{list.degree}</p>
              <p className="text-sm text-gray-200"><span className="text-white font-bold">Grade :</span>  {list.grade}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationCard;
