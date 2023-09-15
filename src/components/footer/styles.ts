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
        gap: 10rem;
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
        div {
            display:flex ;
            flex-direction: column;
            margin: 0;
            padding: 0;
            background-color: blue;
            gap: 1rem;
            p {
                max-width: 80%;
                margin: 0;
            padding: 0;
            }
        }
    }
    padding: 2rem;

`
