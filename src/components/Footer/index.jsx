import React, { Fragment } from "react";

import Logo from "./Logo";
import Icons from "./Icons";
import Button from "../Button";

import { colors } from "../../globals/index";

import "../../styles/Footer/styles.scss";

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <footer className="navbar fContainer">
          <div className="container-fluid justify-content-start">
            <Logo />
            <Button
              className="btn-warning"
              color={colors.primary}
              link
              route="register"
              text="Regístrate ahora"
            />
            <Icons />
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
