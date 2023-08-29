import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/header/header";
import { Container } from "./styles";

export const DefaultLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <Container>
      {!isLoginPage && <Header />}
      <Outlet />
    </Container>
  );
};