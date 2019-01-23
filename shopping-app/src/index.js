import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import store from './store'
import EcomApp from "./components/EcomApp";

ReactDOM.render(
  <Provider store={store}>

    <EcomApp />

  </Provider>,
  document.getElementById("root")
);
