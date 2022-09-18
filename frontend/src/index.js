import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// temas
import { ThemeProvider } from "@mui/material/styles";
import { temas } from "./temas";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={temas}>
    <App />
  </ThemeProvider>
);