import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
function Cartoon(props) {
  return <h1>hellO {props.name}</h1>;
}
function Show() {
  return (
    <div>
      <Cartoon name="moto" show="patlo" />
      <Cartoon name="ymma" show="john" />
    </div>
  );
}
ReactDOM.render(<Show />, document.getElementById("root"));
