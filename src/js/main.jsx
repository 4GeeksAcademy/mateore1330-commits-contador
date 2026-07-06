import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

let seconds = 0;

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <Home seconds={seconds} />
    </React.StrictMode>,
  );
};

renderApp();

setInterval(() => {
  seconds++;
  renderApp();
}, 1000);
