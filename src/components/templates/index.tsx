import { Outlet } from "react-router-dom";
import AboutMe from "../organism/AboutMe/AboutMe.organism";

function TemplateIndex() {
  return (
    <div className="flex flex-col md:justify-center md:flex-row lg:h-screen">
      <AboutMe />
      <div className="flex w-full md:w-[50%] lg:py-24 md:py-2 px-16">
        <Outlet />
      </div>
    </div>
  );
}

export default TemplateIndex;
