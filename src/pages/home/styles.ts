import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .InitialMessage {
    max-width: 95%;
    width: 100%;
    height: 100%;

  }
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
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
