import MyDropdown from "../profile";
import { StyledNavLink } from "../styles";
import { MobileMenuContainer } from "./styles";


const MobileMenu = ({closeMenu}: any) => {
  const user = localStorage.getItem('username');

  return (


        <MobileMenuContainer>
        <StyledNavLink to={"/"} onClick={closeMenu}>
          Saiba mais
        </StyledNavLink>
        
        <StyledNavLink to={user?"/inscricao":"/auth"} onClick={closeMenu}>
        {user && <MyDropdown />}
        </StyledNavLink>
        {!user && <MyDropdown/>}
        <StyledNavLink to={"/inscricao"} onClick={closeMenu}>
          Sobre
        </StyledNavLink>
      </MobileMenuContainer>
    );
  };
  
  export default MobileMenu;