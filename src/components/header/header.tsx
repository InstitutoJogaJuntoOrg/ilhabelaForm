import { useEffect, useState } from "react";
import { HeaderContainer, StyledNavLink } from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./mobile";
import { Link } from "react-router-dom";
import MyDropdown from "./profile";

export const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [userEmail, setUserEmail] = useState("");
  const emailFromLocalStorage = localStorage.getItem("username");
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
  console.log(userEmail);
  return (
    <HeaderContainer className={showLinks ? "show-links" : ""}>
      <nav>
        <Link to={"/"}>
          <img
            style={{
              width: '50px',
              borderRadius: '6px'
            }}
            src="https://media.licdn.com/dms/image/C560BAQHqBelcvq8ocw/company-logo_200_200/0/1656708777466?e=2147483647&v=beta&t=0_pf68Bkigp0lmy3Feb6uVPEhkDIgrxDKUP2aSq36-8"
            alt="Instituto Joga Junto"
          />
        </Link>
        <ul className={windowWidth <= 1000 && showLinks ? "hidden" : ""}>
 
         {!emailFromLocalStorage && (
            <StyledNavLink to="/login">Fazer login</StyledNavLink>
          )} 

          {emailFromLocalStorage && <MyDropdown />}

          {emailFromLocalStorage && (
            <StyledNavLink to={emailFromLocalStorage ? "/inscricao" : "/auth"}>
              Inscrição
            </StyledNavLink>
          )}
            <li><a style={{
            textDecoration: 'none',
            color: '#FCD700'
           }} href="https://wa.me/5511945950731" target={"_blank"}>Ajuda</a></li>
        </ul>
        <div className="hamburger-icon" onClick={toggleLinks}>
          {showLinks ? <FaTimes /> : <FaBars />}
        </div>
        {showLinks && windowWidth <= 1000 && (
          <MobileMenu closeMenu={closeMenu} />
        )}
      </nav>
    </HeaderContainer>
  );
};
