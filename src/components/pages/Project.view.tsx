import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import CardProject from "../organism/CardProject/CardProject.organism";
import { ICardProject, listCard } from "../organism/CardProject/constant";

function ProjectView() {
  return (
    <section id="project" className="gap-4 py-8">
      <h1 className="text-white text-2xl">Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listCard.map((list) => (
          <AnimatedCard key={list.name} card={list} />
        ))}
      </div>
    </section>
  );
}

function AnimatedCard({ card }: { card: ICardProject }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Trigger when 20% of the card is visible
  });

  // Spring animation hook
  const animation = useSpring({
    opacity: inView ? 1 : 0, // Fade in when in view
    transform: inView ? "translateY(0)" : "translateY(20px)", // Slide up
    config: { tension: 200, friction: 30 }, // Adjust animation speed
  });

  return (
    <animated.div ref={ref} style={animation}>
      <CardProject {...card} />
    </animated.div>
  );
}

export default ProjectView;
