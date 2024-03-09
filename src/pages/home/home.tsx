import { useEffect, useState } from "react";
import { CardOne } from "./components/card";
import { CardTwo } from "./components/cardTwo";
import StepsHome from "./components/steps";
import video from "/Ilhabela.mp4";
import { Dialog } from "primereact/dialog";
import { FaSquareWhatsapp } from "react-icons/fa6";

import {
  About,
  BannerContainer,
  ContainerCardLayout,
  ContainerHome,
  ContainerTitle,
  HomeContainer,
  ModalHome,
} from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Modules } from "../../components/modules/modules";
import FAQs from "./components/FAQ/faq";
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
  const [display, setDisplay] = useState(true);
  const auth = localStorage.getItem("token");
  const [showText, setShowText] = useState(false);

  const setCookie = (name: string) => {
    document.cookie = name;
  };
  useEffect(() => {
    const hasVisitedHomePage = localStorage.getItem("final");

    if (hasVisitedHomePage) {
      setDisplay(false);
    } else {
      localStorage.setItem("final", "true");
      setDisplay(false);
    }
  }, []);

  function canceldelete() {
    setDisplay(false);
  }

  // Função para coletar um cookie
  // const getCookie = (name: string) => {
  //   // return Cookies.get(name);
  // };

  useEffect(() => {
    setCookie("example");
    // console.log("Cookie example:", getCookie("example"));
  }, []);
  return (
    <>
      <HomeContainer>
        <div>
          <h1>QA - Garanta a Qualidade do Software!</h1>
          <p style={{
            fontWeight: 'normal'
          }}>
          Teste, Automatize, Garanta Qualidade! Fundamentos, Ferramentas, DevOps, Comunicação, Segurança. Torne-se um Especialista!</p>
        </div>

        <div className="subtitle">
          <span>Precisa de ajuda? Converse com o Instituto pelo WhatsApp.</span>
          <button className="button-help">Falar com o time agora!</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h3>Processos seletivos</h3>
          <div className="banners">
            <img src="/banner5.svg" alt="" />
          </div>
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
};
