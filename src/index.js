import React from "react";
import ReactDOM from "react-dom";
// import "index.scss";
import png from "./reactlogo.png";
let HelloWorld = () => {
  return (
    <React.Fragment>
      <img src={png} />
      <h1>Hello there World!</h1>
    </React.Fragment>
  );
};
ReactDOM.render(<HelloWorld />, document.getElementById("root"));
