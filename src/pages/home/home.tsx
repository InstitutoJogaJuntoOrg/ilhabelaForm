import { HomeContainer } from "./styles";

import { Footer } from "../../components/footer";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <div>
          <h1>QA - Garanta a Qualidade do Software!</h1>
          <p
            style={{
              fontWeight: "normal",
            }}
          >
            Teste, Automatize, Garanta Qualidade! Fundamentos, Ferramentas,
            DevOps, Comunicação, Segurança. Torne-se um Especialista!
          </p>
        </div>

        <div className="subtitle">
          <span
            style={{
              fontSize: "1rem",
            }}
          >
            Precisa de ajuda? Converse com o Instituto pelo{" "}
            <a
              style={{
                color: "white",
              }}
              href=""
            >
              WhatsApp
            </a>
            .
          </span>
          <Link to="/login"  style={{
                cursor: "pointer",
                textDecoration: "none",
              }}>
            <button
              className="button-help"
              style={{
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Quero participar do curso!
            </button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div className="banners">
            <h3>Processos seletivos</h3>
            <Link to="/login">
              <img src="/banner5.svg" alt="" />
            </Link>
          </div>
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
};
