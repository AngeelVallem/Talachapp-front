import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/navbar/Index";
import VideoSection from "./screens/Home/VideoSection";
import Register from "./screens/Register";

import Test from "./screens/Test";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app h-100">
          <Switch>
            <Route exact path="/">
              <NavBar />
            </Route>
            <Route exact path="/VideoSection">
              <VideoSection />
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
