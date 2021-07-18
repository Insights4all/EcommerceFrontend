import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import React from "react";
import "./App.css";
import SingleProduct from "./Screens/SingleProduct/SingleProduct";
import Categories from "./Screens/Categories/Categories";
import Cart from "./Screens/Cart/Cart";
import UserProfile from "./Screens/UserProfile/UserProfile";
import Login from "./Screens/Login/Login";
import Logout from "./Screens/Login/Logout";
import Signup from "./Screens/Signup/Signup";
import { BrowserRouter as Router } from "react-router-dom";
import ShopRegister from "./Screens/ShopRegister/ShopRegister";
import { connect } from "react-redux";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/singleproduct" exact component={SingleProduct} />
        <Route path="/Categories" exact component={Categories} />
        <Route path="/Cart" exact component={Cart} />
        <Route path="/profile" exact component={UserProfile} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/registershop" exact component={ShopRegister} />
      </Switch>
    </Router>
  );
}
/**
const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.math,
  };
};

const mapDispatchToProps = (state) => {
  return {
    setStatus: (isLoggedin) =>
      dispatch({
        type: "LOGIN_STATUS",
        payload: isLoggedin,
      }),
  };
};
connect(mapStateToProps, mapDispatchToProps)(App);
 */
export default App;
