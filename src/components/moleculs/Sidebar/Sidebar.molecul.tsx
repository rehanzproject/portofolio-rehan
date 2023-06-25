import { useRef, useState } from "react";
import { sidebar } from "./constant";

function Sidebar() {
  const ref = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState<boolean>(true);
  
  return (
    <div className={`${isClicked ? "w-72" : "w-12"} text-xl bg-blue-200 h-screen`}>
      <div className="text-slate-400 py-2">

        {sidebar.map((value) => (
          <div key={value.name} className="flex gap-2 py-2 hover:bg-white">
            {value.element && <value.element />}
            <h1 ref={ref} className={`${!isClicked && "hidden"} py-1 cursor-pointer`}>{value.name}</h1>
          </div>
        ))}
        <button onClick={()=>setIsClicked(isClicked => !isClicked)} className={`rounded-full p-1 relative justify-end items-center bg-white`}>{`>`}</button>
      </div>
    </div>
  );
}

export default Sidebar;
