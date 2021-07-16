import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/Home/facebook-icon.svg";
// import github from "../../assets/Home/github-icon.svg";
import instagram from "../../assets/Home/instagram-icon.svg";

const Icons = () => {
  return (
    <Fragment>
      <div className=" d-flex positionIcons">
        <a
          className="pe-3"
          href="https://www.facebook.com/Talachapp-102470575439167"
        >
          <img
            className="fIcons1"
            src={facebook}
            width="30"
            height="30"
            alt="facebook-icon"
          />
        </a>

        <a className="px-3" href="https://www.instagram.com/talachapp/">
          <img
            className="fIcons2"
            src={instagram}
            width="30"
            height="30"
            alt="instagram-icon"
          />
        </a>
      </div>
    </Fragment>
  );
};

export default Icons;
