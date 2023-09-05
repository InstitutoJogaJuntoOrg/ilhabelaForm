import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { Container } from "./styles";

export const DefaultLayout = () => {
  return (
    <Container>

      <Header />
      <Outlet />
    </Container>
  );
};