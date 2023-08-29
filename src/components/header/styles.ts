import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #9fdb89;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 93px;
    justify-content: space-between;
    padding: .2rem 4rem;
  }

  ul {
    justify-content: flex-end;
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
  font-weight: 700;
  text-decoration: none;
  color: #54993a;

  &:hover {
    color: white;
    background-color: #54993a;
    border-radius: 60px;
  }
  /* Estilos para o link ativo */
  &.active {
    color: white;
    background-color: #54993a;
    border-radius: 60px;
  }
`;
