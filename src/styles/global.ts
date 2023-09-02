import { createGlobalStyle } from "styled-components";
import "primereact/resources/primereact.min.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

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
  .hLabel {
    height: 2rem;
  }
  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 600;
    color: white;
    height: 4rem;
    padding: 1rem 0rem;
  }
  .p-inputtext:enabled:focus {
    box-shadow: none;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
    color: black;
  }
  .p-tabview .p-tabview-panels {
    background: transparent;
  }
  .p-tabview .p-tabview-nav {
    background-color: transparent;
  }
  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background-color: #54993a!important;
    color: white;
  }
  #pr_id_1_header_0:hover {
    background-color: #54993a!important;
    color: white;
  }

  .p-tabview .p-tabview-nav li .p-tabview-nav-link {
    color: #fff8;
  }
  #pr_id_1_header_1:hover {
    background-color: #54993a!important;
    color: white;
  }
  #pr_id_1_header_2:hover {
    background-color: #54993a!important;
    color: white;
  }
  .p-tabview .p-tabview-nav .p-tabview-ink-bar {
    background-color: #54993a!important;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link {
    padding: 1rem 3rem;
    background-color: transparent;
  }
  .p-steps .p-steps-item .p-menuitem-link {
    background: transparent;
  }
  .inputWidth{
    width: 10%!important;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-number{
    color: black;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-title {
    color: white;
  }
  .p-tabview-nav {
    display: flex;
    justify-content: center;
  }
  .p-tabview-title {
    width: 100%;
    font-size: 1.1rem;
  }
`;
