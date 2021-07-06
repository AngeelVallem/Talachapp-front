import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./screens/Register";
import Home from "./screens/Home/Index"

import Test from "./screens/Test";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app h-100">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/VideoSection">
            
            </Route>
            <Route exact path="/Test">
              <Test />
            </Route>
            <Route exact path="/Register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
