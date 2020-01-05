import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
setInterval(function() {
  ReactDOM.render(
    <h1>{new Date().toLocaleTimeString()}</h1>,
    document.getElementById("root")
  );
}, 1000);
