import { mySkill } from "./constant";

function CardSkill() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
     
      {mySkill.map((list) => (
        <div key={list.name} className="flex flex-col text-center justify-center items-center overflow-hidden">
          <img src={list.icon} alt="" className="w-full sm:w-[200px]" />
          <p>{list.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CardSkill;
