import { Routes, Route } from "react-router-dom";
import { FormPage } from "../pages/form/form";
import { DefaultLayout } from "../layout/default";
import { HomePage } from "../pages/home";
import { RegisterPage } from "../pages/auth/register";

import { EmailPage } from "../pages/auth/email";
import { LoginPage } from "../pages/auth/login";
import { PrivateRoute } from "./private";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/inscricao" element={<PrivateRoute> <FormPage /> </PrivateRoute>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<EmailPage />} />
        <Route path="/auth" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
