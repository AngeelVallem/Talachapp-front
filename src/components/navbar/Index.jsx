import React, { useState } from "react";

import Image from "../Image";
import Logo from "../../assets/Home/LOGO.png";
import BurgerMenu from "./BurguerMenu";

import NavItems from "./NavItems";

import "../../styles/Navbar/index.scss";


export default function Navbar(props) {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <nav
      className="d-flex justify-content-between align-items-center fixed-top nav"
      {...props}
    >
      <div className="d-flex align-items-center">
        <BurgerMenu isOpen={burgerOpen} setIsOpen={setBurgerOpen} />
        <Image src={Logo} link route="home" />
      </div>
      <NavItems />
      
    </nav>
  );
}
