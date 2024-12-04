import { mySkill } from "./constant";
function CardSkill() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-20">
      {mySkill.map((list) => (
        <div
          key={list.name}
          className="flex flex-row gap-2 p-2 text-center justify-start items-center rounded-md hover:bg-zinc-500/10"
        >
          <img
            src={list.icon}
            alt={list.name}
            className="w-[40px] h-[40px] object-contain"
          />
          <p className="mt-4 md:text-lg font-medium">{list.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CardSkill;
