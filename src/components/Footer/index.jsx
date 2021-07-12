import React, { Fragment } from "react";

import Logo from "./Logo";
import Icons from "./Icons";
import Button from "../Button";

import {colors} from '../../globals/index'

import "../../styles/Footer/styles.scss";

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar fContainer">
          <div className="container-fluid justify-content-start">
            <Logo />
            <Button color={colors.primary} link route='register' text='Registrate ahora'/>
            <Icons />
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Footer;
