import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Category from "./Category";
import { Switch, Route } from "react-router";

class EcomApp extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category" component={Category} />
        </Switch>
      </div>
    );
  }
}
export default EcomApp;
