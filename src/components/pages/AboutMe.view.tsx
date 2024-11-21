import { EducationView, ProjectView, SkillsView } from ".";
import ContactCard from "../organism/ContactCard/ContactCard.organism";

function AboutMeView(){
  return (
    <div>
      <ProjectView />
      <EducationView />
      <SkillsView />
      {/* <ContactCard /> */}
    </div>
  )
}

export default AboutMeView;
