import React from "react";
import {ToastContainer} from "react-toastify"

import Router from "./routers/Index"

class App extends React.Component {
  render() {
    return (
      <>
      <Router/>
      <ToastContainer/>
      </>
    )
  }
}

export default App;
