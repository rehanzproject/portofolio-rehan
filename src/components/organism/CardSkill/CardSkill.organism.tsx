import CheckMark from "../../atoms/Icons/CheckMarkIcon.icon"
import { mySkill } from "./constant";

function CardSkill() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
     
      {mySkill.map((list) => (
        <ul key={list} className="">
          <li className="flex gap-2">
            <CheckMark /> {list}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default CardSkill;
