import { useEffect, useState } from "react";
import axios from "axios";
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
  ContainerCardLayouta,
  ContainerHome,
  ContainerTitle,
  VideoSection,
  ModalHome,
} from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Modules } from "../../components/modules/modules";
import FAQs from "./components/FAQ/faq";
import { StyledNavLink } from "../../components/header/styles";
import { CardTree } from "./components/cardtre";
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
  const emailFromLocalStorage = localStorage.getItem("token");
  const [faqs, setFaqs] = useState<any[]>([]);
  const [hours, setHours] = useState<number>(0);
  const [editalLink, setEditalLink] = useState<string>("#");
  const [updateVideo, setUpdateVideo] = useState<string>("");
  const [approvedPdfLink, setApprovedPdfLink] = useState<string>("#");
  const setCookie = (name: string) => {
    document.cookie = name;
  };

  useEffect(() => {
    axios
      .get(
        "https://api.jogajuntoinstituto.org/hotsite/selective/?process_id=10"
      )
      .then((response) => {
        const result = response.data.results[0];
        setFaqs(result.faqs || []);
        setHours(result.course?.hours || 0);
        setEditalLink(result.edital);
        setUpdateVideo(result.course?.update_video || "");
        setApprovedPdfLink(result.students_approved_pdf || "#");
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const hasVisitedHomePage = localStorage.getItem("final");

    if (hasVisitedHomePage) {
      setDisplay(true);
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
      >
         {/*** {display && (
          <Dialog
            className="accontDelete"
            visible={display}
            onHide={canceldelete}
            header=""
            footer={
              <a
                href="https://aluno.jogajuntoinstituto.org/"
              >
                <ModalHome className="modalHomepage"></ModalHome>
              </a>
            }
          ></Dialog>
        )} ***/}
        
      </div> 
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
        <section style={{
          marginTop: '2rem'
        }}>
          <ContainerTitle className="InitialMessage">
            <h1 style={{ textShadow: "14px 14px 18px rgba(0, 0, 0, 10.5)" }}>
              ILHABELA TECH
            </h1>

            <a
              style={{ textShadow: "14px 14px 18px rgba(0, 0, 0, 10.5)" }}
              target="_blank"
              href={approvedPdfLink}
            >
              <button>Confira o resultado</button>
            </a>

              <span
              className="subDescp"
              style={{
                textShadow: "14px 14px 18px rgba(0, 0, 0, 10.5)",
                background: "",
                padding: "2rem",
                borderRadius: "16px",
              }}
            >
              Inscrições encerradas, confira {" "}
              <a
                href={approvedPdfLink}
                target={"_blank"}
              >
                aqui
              </a>{" "}
              os resultados.
            </span> 
          </ContainerTitle>
        </section>
        <ContainerCardLayout>
          {/* <CardTree
            description={`
            É um programa da Prefeitura de Ilhabela em parceria com o Instituto Joga Junto que visa capacitar e incluir novos profissionais no mercado tecnológico por meio do conhecimento técnico`}
            className="secondImg"
            titleCard="O que é o Ilhabela tech:"
            image="https://estaticos-ijj.s3.sa-east-1.amazonaws.com/card_ilhabela_bannerlogo.png"
            key={2}
            alt="img"
          /> */}
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
            titleCard="O que é o curso de QA?"
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


        <BannerContainer>
          <img
            src="banner_inscricao_encerrada_line.png"
            style={{
              display: "block",
            }}
            alt="icon"
          />
        </BannerContainer>

        {updateVideo && (
          <VideoSection>
            <video src={updateVideo} controls />
          </VideoSection>
        )}

        <div
          style={{
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            justifyContent: "center",

            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Modules hours={hours} />
        </div>
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
