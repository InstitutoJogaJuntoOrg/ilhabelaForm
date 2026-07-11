import styled from "styled-components";

export const Background = styled.div`
  position: relative;
`;
export const ContainerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 15px 39px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media (max-width: 900px) {
    width: 320px;
    height: 300px;
    flex-direction: column;
    align-items: center;
  }

  &:hover {
    box-shadow: 0px 15px 39px 0px rgba(0, 0, 0, 0.5);
  }
`;
export const OpacityOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  
  background: linear-gradient(
    0deg,
    rgba(23, 23, 23, 0.91) 0%,
    #54993a 0%,
    rgba(255, 255, 255, 0) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s linear;

  .titletwo {
    @media (max-width: 900px) {
      font-size: 0.7rem!important;
    }
  }

  .tiitlecard {
    font-size: 1rem;
    font-weight: 400;
    @media (max-width: 900px) {
      font-size: 0.7rem;
    }
  }

  .Card {
    padding: 2rem;
    display: flex;
    gap: 1rem;
    color: #1b512d;
    line-height: 22px;
    flex-direction: column;
    max-height: 80%; /* Define um limite para o conteúdo */
    overflow-y: auto; /* Permite rolagem quando necessário */
    pointer-events: auto; /* Permite interação */

    @media (max-width: 900px) {
      font-size: 0.7rem;
      line-height: 12px;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(27, 81, 45, 0.5);
      border-radius: 10px;
    }
  }

  .mtop {
    margin-top: 2%;
    @media (max-width: 900px) {
      margin-top: 0%;
    }
  }

  .mtoptwo {
    margin-top: 5%;
    @media (max-width: 900px) {
      margin-top: 0%;
    }
  }

  .titleCard {
    font-size: 1.5rem;
    @media (max-width: 900px) {
      font-size: .8rem!important;
    }
  }

  .desc {
    margin-top: -5px !important;
  }

  .titleOpacity {
    position: absolute;
    top: 65%;
    left: 5%;
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    color: white;
    transition: 1s linear;

    @media (max-width: 900px) {
      top:66%;
      left: 5%;
      font-size: 24px;
    }
  }

  p {
    justify-content: center;
    align-items: center;
    display: flex;
    color: #1b512d;
    margin-top: 40%;
    font-weight: 600;
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;



export const StepsContainer = styled.div`
  margin: 0 auto;
  max-width: 1340px;
  padding: clamp(1rem, 3vw, 2rem) clamp(1rem, 4vw, 2rem)
    clamp(2.5rem, 5vw, 4rem);
  width: 100%;
`;

export const CardsContainer = styled.div`
  display: grid;
  gap: clamp(0.75rem, 1.5vw, 1rem);
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(4, minmax(0, 304px));
  justify-content: center;
  position: relative;

  article {
    background: rgba(255, 255, 255, 0.94);
    border: 1px solid rgba(84, 153, 58, 0.16);
    border-radius: 8px;
    box-shadow: 0 18px 48px rgba(22, 55, 30, 0.08);
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 262px;
    overflow: hidden;
    padding: 0.8rem;
    position: relative;
    text-align: left;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  article::before {
    background: #72b65a;
    content: "";
    height: 4px;
    inset: 0 0 auto;
    position: absolute;
  }

  article:hover {
    box-shadow: 0 24px 60px rgba(22, 55, 30, 0.14);
    transform: translateY(-4px);
  }

  .stepNumber {
    color: rgba(29, 64, 40, 0.18);
    display: block;
    font-size: clamp(1.65rem, 2.85vw, 2.3rem);
    font-weight: 900;
    line-height: 0.9;
    margin-bottom: 0.45rem;
  }

  .stepIcon {
    align-items: center;
    background: #ecf7e8;
    border-radius: 999px;
    color: #4f8f3a;
    display: inline-flex;
    height: 1.75rem;
    justify-content: center;
    margin-bottom: 0.6rem;
    width: 1.75rem;
  }

  .stepIcon svg {
    height: 0.7rem;
    width: 0.7rem;
  }

  h2 {
    color: #1d4028;
    font-size: clamp(0.87rem, 1.32vw, 1rem);
    line-height: 1.15;
    margin: 0 0 0.35rem;
  }

  p {
    color: #506657;
    font-size: 0.71rem;
    line-height: 1.38;
    margin: 0;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 304px));
  }

  @media (max-width: 680px) {
    grid-template-columns: minmax(0, 386px);

    article {
      min-height: 248px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    scale:1.7;
    object-fit: cover;
  }
`;
