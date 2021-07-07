import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Home/LOGO.png";
import workers from "../../assets/Login/workers.svg";

const LeftImg = () => {
  return (
    <Fragment>
      <div className="rectangle">
        <Link className="labLogo2" to="/">
          <img className="fLogo2" src={logo} alt="logo-icon" />
          <label>Talachapp</label>
        </Link>
        <img className="imgWorkers" src={workers} alt="" />
      </div>
    </Fragment>
  );
};

export default LeftImg;
