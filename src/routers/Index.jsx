import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "../components/navbar/Index";
import LandingPage from "../screens/LandingPage/Index";
import Home from "../screens/Home/Index";
import Register from "../screens/Register/index";
import RegisterWorkers from "../screens/WorkersRegister";
import Login from "../screens/Login/index";
import Tickets from "../screens/Tickets";
import Admin from "../screens/Admin";

import Footer from "../components/Footer/";

export default function RouterApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <LandingPage />
          <Footer />
        </Route>
        <Route exact path="/home">
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/registerForWorkers">
          <RegisterWorkers />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Tickets">
          <Tickets />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}
