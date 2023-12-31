import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout/default";
import { HomePage } from "../pages/home";
import { PrivateRoute } from "./private";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/inscricao" element={<PrivateRoute> <HomePage /> </PrivateRoute>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/auth" element={<HomePage />} />
        <Route path="/reset" element={<HomePage />} />
        <Route path="/newpassword" element={<HomePage />} />
        <Route path="/portal-do-titular" element={<HomePage />} />

      </Route>
    </Routes>
  );
}
