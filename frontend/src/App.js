import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import React from "react";
import "./App.css";
import SingleProduct from "./Screens/SingleProduct/SingleProduct";
import Categories from "./Screens/Categories/Categories";
import Cart from "./Screens/Cart/Cart";
import UserProfile from "./Screens/UserProfile/UserProfile";
import Login from "./Screens/Login/Login";
import Signup from "./Screens/Signup/Signup";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singleproduct" exact component={SingleProduct} />
        <Route path="/Categories" exact component={Categories} />
        <Route path="/Cart" exact component={Cart} />
        <Route path="/profile" exact component={UserProfile} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
