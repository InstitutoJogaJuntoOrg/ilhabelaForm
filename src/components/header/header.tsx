import { useEffect, useState } from "react";
import { HeaderContainer, StyledNavLink } from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./mobile";

export const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const closeMenu = () => {
    setShowLinks(false);
    console.log("fechou");
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowLinks(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer className={showLinks ? "show-links" : ""}>
      <nav>
        <img src="https://cdn.discordapp.com/attachments/566850308702208001/1146230197813788702/Vector_1.png" alt="ilhabela prefeitura" />
        <ul className={windowWidth <= 800 && showLinks ? "hidden" : ""}>
          <StyledNavLink to={"/"} >
            Saiba mais
          </StyledNavLink>
          <StyledNavLink to={"/login"}>
            Fazer login
          </StyledNavLink>
          <StyledNavLink to={"/inscricao"}>
            Sobre
          </StyledNavLink>
        </ul>
        <div className="hamburger-icon" onClick={toggleLinks}>
          {showLinks ? <FaTimes /> : <FaBars />}
        </div>
        {showLinks && windowWidth <= 800 && (
          <MobileMenu closeMenu={closeMenu} />
        )}
      </nav>
    </HeaderContainer>
  );
};
