import { useEffect, useState } from "react";
import { HeaderContainer, StyledNavLink } from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./mobile";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [userEmail, setUserEmail] = useState("");

  const closeMenu = () => {
    setShowLinks(false);
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowLinks(false);
    };

    const checkUserAuthentication = () => {
      const emailFromLocalStorage = localStorage.getItem("username");

      if (emailFromLocalStorage) {
        setUserEmail(emailFromLocalStorage);
      }
    };

    checkUserAuthentication();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer className={showLinks ? "show-links" : ""}>
      <nav>
        <Link to={"/"}>
          <img
            src="https://cdn.discordapp.com/attachments/566850308702208001/1146230197813788702/Vector_1.png"
            alt="ilhabela prefeitura"
          />
        </Link>
        <ul className={windowWidth <= 800 && showLinks ? "hidden" : ""}>
          <StyledNavLink to={"/"}>Home</StyledNavLink>
          <StyledNavLink to={userEmail ? "/inscricao" : "/login"}>
            {userEmail ? `Olá, ${userEmail}` : "Fazer login"}
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