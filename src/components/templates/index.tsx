import { Outlet } from "react-router-dom";
import AboutMe from "../organism/AboutMe/AboutMe.organism";

function TemplateIndex() {
  return (
    <div className="flex flex-col md:justify-center md:flex-row h-screen">
      <AboutMe />
      <div className="flex w-full px-16 md:w-[50%] lg:py-24 md:py-4 sm:py-2 ">
        <Outlet />
      </div>
    </div>
  );
}

export default TemplateIndex;
