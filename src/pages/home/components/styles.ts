import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  span:hover {
    z-index: 10;
    color: blue;
  }
  .opacity {
    border-radius: 16px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(23, 23, 23, 0.91) 0%,
      #54993a 0%,
      rgba(255, 255, 255, 0) 100%
    );
    pointer-events: none;
    .titleOpacity {
      position: absolute;
      font-size: 40px;
      font-style: normal;
      font-weight: 800;
      color: white;
      top: 85%;
      left: 7%;
      font-size: 2rem;
    }
  }

  .fullWidth {
    border-radius: 16px;
    height: 535px;
    width: 100%;
    background-color: white;
    padding: 0;
    transition: box-shadow 0.3s ease-in-out; /* Adicione uma transição suave */

    &:hover {
      box-shadow: 0px 15px 39px 0px rgba(0, 0, 0, 0.35); /* Adicione uma sombra no hover */
    }
  }
`;

export const ContainerCard = styled.div`
  position: relative;
  width: 450px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 15px 39px 0px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  img {
    padding-left: 5rem;
    padding-right: 7.5rem;
    padding-top: 9.3rem;
    padding-bottom: 10.4rem;
  }
  transition: box-shadow .3s ease-in-out; /* Adicione uma transição suave */
  &:hover {
    box-shadow: 0px 15px 39px 0px rgba(0, 0, 0, 0.50); /* Adicione uma sombra no hover */
  }
`;
export const ContainerCards = styled.div`
  margin-top: -30rem;
  background-color: white;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;
