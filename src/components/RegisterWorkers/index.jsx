import React, { Fragment } from "react";

import NavbarReg from "./importNav";
import Form from "./Form";

import "../../styles/Register/styles.scss";
import "../../styles/RegisterWorkers/styles.scss";

class RegisterWorker extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="containerScroll d-flex">
          <NavbarReg />
          <Form />
        </div>
      </Fragment>
    );
  }
}

export default RegisterWorker;
