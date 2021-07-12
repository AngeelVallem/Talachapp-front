import React from "react";



import LeftImg from "../Register/LeftImg";
import Form from "./Form";

import "../../styles/Register/styles.scss";

class RegisterCom extends React.Component {
  render() {
    return (
      <div className="containerScroll d-flex">
        <LeftImg />
        <Form />
      </div>
    );
  }
}

export default RegisterCom;
