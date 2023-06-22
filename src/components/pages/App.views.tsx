import Navbar from "../moleculs/Navbar/Navbar.molecul";
import AboutMe from "../organism/AboutMe.organism";

function FullView() {
  const testString :unknown = "Rehan"
  return (
    <div className="flex text-center justify-center max-w-screen h-screen bg-blue-200">
      <div className="w-[42rem] border bg-gradient-to-br from-black to-blue-500 text-white">
        
        <div className="flex items-start">
          About Me
        </div>
       <Navbar />
       <AboutMe arg={testString as string} />
      </div>
    </div>
  );
}

export default FullView;
