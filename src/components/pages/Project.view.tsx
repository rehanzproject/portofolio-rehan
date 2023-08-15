import CardProject from "../organism/CardProject/CardProject.organism";
import { listCard } from "../organism/CardProject/constant";

function ProjectView() {
  return (
    <>
      {" "}
      <section id="project" className="gap-4 py-8">
        <h1 className="text-white text-2xl">Project</h1>
     <div className="grid grid-cols-1 md:grid-cols-2">
     {listCard.map((list) => (
        <CardProject key={list.name} {...list} />
      ))}
     </div>
      
       </section>
    </>
  );
}

export default ProjectView;
