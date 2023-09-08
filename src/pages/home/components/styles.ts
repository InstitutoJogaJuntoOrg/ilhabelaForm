import styled from "styled-components";

export const Background = styled.div`
  position: relative;
`;

export const ContainerCard = styled.div`
  position: relative;
  width: 499px;
  height: 600px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 15px 39px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media (max-width: 900px) {
    width: 320px;
    height: 400px;
    flex-direction: column;
    align-items: center;
  }
  &:hover {
    box-shadow: 0px 15px 39px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const OpacityOverlay = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: center;

  .titleOpacity {
    position: absolute;
    top: 90%;
    left: 10%;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    color: white;
    @media (max-width: 900px) {
      top: 80%;
    left: 10%;
    font-size: 30px;
  }
  }
`;
