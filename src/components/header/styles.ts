import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #72b65a;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 93px;
  padding: 0px 47px;

  ul {
    display: flex;
    gap: 25px;
  }
`;
export const StyledNavLink = styled(NavLink)`
z-index: 10;
  /* Estilos para o link */
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: white;

  /* Estilos para o link ativo */
  &.active {
    color: white;
    background-color: #54993A;
    border-radius: 60px;
  }
`;