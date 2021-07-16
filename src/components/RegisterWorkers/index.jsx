import React from "react";

import NavbarReg from "./importNav";
import Form from "./Form";

import "../../styles/Register/styles.scss";
import "../../styles/RegisterWorkers/styles.scss";

class RegisterWorker extends React.Component {
  render() {
    return (
        <div className="containerScroll d-flex">
          <Form />
        </div>
    );
  }
}

export default RegisterWorker;
