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
    font-size: 66px;
  }
  .dadosSocieconomicos {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  form {
    .invalid-input {
  border: 2px solid red;
}
    gap: 4rem;
    border-radius: 15px;
    box-shadow: 0px 15px 57px 0px rgba(0, 0, 0, 0.25);
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 60rem;
    padding: 4rem 4rem;
    background-color: #72b65a;
    div {
      width: 100%;
      input {
        width: 100%;
      }
    }
    button {
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