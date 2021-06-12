import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import React from "react";
import "./App.css";
import SingleProduct from "./Screens/SingleProduct/SingleProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singleproduct" exact component={SingleProduct} />
      </Switch>
    </Router>
  );
}

export default App;
