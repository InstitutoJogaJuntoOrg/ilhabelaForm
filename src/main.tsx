import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import {GlobalStyle} from './styles/global'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import './styles/theme/prime.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
    <App />
    <GlobalStyle />
    </PrimeReactProvider>
  </React.StrictMode>,
)
