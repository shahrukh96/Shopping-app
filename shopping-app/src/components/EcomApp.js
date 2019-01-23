import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Category from "./Category";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Product from "./Product";

class EcomApp extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/product" component={Product} />
        </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}
export default EcomApp;
