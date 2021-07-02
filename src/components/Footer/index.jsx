import React, { Fragment } from "react";

import Logo from "./Logo";
import Icons from "./Icons";
import Button from "./Button";

import "../../styles/Footer/styles.scss";

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar fixed-bottom fContainer">
          <div className="container-fluid justify-content-start">
            <Logo />
            <Button />
            <Icons />
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Footer;
