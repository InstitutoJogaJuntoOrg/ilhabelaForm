import { StyledNavLink } from "../styles";
import { MobileMenuContainer } from "./styles";

const MobileMenu = ({closeMenu}: any) => {
    return (
        <MobileMenuContainer>
        <StyledNavLink to={"/"} onClick={closeMenu}>
          Saiba mais
        </StyledNavLink>
        <StyledNavLink to={"/login"} onClick={closeMenu}>
          Fazer login
        </StyledNavLink>
        <StyledNavLink to={"/inscricao"} onClick={closeMenu}>
          Sobre
        </StyledNavLink>
      </MobileMenuContainer>
    );
  };
  
  export default MobileMenu;