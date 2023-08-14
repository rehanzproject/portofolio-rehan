import CardProject from "../organism/CardProject/CardProject.organism";
import { listCard } from "../organism/CardProject/constant";

function ProjectView() {
  return (
    <>
      {" "}
      <section id="project" className="flex items-center gap-4 py-4">
        <h1 className="text-white text-2xl">Project</h1>
      </section>
      {listCard.map((list) => (
        <CardProject key={list.name} {...list} />
      ))}
    </>
  );
}

export default ProjectView;
