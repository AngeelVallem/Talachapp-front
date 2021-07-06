import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "../screens/Home/Index"
import Register from "../screens/Register/index"

export default function RouterApp() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
        </Switch>
    </Router>
  );
}
