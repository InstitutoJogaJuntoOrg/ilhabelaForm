import styled from "styled-components";

export const ModuleContainer = styled.div`
  margin: 20px;
  div {
    color: #297531;
    background-color: #d9d9d9;
    border-radius: 8px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-weight: 800;
    text-transform: uppercase;
  }
  footer {
    font-size: 1.5rem;
  }
  span {
    font-weight: 900;
  }

  .secondCard {
    margin-top: 50px;
  }
  .circle {
    border-radius: 100%;
    background-color: #0d4913;
    width: 30px;
    height: 30px;
    color: white;
    position: absolute;
    left: -1.2rem;

    display: flex;
    align-items: center;
    font-size: 16px;
    justify-content: center;
  }
  ul {
    width: 100%;
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  li {
    position: relative;
    width: 100%;
    flex: 1;
    font-size: 1.2rem;
    list-style: none;
    padding: 1rem;
    border-radius: 8px;
    font-weight: 600;
    background-color: #c0c0c0;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const FormationInfo = styled.div`
  max-width: 30rem;
  margin: 20px;
  margin-top: 4rem;
  font-size: 1rem;
  border-radius: 8px;
  padding: 2rem;
  background-color: #9fdb89;
  color: black;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  .image {
    width: 30%;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      font-size: 12px;
    }
  }
`;
