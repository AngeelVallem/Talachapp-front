import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/Home/facebook-icon.svg";
// import github from "../../assets/Home/github-icon.svg";
import instagram from "../../assets/Home/instagram-icon.svg";

const Icons = () => {
  return (
    <Fragment>
      <div className=" d-flex positionIcons">
        <Link
          className="pe-3"
          href="https://www.facebook.com/Talachapp-102470575439167"
        >
          <img
            className="fIcons"
            src={facebook}
            width="30"
            height="30"
            alt="facebook-icon"
          />
        </Link>
        <Link className="px-3" href="https://www.instagram.com/talachapp/">
          <img
            className="fIcons"
            src={instagram}
            width="30"
            height="30"
            alt="instagram-icon"
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default Icons;
