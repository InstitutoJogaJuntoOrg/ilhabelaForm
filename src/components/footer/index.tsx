import { Container } from "./styles";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <Link to={"/"}>
            <img
              src="/logo_white.png"
              alt="Comunidade logo"
            />
          </Link>

          <div className="footerFlex">
            <ul>
              <h1>Organização</h1>
              <li>Sobre</li>
              <li>Empresas</li>
              <li>Eventos</li>
              <li>Contato</li>
            </ul>

            <ul>
              <h1>Projetos</h1>
              <li>Trip</li>
              <li>Farm</li>
              <li>Voa</li>
              <li>Goal</li>
            </ul>
          </div>
          <div className="colaboraai">
            <button>Colabora aí</button>
              <div>
                <FaFacebookSquare />
                <FaLinkedin />
                <FaInstagram />
              </div>
          </div>
        </div>
        <hr />
        <div className="footerSub">
        <p>© Instituto Joga Junto 2023. Todos os direitos reservados.</p>
      </div>
      </Container>
 
    </footer>
  );
};
