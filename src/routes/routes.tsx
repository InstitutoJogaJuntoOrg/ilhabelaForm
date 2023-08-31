import { Routes, Route } from "react-router-dom";
import { FormPage } from "../pages/form/form";
import { DefaultLayout } from "../layout/default";
import { HomePage } from "../pages/home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/inscricao" element={<FormPage />} />
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}