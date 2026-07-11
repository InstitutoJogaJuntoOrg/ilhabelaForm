import styled from "styled-components";

export const FAQContainer = styled.section`
  align-items: center;
  background: #f7faf6;
  display: flex;
  flex-direction: column;
  padding: clamp(3rem, 7vw, 5rem) clamp(1rem, 4vw, 2rem)
    clamp(4rem, 8vw, 6rem);

  > span {
    color: #4f8f3a;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .title {
    color: #193621;
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.05;
    margin: 0.75rem 0 2.5rem;
    max-width: 760px;
    text-align: center;
  }
`;

export const ContainerQuestions = styled.div`
  display: grid;
  gap: 0.9rem;
  max-width: 880px;
  width: 100%;

  .questionCard {
    background: white;
    border: 1px solid rgba(84, 153, 58, 0.16);
    border-radius: 8px;
    box-shadow: 0 14px 42px rgba(22, 55, 30, 0.07);
    overflow: hidden;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .questionCard:has(.questionTrigger[aria-expanded="true"]) {
    border-color: rgba(84, 153, 58, 0.38);
    box-shadow: 0 22px 58px rgba(22, 55, 30, 0.12);
  }

  .questionTrigger {
    align-items: center;
    background: transparent;
    border: 0;
    color: #1d4028;
    cursor: pointer;
    display: flex;
    font: inherit;
    font-size: clamp(1rem, 2vw, 1.15rem);
    font-weight: 800;
    gap: 1rem;
    justify-content: space-between;
    line-height: 1.35;
    padding: clamp(1rem, 2.5vw, 1.35rem);
    text-align: left;
    width: 100%;
  }

  .questionTrigger i {
    align-items: center;
    background: #ecf7e8;
    border-radius: 999px;
    color: #4f8f3a;
    display: inline-flex;
    flex: 0 0 2rem;
    height: 2rem;
    justify-content: center;
    width: 2rem;
  }

  .answerPanel {
    border-top: 1px solid rgba(84, 153, 58, 0.16);
    color: #4d6554;
    line-height: 1.7;
    padding: 0 clamp(1rem, 2.5vw, 1.35rem) clamp(1rem, 2.5vw, 1.35rem);
  }

  .respQuestion {
    margin: 1rem 0 0;
  }

  .respQuestion a {
    color: #2f7428;
    font-weight: 800;
  }

  ul.respQuestion {
    padding-left: 1.2rem;
  }

  .list + .list {
    margin-top: 0.5rem;
  }
`;
