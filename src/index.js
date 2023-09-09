import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context from "./context/Context";
import "bootstrap/dist/css/bootstrap.min.css";
// import FetchData from "./components/FetchData";
// import { useEffect, useState } from "react";
// const cors = require("cors");
// app.use(cors());


ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context >
  </React.StrictMode>,
  document.getElementById("root")
);
// ReactDOM.render(
//   <React.StrictMode>
//     <FetchData>
//       <App />
//     </FetchData >
//   </React.StrictMode>,
//   document.getElementById("root")
// );


// export {FetchData}