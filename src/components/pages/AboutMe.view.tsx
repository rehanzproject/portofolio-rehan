import { EducationView, ProjectView, SkillsView } from ".";
import ExperienceView from "./Experience.view";
function AboutMeView(){
  return (
    <div>
      <ExperienceView />
      <ProjectView />
      <EducationView />
      <SkillsView />
    </div>
  )
}

export default AboutMeView;
