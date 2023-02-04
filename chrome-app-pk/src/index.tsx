import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.createElement("div");
rootElement.id = "chrome-app-pk";


const pkStyles = document.createElement("style");
pkStyles.innerHTML = `
#${rootElement.id} {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #c2c2c2;
  z-index: 999999999;
  }
`;

document.body.appendChild(rootElement);
document.body.appendChild(pkStyles);


const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
