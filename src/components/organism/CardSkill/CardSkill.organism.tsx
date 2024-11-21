import { mySkill } from "./constant";
function CardSkill() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {mySkill.map((list) => (
        <div
          key={list.name}
          className="flex flex-col text-center justify-center items-center"
        >
          <img
            src={list.icon}
            alt={list.name}
            className="w-[150px] h-[150px] object-contain"
          />
          <p className="mt-4 text-lg font-medium">{list.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CardSkill;
