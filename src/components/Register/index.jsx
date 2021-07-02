import React, { Fragment } from "react";

import LeftImg from "./LeftImg";
import Form from "./Form";

import "../../styles/Register/styles.scss";

class RegisterCom extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="">
          <LeftImg />
          <Form />
        </div>
      </Fragment>
    );
  }
}

export default RegisterCom;
