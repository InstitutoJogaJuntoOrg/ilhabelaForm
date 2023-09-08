import styled from "styled-components";

export const ContainerHome = styled.div`
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
  margin-top: 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white; /* Add a background color to clearly define the "About" section */
`;

export const StepsCustom = styled.div`
  display: flex;
  justify-content: space-between; /* Adjust as needed to control the spacing between steps */
  align-items: center; /* Center the steps vertically */
  /* Style for the line connecting the steps */
  & > div {
    position: relative;
    width: 24px; /* Adjust the width of the step circle as needed */
    height: 24px; /* Adjust the height of the step circle as needed */
    border: 2px solid #000; /* Adjust the border style and color as needed */
    border-radius: 50%;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 16px; /* Adjust the font size as needed */
    background-color: #fff; /* Adjust the background color of the step circle as needed */
  }

  & > div::before {
    content: "";
    position: absolute;
    top: calc(50% + 2px); /* Adjust the top position to center the line between steps */
    left: calc(100% - 12px); /* Adjust the distance between the step circle and the line as needed */
    width: 24px; /* Adjust the width of the connecting line as needed */
    height: 2px; /* Adjust the height of the connecting line as needed */
    background-color: #000; /* Adjust the line color as needed */
  }
`;