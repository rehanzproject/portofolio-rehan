import { HeaderIcon } from "../../moleculs";

function AboutMe(): JSX.Element {
  return (
    <section id="resume" className="pt-[50px]">
      <div className="text-white">
        <h1 className="text-4xl font-extrabold">Rehan Maulana</h1>
        <h1 className="font-bold text-xl">Front End Engineer</h1>
        <HeaderIcon />
        <p className="text-base py-4">
          I build a interactive website
        </p>
      </div>
  
    </section>
  );
}

export default AboutMe;
