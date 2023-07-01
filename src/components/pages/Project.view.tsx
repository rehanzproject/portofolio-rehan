import CardProject from "../organism/CardProject/CardProject.organism";
import { listCard } from "../organism/CardProject/constant";

function ProjectView() {
  return (
    <div>
      <h1 className="text-white text-2xl md:px-4">Project</h1>

      {listCard.map((list) => (
        <CardProject key={list.name} {...list} />
      ))}
    </div>
  )
}

export default ProjectView;
