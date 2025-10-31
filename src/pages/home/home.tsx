import { useEffect, useState } from "react";
import axios from "axios";
import { CardOne } from "./components/card";
import { CardTwo } from "./components/cardTwo";
import StepsHome from "./components/steps";
import styled from "styled-components";

import {
  About,
  ContainerCardLayout,
  ContainerHome,
  ContainerTitle,
  VideoSection,
} from "./styles";
import { Footer } from "../../components/footer";
import FAQs from "./components/FAQ/faq";
import teste from "../../../public/video1.mp4";
import { CardTree } from "./components/cardtre";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(253, 0, 0, 0.8);
  display: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  z-index: 100;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const VideoBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
`;

export const HomePage = () => {
  const [showText, setShowText] = useState(false);
  const [faqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.jogajuntoinstituto.org/hotsite/selective/?process_id=36"
      )
      .then((response) => {
        const result = response.data.results[0];
        setFaqs(result.faqs || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
        }}
      ></div>
      <ContainerHome>
        <ImageContainer>
          <VideoBackground>
            <Video
              src="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/JogaJunto_Ilhabela.mp4"
              autoPlay
              muted
              loop
            />
          </VideoBackground>
          <Overlay
            onMouseOver={() => setShowText(true)}
            onMouseOut={() => setShowText(false)}
          >
            {showText && <div>.</div>}
          </Overlay>
        </ImageContainer>

        <br />
        <br />
        <section
          style={{
            marginTop: "2rem",
          }}
        >
          <ContainerTitle className="InitialMessage">
            <h1 style={{ textShadow: "14px 14px 18px rgba(0, 0, 0, 10.5)" }}>
              ILHABELA TECH
            </h1>
            <div
              style={{
                backgroundColor: "#72B65A",
                padding: "2rem",
                borderRadius: "8px",
                marginBottom: "0rem",
              }}
            >
              <h2 style={{ textShadow: "14px 14px 18px rgba(0, 0, 0, 10.5)" }}>
                Transforme sua carreira com UX Design
              </h2>
              <p>
                Domine as habilidades essenciais para criar experiências
                digitais que encantam usuários e geram resultados reais para
                negócios.
              </p>
            </div>
            <a
              style={{ textShadow: "14px 14px 18px rgba(0, 0, 0, 10.5)" }}
              target="_blank"
              href={"https://aluno.jogajuntoinstituto.org/"}
            >
              <button>Inscrever-se Gratuitamente</button>
            </a>
          </ContainerTitle>
        </section>
        <ContainerCardLayout>
          <CardTree
            description={`
           `}
            className=""
            titleCard="O que é Ilhabela Tech?"
            image="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/card_ilhabela_bannerlogo.png"
            key={3}
            alt="img"
          />
          <CardTwo
            description=""
            titleCard="O que é o curso de UX?"
            image="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/card_ilhabela_IETEC.png"
            key={1}
            alt="img"
          />
          <CardOne
            description=""
            titleCard="Informações sobre o curso"
            image="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/card_ilhabela_IETEC.png"
            key={1}
            alt="img"
          />
        </ContainerCardLayout>

       <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "clamp(1rem, 3vw, 1.5rem)",
    padding: "clamp(1rem, 4vw, 1.25rem)",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  }}
>
          {/* Card 1 - Apoio Total */}
          <div
            style={{
              backgroundColor: "#72B65A",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                marginBottom: "12px",
                fontWeight: "bold",
              }}
            >
              Apoio Total
            </h3>
            <p
              style={{
                color: "#fff",
                fontSize: "1rem",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Conte com facilitadores e um laboratório totalmente equipado
              durante sua jornada de aprendizado. Receba suporte de uma equipe
              de profissionais para estudar.
            </p>
          </div>

          {/* Card 2 - Projeto Prático */}
          <div
            style={{
              backgroundColor: "#72B65A",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                marginBottom: "12px",
                fontWeight: "bold",
              }}
            >
              Projeto Prático
            </h3>
            <p
              style={{
                color: "#fff",
                fontSize: "1rem",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Desenvolva um projeto em grupo, com atividades semanais, para
              iniciar seu portfólio profissional. Trabalhe em equipe e em
              projetos reais que você poderá apresentar para recrutadores.
            </p>
          </div>

          {/* Card 3 - Mentoria Especializada */}
          <div
            style={{
              backgroundColor: "#72B65A",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                marginBottom: "12px",
                fontWeight: "bold",
              }}
            >
              Mentoria Especializada
            </h3>
            <p
              style={{
                color: "#fff",
                fontSize: "1rem",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Participe de encontros de mentoria técnica, para aprimorar as
              práticas e se preparar para a apresentação do projeto. Receba
              feedback de profissionais experientes do mercado de UX.
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "60px 20px",
            margin: "40px 0",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                color: "#333",
                marginBottom: "40px",
                fontWeight: "bold",
              }}
            >
              Depois do UXperts você será capaz de:
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                textAlign: "left",
                marginTop: "30px",
              }}
            >
              {[
                "Realizar pesquisas quantitativas e qualitativas com usuários",
                "Mapear a concorrência por meio de estratégias de benchmarking",
                "Identificar dores e necessidades reais dos usuários",
                "Definir uma proposta de valor clara",
                "Desenvolver cenários e casos de uso",
                "Criar personas baseadas em dados reais",
                "Criar wireframes de baixa e alta fidelidade",
                "Desenvolver protótipos interativos",
                "Conduzir testes de usabilidade",
                "Apresentar projetos de UX de forma profissional",
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "15px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span
                    style={{
                      color: "#72B65A",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1rem",
                      color: "#555",
                      lineHeight: "1.5",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* {teste && (
          <VideoSection>
            <video src={teste} controls />
          </VideoSection>
        )} */}
        {/* Section 2 - Encerramento/CTA */}
        <span
          style={{
            backgroundColor: "#72B65A",
            padding: "80px 20px",
            margin: "40px 0",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                padding: "8px 20px",
                borderRadius: "20px",
                marginBottom: "20px",
                fontSize: "0.9rem",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              ⚠️ VAGAS LIMITADAS
            </div>

            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "20px",
                lineHeight: "1.2",
              }}
            >
              Não perca esta oportunidade única
            </h2>

            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "40px",
                lineHeight: "1.6",
                opacity: "0.95",
              }}
            >
              Transforme sua carreira com conhecimento de qualidade, totalmente
              gratuito. As vagas são limitadas e as inscrições encerram em
              breve.
            </p>

            <a
              href="https://aluno.jogajuntoinstituto.org"
              target="_blank"
              style={{
                backgroundColor: "#fff",
                color: "#72B65A",
                fontSize: "1.3rem",
                fontWeight: "bold",
                padding: "18px 50px",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                transition: "all 0.3s ease",
                marginBottom: "40px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(0, 0, 0, 0.15)";
              }}
            >
              Seja UXPERT
            </a>

          </div>
        </span>



        <About>
          <h1>Como participar</h1>
          <StepsHome />
        </About>
        <FAQs faqs={faqs} />
        <Footer />
      </ContainerHome>
    </div>
  );
};
