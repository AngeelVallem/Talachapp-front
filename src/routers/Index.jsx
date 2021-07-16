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
import Canceled from "../screens/Payment/Canceled";
import PaymentSuccess from "../screens/Payment/Success";
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
          <Footer fixed />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/registerForWorkers">
          <NavBar />
          <RegisterWorkers />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/tickets">
          <NavBar />
          <Tickets />
          <Footer fixed />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route exact path="/payment/success">
        <NavBar />
          <PaymentSuccess />
        </Route>
        <Route exact path="/payment/canceled">
          <Canceled />
        </Route>
      </Switch>
    </Router>
  );
}
