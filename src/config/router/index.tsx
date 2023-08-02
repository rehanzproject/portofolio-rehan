import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutMeView,
  EducationView,
  ProjectView,
  SkillsView,
  TemplateIndex,
  TodoListView,
} from "../../components/pages";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TemplateIndex />}>
          <Route path="/" element={<AboutMeView />} />
          <Route path="/skills" element={<SkillsView />} />
          <Route path="/education" element={<EducationView />} />
          <Route path="/project" element={<ProjectView />} />
        </Route>
        <Route path="/todo" element={<TodoListView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
