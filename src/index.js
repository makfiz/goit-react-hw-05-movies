import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/utils/theme'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
   <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </React.StrictMode>
    </ThemeProvider>
);
// basename="/goit-react-hw-05-movies"