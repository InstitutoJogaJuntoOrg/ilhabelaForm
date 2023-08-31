import { createGlobalStyle } from 'styled-components';
import "primereact/resources/primereact.min.css";   
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
}
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'Inter', sans-serif;
  }
  .p-dropdown {
    width: 100%;
  }
  .p-inputtext {
    color: white;
  }
  label {
    font-weight: 600;
    color: white;
    padding: 1rem 0rem;
  }
`;
 