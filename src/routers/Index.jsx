import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import NavBar from "../components/navbar/Index"
import LandingPage from "../screens/LandingPage/Index";
import Register from "../screens/Register/index";


import Footer from '../components/Footer/'

export default function RouterApp() {
  return (
    <Router>
      <Switch>
	
        <Route exact path="/">
	    <NavBar/>
          <LandingPage />
          <Footer/>
        </Route>
        <Route path="/register">
	<Register/>
        </Route>
      </Switch>
    </Router>
  );
}

