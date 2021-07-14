import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Home/LOGO.png";

const Logo = () => {
  return (
    <Fragment>
      <Link className="pe-3 labl" to='/'>
        <img className="fLogo" src={logo} alt="logo-icon" />
        <label>Talachapp</label>
      </Link>
    </Fragment>
  );
};

export default Logo;
