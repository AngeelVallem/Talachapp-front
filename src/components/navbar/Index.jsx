import React, { useState, useEffect } from "react";

import Image from "../Image";
import Logo from "../../assets/Home/LOGO.png";
import BurgerMenu from "./BurguerMenu";

import {validateToken} from "../../globals/index"

import NavItems from "./NavItems";

import "../../styles/Navbar/index.scss";


export default function Navbar(props) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);


  useEffect(()=> {
    setIsLogged(validateToken())
  },[])


  return (
    <nav
      className="d-flex justify-content-between align-items-center fixed-top nav"
      {...props}
    >
      <div className="d-flex align-items-center">
        <BurgerMenu isOpen={burgerOpen} setIsOpen={setBurgerOpen} />
        <Image src={Logo} link/>
      </div>
      <NavItems isLogged={isLogged}/>
      
    </nav>
  );
}
