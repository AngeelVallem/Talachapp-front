import React, { useState } from "react";

import Image from "../Image";
import Logo from "../../assets/Home/LOGO.png";

import "../../styles/Navbar/index.scss";

export default function NavbarReg(props) {
  return (
    <nav
      className="d-flex justify-content-between align-items-center fixed-top nav"
      {...props}
    >
      <div className="d-flex align-items-center">
        <Image src={Logo} link />
      </div>
      <div className="right-wrap d-flex align-items-center col-6 justify-content-end pr-0">
        <label>UserName</label>
        <img
          className=" btn rounded-circle margin-right-icon"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--jl25ieQ4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/570253/d305dc25-89e7-4959-bba9-f85ff315a1c7.jpeg"
          width="60"
          height="50"
          alt=""
        />
      </div>
    </nav>
  );
}
