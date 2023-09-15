import styled from "styled-components";

export const ContainerHome = styled.div`
.subDescp {
  @media (max-width: 900px) {
      font-size: 12px;
    
    }
}
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  .InitialMessage {
    max-width: 95%;
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  .secondImg {
    img {
      height: auto;
      padding: 2rem;
      margin-top: 20%;
    }
  }
  section {
    position: absolute;
    top: -12%;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    @media (max-width: 900px) {
      font-size: 12px;
      top: -35%;
    }
    h1 {
      color: white;
      font-size: 96px;
      line-height: normal;
      font-weight: 900;
      margin: 0px;
      padding: 0px;
      @media (max-width: 1200px) {
        font-size: 66px;
      }
      @media (max-width: 1000px) {
        font-size: 40px;
      }
    }
  }
`;
export const ContainerCardLayout = styled.div`
  display: flex;
  margin-top: -27rem;
  gap: 3rem;
  justify-content: center;
  width: 100%;
  @media (max-width: 1900px) {
    margin-top: -15rem;
  }
  @media (max-width: 1700px) {
    margin-top: -10rem;
  }
  @media (max-width: 1600px) {
    margin-top: -2rem;
  }
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
  @media (max-width: 1100px) {
    margin-top: 5rem;
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
    box-shadow: 0px 4px 75px 0px rgba(0, 0, 0, 0.25);
    border-radius: 53px;
    border: none;
    padding: 0.75rem 2rem;
    font-size: 30px;
    color: white;
    font-weight: 600;
    @media (max-width: 1000px) {
      font-size: 20px;
    }
  }
`;
export const About = styled.div`
  margin-top: 10rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  h1 {
    font-size: 5rem;
    color: #54993A;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.5rem;
    padding: 1rem 0;
    @media (max-width: 1000px) {
      font-size: 1rem;
      padding: 1rem 0
    }
    color: #54993A;
  }
`;
