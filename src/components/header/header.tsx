import { useEffect, useState } from "react";
import axios from "axios";
import { HeaderContainer, StyledNavLink } from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./mobile";
import { Link } from "react-router-dom";
import MyDropdown from "./profile";

export const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [userEmail, setUserEmail] = useState("");
  const [editalLink, setEditalLink] = useState<string>("#");
  const emailFromLocalStorage = localStorage.getItem("token");
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
      const emailFromLocalStorage = localStorage.getItem("token");

      if (emailFromLocalStorage) {
        setUserEmail(emailFromLocalStorage);
      }
    };

    checkUserAuthentication();

    axios
      .get(
        "https://api.jogajuntoinstituto.org/hotsite/selective/?process_id=10"
      )
      .then((response) => {
        const result = response.data.results[0];
        setEditalLink(result.edital);
      })
      .catch((err) => console.error(err));

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
            src="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/nav_logo_ilhabela.png"
            alt="ilhabela prefeitura"
          />
        </Link>
        <ul className={windowWidth <= 1000 && showLinks ? "hidden" : ""}>
          <StyledNavLink to={"/"}>Home</StyledNavLink>
         {/* {!emailFromLocalStorage && (
            <StyledNavLink to="/login">Fazer login</StyledNavLink>
          )}

          {emailFromLocalStorage && <MyDropdown />}

          {emailFromLocalStorage && (
            <StyledNavLink to={emailFromLocalStorage ? "/inscricao" : "/auth"}>
              Inscrição
            </StyledNavLink>
          )}  */}
          <li>
            <a
              style={{ textDecoration: "none", color: "#54993a" }}
              href={editalLink}
              target="_blank"
            >
              Transparência
            </a>
          </li>
          <li>
            <a
              style={{
                textDecoration: "none",
                color: "#54993a",
              }}
              href="https://wa.me/5512988902389"
              target={"_blank"}
            >
              Ajuda
            </a>
          </li>
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
