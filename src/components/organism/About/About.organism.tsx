import { useSpring, animated } from 'react-spring';

function About() {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: 200, // Adjust delay as needed
  });

  return (
    <animated.div style={fadeIn} className="text-base md:text-sm">
      <p>
        Hello! Thank you for visiting my profile. My name is{" "}
        <span className="font-bold">Rehan Maulana</span>, and I am a junior
        fullstack engineer passionate about creating captivating and
        user-friendly web experiences. With a strong foundation in React JS, I
        am enthusiastic about turning design concepts into functional and
        visually appealing websites.
      </p>
    </animated.div>
  );
}

export default About;
