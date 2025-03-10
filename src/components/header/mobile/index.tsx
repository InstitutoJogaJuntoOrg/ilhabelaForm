import { useEffect, useState } from "react";
import MyDropdown from "../profile";
import { StyledNavLink } from "../styles";
import { MobileMenuContainer } from "./styles";

const MobileMenu = ({ closeMenu }: any) => {
  const [user, setUser] = useState<string | undefined>(undefined);

  useEffect(() => {
    const checkUserAuthentication = () => {
      const emailFromLocalStorage = localStorage.getItem("username");

      if (emailFromLocalStorage) {
        setUser(emailFromLocalStorage);
      }
    };

    checkUserAuthentication();
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
           }} href="https://wa.me/559198189000" target={"_blank"}>Ajuda</a></li> 
            <li>
            <a
              style={{
                textDecoration: "none",
                color: "#54993a",
              }}
              href="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/CRIT%C3%89RIOS+DE+AVALIA%C3%87%C3%83O+E+SELE%C3%87%C3%83O+-+IBT.pdf"
              target={"_blank"}
            >
              Transparência 
            </a>
          </li>
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
