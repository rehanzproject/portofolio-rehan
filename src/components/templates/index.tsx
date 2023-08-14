import { Outlet } from "react-router-dom";
import AboutMe from "../organism/AboutMe/AboutMe.organism";
import Navbar from "../organism/Navbar/Navbar.organism";

function TemplateIndex() {
  return (
    <>
    <Navbar />
      <div className="flex flex-col px-4 md:px-16 ">
        <AboutMe />
        <Outlet />
      </div>
    </>
  );
}

export default TemplateIndex;
