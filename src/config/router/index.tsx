import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutMeView,
  CertificateView,
  ContactView,
  ExperienceView,
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
          <Route path="/experience" element={<ExperienceView />} />
          <Route path="/project" element={<ProjectView />} />
          <Route path="/certificate" element={<CertificateView />} />
          <Route path="/contact" element={<ContactView />} />
        </Route>
        <Route path="/todo" element={<TodoListView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
