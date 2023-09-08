import { styled } from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  > h1 {
    margin-top: 2rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    color: #72b65a;
    font-size: 46px;
  }

  .dadosSocieconomicos {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .flexEnd {
    justify-content: flex-end;
  }
  .inputCheck {
    width: 3%;
  }
  form {
    .p-button {
      width: 100%;
    }
    .p-invalid {
      border: 2px solid red;
    }
    @media only screen and (max-width: 800px) {
      width: 39rem;
    }

    @media only screen and (max-width: 600px) {
      padding: 1rem;
      width: 21rem!important;
    }
    gap: 4rem;
    border-radius: 15px;
    box-shadow: 0px 15px 57px 0px rgba(0, 0, 0, 0.25);
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 49rem;
    padding: 2rem 4rem 1rem 4rem;
    background-color: #72b65a;
    div {
      width: 100%;
      input {
        width: 100%;
      }
    }
    button {
      cursor: pointer;
      color: white;
      font-size: 1.5rem;
      margin-top: 2rem;
      background-color: #54993a;

      border: none;
      padding: 1rem;
      border-radius: 6px;
      width: 100%;
    }
    h1 {
      font-size: 1.75rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-weight: 600;
      color: white;
    }
  }
`;
export const ContainerSteps = styled.div`
  margin-top: 2rem;
`;
export const ContainerFlexInputs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ContainerButtons = styled.div`
  margin-top: 0.5rem;
  display: flex;
  width: 100%;
  gap: 5rem;
  @media only screen and (max-width: 600px) {
    gap: 1.5rem;
  }
  justify-content: space-between;
  .back {
    background-color: #95d07f;
  }
  .buttonForm {
    cursor: pointer;
    width: 153px !important;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    text-align: center;
    border-radius: 26px !important;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
  .buttonFormSubmit {
    cursor: pointer;
    width: 153px !important;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-shrink: 0;
    color: #fff;
    text-align: center;
    border-radius: 26px !important;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`;
