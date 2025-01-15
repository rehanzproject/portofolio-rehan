import { useSpring, animated } from "react-spring";
import { HeaderIcon } from "../../moleculs";
import image from "/images/mypicture.webp";
import myCV from "/document/CV_Rehan_Maulana.pdf";
import { FaDownload, FaWhatsapp } from "react-icons/fa"; // Importing icons

function AboutMe() {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 200,
  });
  return (
    <section id="resume" className="pt-[50px] py-6 flex flex-col md:flex-row">
      <div className="text-white w-full md:w-1/2">
        <animated.h1 style={fade} className="text-4xl font-extrabold">
          Rehan Maulana
        </animated.h1>
        <animated.h1 style={fade} className="font-bold text-xl">
          Full Stack Web Developer
        </animated.h1>
        <animated.i style={fade}>
          <HeaderIcon />
        </animated.i>
        <animated.div
          style={fadeIn}
          className="text-white text-base pt-4 md:text-sm w-full md:w-3/4"
        >
          <p className="my-6">
            Hello! Thank you for visiting my profile. My name is{" "}
            <span className="font-bold">Rehan Maulana</span>, and I am a junior
            fullstack engineer passionate about creating captivating and
            user-friendly web experiences. With a strong foundation in React JS,
            I am enthusiastic about turning design concepts into functional and
            visually appealing websites.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href={myCV}
              target="_blank"
              rel="noopener noreferrer"
              className="border-emerald-400 shadow-emerald-400 shadow-lg p-3 rounded-full border-2 flex items-center gap-2"
            >
              <FaDownload /> {/* Download Icon */}
              Download CV
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6283895104256"
              target="_blank"
              rel="noopener noreferrer"
              className="border-emerald-400 shadow-emerald-400 shadow-lg p-3 rounded-full border-2 flex items-center gap-2"
            >
              <FaWhatsapp /> {/* WhatsApp Icon */}
              Hire Me
            </a>
          </div>
        </animated.div>
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img
          src={image}
          alt="Picture"
          className="rounded-full md:w-72 md:h-72 md:pt-0 pt-6"
        />
      </div>
    </section>
  );
}

export default AboutMe;
