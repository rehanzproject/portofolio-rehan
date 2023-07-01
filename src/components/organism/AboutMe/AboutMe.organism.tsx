import { HeaderIcon } from "../../moleculs";
import { listAbout } from "./constant";

function AboutMe(): JSX.Element {
  
  return (
    <div className="p-16 text-4xl">
      <HeaderIcon />
      <div className="text-white">
        <h1 className="font-extrabold">Rehan Maulana</h1>
        <h1 className="font-bold text-xl">Front End Engineer</h1>
        <p className="text-base py-4">Junior Front End Engineer and less experience</p>
       </div>
       <div className="block lg:block sm:hidden">
      
       {listAbout.map((list) => (
        <div
          key={list.name}
          className={`flex flex-row text-lg hover:text-xl hover:font-bold ${
            window.location.pathname === list.path ? "text-white font-bold text-xl" : ""
          }`}
        >
          <a href={list.path}>{list.name}</a>
        </div>
      ))}
       </div>
     
    </div>
  );
}

export default AboutMe;
