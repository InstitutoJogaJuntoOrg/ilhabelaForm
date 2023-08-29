
import { HeaderContainer, StyledNavLink } from "./styles";

export const Header = () => {
    return (
      <HeaderContainer>
        <nav>
          <ul>
            <StyledNavLink to={"/"}>Saiba maiss</StyledNavLink>
            <StyledNavLink to={"/login"}>Saiba mais</StyledNavLink>
            <StyledNavLink to={"/inscrição"}>Saiba mais</StyledNavLink>
          </ul>
        </nav>
      </HeaderContainer>
    );
  };