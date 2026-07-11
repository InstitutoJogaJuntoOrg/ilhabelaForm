import styled from "styled-components";

export const ModalHome = styled.div`

background-image: url('/banner_inscricao_aberta_ibt.png');
  background-size: cover;
  background-repeat: no-repeat;
width: 870px;
height: 470px;
margin-top: -2.5rem;

a {
  color: white;
}
@media (max-width: 900px) {
  width: 270px;
height: 170px;
padding: 0rem;
background-size: contain;
    }
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  color: white;
  flex-direction: row;
  text-align: start;
  .contact {
    max-width: 300px;
    @media (max-width: 900px) {
     max-width: 80px;
    }
  }
 div>h1 {
  max-width: 480px;
  font-size: 3rem;
  @media (max-width: 900px) {
      font-size: 1rem;
    }
 }
 div>p{
  @media (max-width: 900px) {
      font-size: .7rem;
    }
 }
  .cadastro {
    display: flex;
    text-align: start;
    justify-content: center;
    flex-direction: column;
  }
  button {
    border: none;
    padding: 1.5rem 0rem;
    cursor: pointer;
    background-color: transparent;
    font-size: 2rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 600;
    text-align: start;
    gap: .5rem;
    
    @media (max-width: 900px) {
      svg {
        width: 20px;
      }
      font-size: .7rem;
    }
  }
`;
export const ContainerHome = styled.div`
  background: #f7faf6;
  color: #183321;
  overflow-x: hidden;

  .subDescp {
    font-weight: 300;
    font-size: 20px;
    a {
      color: white;
      font-weight: 700;
    }
    @media (max-width: 900px) {
      font-size: 12px;
    }
  }

  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const SectionEyebrow = styled.span`
  color: #4f8f3a;
  display: inline-flex;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const HeroMedia = styled.section`
  align-items: center;
  display: flex;
  min-height: 82vh;
  overflow: hidden;
  padding: clamp(6rem, 13vw, 10rem) clamp(1.25rem, 5vw, 5rem)
    clamp(4rem, 8vw, 7rem);
  position: relative;
  width: 100%;

  &::before {
    background: linear-gradient(
      90deg,
      rgba(10, 32, 18, 0.86) 0%,
      rgba(10, 32, 18, 0.62) 42%,
      rgba(10, 32, 18, 0.28) 100%
    );
    content: "";
    inset: 0;
    position: absolute;
    z-index: 1;
  }

  video {
    height: 100%;
    inset: 0;
    object-fit: cover;
    position: absolute;
    width: 100%;
  }
`;

export const HeroContent = styled.div`
  color: white;
  max-width: 760px;
  position: relative;
  width: min(100%, 760px);
  z-index: 2;

  ${SectionEyebrow} {
    color: #b9f29f;
  }

  h1 {
    font-size: clamp(3rem, 8vw, 7rem);
    font-weight: 900;
    letter-spacing: 0;
    line-height: 0.92;
    margin: 1rem 0 1.25rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: clamp(1.05rem, 2vw, 1.35rem);
    line-height: 1.65;
    margin: 0 0 2rem;
    max-width: 660px;
  }

  a {
    background: #72b65a;
    border-radius: 999px;
    color: white;
    display: inline-flex;
    font-size: clamp(1rem, 2vw, 1.12rem);
    font-weight: 800;
    justify-content: center;
    min-width: 230px;
    padding: 1rem 1.6rem;
    text-decoration: none;
    transition: transform 0.2s ease, background 0.2s ease;
  }

  a:hover {
    background: #5ea048;
    transform: translateY(-2px);
  }
`;
export const ContainerCardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 320px));
  gap: clamp(1rem, 3vw, 2rem);
  justify-content: center;
  width: 100%;
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem);

  > div {
    min-height: 320px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 340px);
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  gap: clamp(1rem, 2vw, 1.5rem);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 0 auto;
  max-width: 1180px;
  padding: clamp(1rem, 4vw, 2rem);
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.article`
  background: white;
  border: 1px solid rgba(84, 153, 58, 0.16);
  border-radius: 8px;
  box-shadow: 0 18px 50px rgba(35, 64, 42, 0.08);
  padding: clamp(1.25rem, 3vw, 2rem);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 22px 60px rgba(35, 64, 42, 0.12);
    transform: translateY(-4px);
  }

  h3 {
    color: #1d4028;
    font-size: clamp(1.25rem, 2vw, 1.55rem);
    margin: 0 0 0.75rem;
  }

  p {
    color: #4d6554;
    font-size: 1rem;
    line-height: 1.7;
    margin: 0;
  }
`;

export const LearningSection = styled.section`
  background: white;
  margin: clamp(2rem, 5vw, 4rem) 0;
  padding: clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem);
  text-align: center;

  h2 {
    color: #193621;
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.05;
    margin: 0.75rem auto 2.5rem;
    max-width: 850px;
  }
`;

export const LearningGrid = styled.div`
  display: grid;
  gap: clamp(1rem, 3vw, 2rem);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0 auto;
  max-width: 980px;
  text-align: left;

  > div {
    background: #f7faf6;
    border-radius: 8px;
    padding: clamp(1.25rem, 3vw, 2rem);
  }

  h3 {
    color: #244c30;
    font-size: 1.3rem;
    margin: 0 0 1rem;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const LearningItem = styled.p`
  align-items: flex-start;
  color: #405845;
  display: flex;
  font-size: 1rem;
  gap: 0.75rem;
  line-height: 1.55;
  margin: 0;
  padding: 0.75rem 0;

  &::before {
    background: #72b65a;
    border-radius: 999px;
    content: "";
    flex: 0 0 0.55rem;
    height: 0.55rem;
    margin-top: 0.5rem;
    width: 0.55rem;
  }
`;

export const VideoCourseSection = styled.section`
  align-items: center;
  display: grid;
  gap: clamp(1.5rem, 4vw, 3rem);
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  margin: 0 auto;
  max-width: 1180px;
  padding: clamp(2rem, 6vw, 4rem) clamp(1.25rem, 5vw, 2rem);
  width: 100%;

  .videoFrame {
    background: #0f1711;
    border-radius: 8px;
    box-shadow: 0 24px 70px rgba(16, 40, 22, 0.18);
    overflow: hidden;
  }

  video {
    aspect-ratio: 16 / 9;
    display: block;
    width: 100%;
  }

  .courseText h2 {
    color: #193621;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.08;
    margin: 0.75rem 0 1rem;
  }

  .courseText p {
    color: #4d6554;
    font-size: 1rem;
    line-height: 1.75;
    margin: 0 0 1rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CtaSection = styled.section`
  background: #1d4028;
  color: white;
  margin-top: clamp(2rem, 5vw, 4rem);
  padding: clamp(3.5rem, 8vw, 6rem) clamp(1.25rem, 5vw, 2rem);
  text-align: center;

  > div {
    margin: 0 auto;
    max-width: 850px;
  }

  ${SectionEyebrow} {
    color: #b9f29f;
  }

  h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.08;
    margin: 1rem 0;
  }

  p {
    color: rgba(255, 255, 255, 0.84);
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.65;
    margin: 0 auto 2rem;
    max-width: 720px;
  }

  a {
    background: white;
    border-radius: 999px;
    color: #1d4028;
    display: inline-flex;
    font-weight: 900;
    justify-content: center;
    min-width: 220px;
    padding: 1rem 1.6rem;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  a:hover {
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
    transform: translateY(-2px);
  }
`;

export const ContainerCardLayouta = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 3rem;
  justify-content: center;
  width: 100%;
  @media (max-width: 1900px) {
    margin-top: 1rem;
  }
  @media (max-width: 1700px) {
    margin-top: 1rem;
  }
  @media (max-width: 1600px) {
    margin-top: 1rem;
  }
  @media (max-width: 1300px) {
    margin-top: 1rem;
  }
  @media (max-width: 1100px) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  text-align: center;
  color: white;
  height: 20px;
  @media (max-width: 1400px) {
    margin-top: 1rem !important;
  }

  gap: 1rem;
  span {
    font-size: 2rem;
    font-weight: 500;
  }
  button {
    cursor: pointer;
    margin-top: 1rem;
    background-color: #72b65a;
    box-shadow: 10px 4px 75px 0px rgba(0, 0, 0, 0.25);
    border-radius: 53px;
    border: none;
    padding: 1rem 5rem;
    font-size: 30px;
    color: white;
    font-weight: 600;
    @media (max-width: 1000px) {
      font-size: 20px;
    }
  }
`;
export const BannerContainer = styled.div`
margin-top: 30px;
margin-bottom: 40px;
width: 100%;

  img {
    max-width: 100%;
    height: fit-content;
  }
`;

export const VideoSection = styled.div`
  margin: 2rem ;
  width: 100%;
  display: flex;
  justify-content: center;
  video {
    width: 100%;
    max-width: 50%;
    height: auto;
  }
  img {

`;


export const About = styled.div`
  margin-top: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    color: #54993a;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.5rem;
    padding: 1rem 0;
    @media (max-width: 1000px) {
      font-size: 1rem;
      padding: 1rem 0;
    }
    color: #54993a;
  }
`;
