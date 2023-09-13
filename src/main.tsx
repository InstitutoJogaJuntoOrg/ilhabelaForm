import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";

import { GlobalStyle } from "./styles/global";
import { PrimeReactProvider } from "primereact/api";
import "./styles/theme/prime.css";
import { FuelDataProvider } from "./context/image";
import { TimerProvider } from "./context/timer";

ReactDOM.render(
  <React.StrictMode>
   <PrimeReactProvider>
      <FuelDataProvider>
        <TimerProvider>
        <App />
        <GlobalStyle />
        </TimerProvider>
      </FuelDataProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);