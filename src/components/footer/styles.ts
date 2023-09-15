import { styled } from "styled-components";


export const Container = styled.footer`
    background-color: #54993a;
    color: white;
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    div {
        display: flex;

        grid-template-columns: no-repeat(1fr, 2);
        gap: 1rem;
        align-items: center;
        text-align: left;
        @media (max-width: 800px) {
            display: flex;
            flex-direction: column;
        }
        p {
            font-size: 1rem;
            @media (max-width: 800px) {
                font-size: .7rem;
        }
        }
        img {
            width: 100%;
        }
        a {
            text-decoration: none;
            color: white;
        }
    }
    padding: 2rem;

`
