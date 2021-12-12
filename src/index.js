import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* 
Resolvendo b.o de inicialização - Investigar erro 
 export NODE_OPTIONS=--openssl-legacy-provider
https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported
*/