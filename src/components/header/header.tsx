
import { HeaderContainer, StyledNavLink } from "./styles";

export const Header = () => {
    return (
      <HeaderContainer>
        <nav>
            <img src="https://cdn.discordapp.com/attachments/566850308702208001/1146230197813788702/Vector_1.png" alt="ilhabela prefeitura" />
          <ul>
            <StyledNavLink to={"/"}>Saiba mais</StyledNavLink>
            <StyledNavLink to={"/login"}>Fazer login</StyledNavLink>
            <StyledNavLink to={"/inscricao"}>Sobre</StyledNavLink>
          </ul>
        </nav>
      </HeaderContainer>
    );
  };