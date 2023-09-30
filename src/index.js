import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "./css/styles.css";
import { Password } from "./components/Password";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App>
      <Password />
    </App>
  </React.StrictMode>
);
