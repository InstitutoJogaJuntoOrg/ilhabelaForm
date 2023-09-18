import { useEffect, useState } from "react";
import { CardOne } from "./components/card";
import { CardTwo } from "./components/cardTwo";
import StepsHome from "./components/steps";
import video from '/Ilhabela.mp4'

import {
  About,
  ContainerCardLayout,
  ContainerHome,
  ContainerTitle,
} from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../../components/footer";
// import { Cookies } from "js-cookie"; // Importe a biblioteca

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
  const auth = localStorage.getItem("token");
  const [showText, setShowText] = useState(false);

  const setCookie = (name: string) => {
    document.cookie = name;
  };

  // Função para coletar um cookie
  // const getCookie = (name: string) => {
  //   // return Cookies.get(name);
  // };

  useEffect(() => {
    setCookie("example");
    // console.log("Cookie example:", getCookie("example"));
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
      <ContainerHome>
        <ImageContainer>
          <VideoBackground>
            <Video src={video} autoPlay muted loop />
          </VideoBackground>
          <Overlay
            onMouseOver={() => setShowText(true)}
            onMouseOut={() => setShowText(false)}
          >
            {showText && (
              <div>
                Texto que será exibido quando o mouse passar sobre a image
              </div>
            )}
          </Overlay>
        </ImageContainer>

<br />
<br />
<br />
        <section>
          <ContainerTitle className="InitialMessage">
          <h1 style={{ textShadow: '14px 14px 18px rgba(0, 0, 0, 10.5)' }}>ILHABELA TECH</h1>
            <span className="subDescp" style={{ textShadow: '14px 14px 18px rgba(0, 0, 0, 10.5)' }}>Você está a um clique do futuro</span>
            <Link style={{ textShadow: '14px 14px 18px rgba(0, 0, 0, 10.5)' }} to={auth ? "/inscricao" : "/login"}>
              <button >Inscreva-se</button>
            </Link>
          </ContainerTitle>
        </section>
        <ContainerCardLayout>
          <CardOne
            description="
            Ilhabela Tech é um programa da Prefeitura de Ilhabela em parceria com a ONG Instituto Joga Junto que visa capacitar e incluir, prioritariamente, jovens de baixa renda, entre 17 e 24 anos, residentes na Ilhabela, beneficiários do CadÚnico, provenientes de escola pública, no universo da tecnologia."
            className="secondImg"
            titleCard="O que é"
            image="https://cdn.discordapp.com/attachments/566850308702208001/1146214276537786438/Group.png"
            key={2}
            alt="img"
          />
          <CardTwo
            description=""
            titleCard="O programa"
            image="https://cdn.discordapp.com/attachments/566850308702208001/1146220725309546546/Rectangle_28.png"
            key={1}
            alt="img"
          />
        </ContainerCardLayout>
        <About>
          <h1>Como participar</h1>
          <StepsHome />
        </About>
        <Footer />
      </ContainerHome>
    </div>
  );
};
