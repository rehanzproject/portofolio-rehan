import { useSpring, animated } from "react-spring";
import { HeaderIcon } from "../../moleculs";

function AboutMe(): JSX.Element {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <section id="resume" className="pt-[50px] py-6">
      <div className="text-white">
        <animated.h1 style={fade} className="text-4xl font-extrabold">
          Rehan Maulana
        </animated.h1>
        <animated.h1 style={fade} className="font-bold text-xl">
          Full Stack Web Developer
        </animated.h1>
        <animated.i style={fade}>
          <HeaderIcon />
        </animated.i>
      </div>
    </section>
  );
}

export default AboutMe;
