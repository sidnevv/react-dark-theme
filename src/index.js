import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from "./providers/ThemeProvider";
import Root from './components/Root';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <Root/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
