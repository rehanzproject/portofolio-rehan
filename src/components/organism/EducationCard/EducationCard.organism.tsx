import { educationCard } from "./constant";

function EducationCard() {
  const handleOpen = (pdf: string) => {
    window.open(pdf, "_blank");
  };

  return (
    <>
      <div className="rounded-md md:px-8 md:py-2">

        {educationCard.map((list) => (
          <div key={list.name} className="hover:bg-zinc-400/5 py-2 md:px-2">
            <h1 className="text-white font-bold md:text-xl">
              {list.name}{" "}
              <span className="text-slate-400 text-xs">{list.duration}</span>{" "}
            </h1>
            <button className="py-2 hover:text-blue-500" onClick={() => handleOpen(list.pdf)}>
              Achievement
            </button>
          </div>
        ))}
      </div>   
    </>
  );
}

export default EducationCard;
