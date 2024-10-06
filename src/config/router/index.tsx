import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutMeView,
  TemplateIndex,
} from "../../components/pages";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TemplateIndex />}>
          <Route path="/" element={<AboutMeView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
