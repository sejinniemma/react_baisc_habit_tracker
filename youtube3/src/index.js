import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";

const youtube = new Youtube("AIzaSyCZ6t-whXlyEcmCNGrOk-6f7WVRGCCaQsM");
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
