import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";

import { GlobalStyle } from "./styles/global";
import { PrimeReactProvider } from "primereact/api";
import "./styles/theme/prime.css";
import { FuelDataProvider } from "./context/image";

ReactDOM.render(
  <React.StrictMode>
   <PrimeReactProvider>
      <FuelDataProvider>
        <App />
        <GlobalStyle />
      </FuelDataProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);