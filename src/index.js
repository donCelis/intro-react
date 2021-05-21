import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

//styles
import "./styles/main.css";

//Components
import App from "./app";
import Contador from "./components/contador";

//React por defecto solo puede renderizar un solo componente
ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
      {/* <Contador /> */}
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
