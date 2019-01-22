import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import EcomApp from "./components/EcomApp";

ReactDOM.render(
  <BrowserRouter>
    <EcomApp />
  </BrowserRouter>,
  document.getElementById("root")
);
