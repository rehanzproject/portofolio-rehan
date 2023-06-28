import CardProject from "../organism/CardProject/CardProject.organism";
import { listCard } from "../organism/CardProject/constant";

function ProjectView() {
  return (
    <div className="px-6 py-2 sm:px-1">
      <h1 className="text-white text-2xl px-4 sm:px-1 md:px-2 lg:px-4">Project</h1>

      {listCard.map((list) => (
        <CardProject key={list.name} {...list} />
      ))}
    </div>
  )
}

export default ProjectView;
