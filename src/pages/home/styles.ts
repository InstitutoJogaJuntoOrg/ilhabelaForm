import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 20rem;

  .InitialMessage {
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
    top: -15%;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;

    h1 {
      color: white;
      font-size: 96px;
      line-height: normal;
      font-weight: 900;
      margin: 0px;
      padding: 0px;
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

  gap: 1rem;
  span {
    font-weight: 500;
  }
  button {
    cursor: pointer;
    margin-top: 1rem;
    background-color: #72B65A;
    box-shadow: 0px 4px 75px 0px rgba(0, 0, 0, 0.25);
    border-radius: 53px;
    border: none;
    padding: .75rem 2rem;
    font-size: 30px;
    color: white;
    font-weight: 600;
  }

`;
