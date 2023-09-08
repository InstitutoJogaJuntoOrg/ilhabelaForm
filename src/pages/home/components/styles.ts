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

export const StepsContainer = styled.div`
  margin-top: 4rem;
  padding: 1rem;
  width: 100%;

  .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
    width: 5rem !important;
    height: 5rem !important;
    font-size: 3rem;
    color: #54993a;
    font-weight: 900;
  }
  .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
    background-color: #95d07f;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-number {
    background: #95d07f;
  }
  .p-steps .p-steps-item:before {
    top: 70%;
    border-top: 4px solid #95d07f;
  }

  @media (max-width: 775px) {
    .p-steps.p-readonly .p-steps-item {
      display: none;
    }
    .pass {
      display: block !important;;
      color: white;
    font-size: 1.5rem;
 text-align: center;

    margin-bottom: 1rem;
    font-weight: 500;
    }
  }
  .pass {
   display: none;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: center;
  justify-items: center;
  @media (max-width: 775px) {
    grid-template-columns: repeat(1, 3fr);
  }
  div {
    padding: 2rem;
    margin-top: 22px;
    background-color: #54993a;
    max-width: 20rem;
    text-align: left;
    border-radius: 22px;
    p {
      color: white;
      font-size: 1rem;
    }
    @media (max-width: 775px) {
      max-width: 20rem;
    }
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
