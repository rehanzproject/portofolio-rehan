import { EducationView, ProjectView, SkillsView } from ".";
import About from "../organism/About/About.organism";

function AboutMeView(): JSX.Element {
  return (
    <div>
      <About />
      <ProjectView />
      <EducationView />
      <SkillsView />
    </div>
  )
}

export default AboutMeView;
