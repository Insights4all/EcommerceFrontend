import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import React from "react";
import "./App.css";
import SingleProduct from "./Screens/SingleProduct/SingleProduct";
import Categories from "./Screens/Categories/Categories";
import Cart from "./Screens/Cart/Cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singleproduct" exact component={SingleProduct} />
        <Route path="/Categories" exact component={Categories} />
        <Route path="/Cart" exact component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
