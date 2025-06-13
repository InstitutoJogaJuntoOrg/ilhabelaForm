import { useEffect, useState } from "react";
import axios from "axios";
import MyDropdown from "../profile";
import { StyledNavLink } from "../styles";
import { MobileMenuContainer } from "./styles";

const MobileMenu = ({ closeMenu }: any) => {
  const [user, setUser] = useState<string | undefined>(undefined);
  const [editalLink, setEditalLink] = useState<string>("#");

  useEffect(() => {
    const checkUserAuthentication = () => {
      const emailFromLocalStorage = localStorage.getItem("username");

      if (emailFromLocalStorage) {
        setUser(emailFromLocalStorage);
      }
    };

    checkUserAuthentication();

    axios
      .get(
        "https://api.jogajuntoinstituto.org/hotsite/selective/?process_id=5"
      )
      .then((response) => {
        const result = response.data.results[0];
        setEditalLink(result.edital);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <MobileMenuContainer>
      <StyledNavLink to={"/"} onClick={closeMenu}>
        Home
      </StyledNavLink>
      <div>

         {/* {!user && <StyledNavLink to="/login" onClick={closeMenu}>Fazer login</StyledNavLink>} 

      
        {user && (
          <StyledNavLink to={user ? "/inscricao" : "/auth"} onClick={closeMenu}>
            Inscrição
          </StyledNavLink>
        )}  */}
               <li><a style={{
            textDecoration: 'none',
            color: '#f8fcf7'
           }} href={editalLink} target="_blank">Transparência</a></li>
               <li><a style={{
            textDecoration: 'none',
            color: '#f8fcf7'
           }} href="https://wa.me/559198189000" target={"_blank"}>Ajuda</a></li>
          <div style={{
              marginTop: '20px'
             }}>
             {user && <MyDropdown />}
             </div>
             
      </div>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
