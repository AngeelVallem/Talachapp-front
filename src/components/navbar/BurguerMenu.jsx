import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import  NavItems from "./NavItems"
import BurgerItems from "./BurgerItems";
import '../../styles/Navbar/burger-menu.scss'

export default function BurgerMenu({ isOpen, setIsOpen }, props) {

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return <AiOutlineMenu className="d-lg-none mx-2" onClick={toggleOpen} />;
  }
  return (
    <div className="menu-container">
        <AiOutlineClose className="d-lg-none mx-2" onClick={toggleOpen} />
        <div className="menu">
          <NavItems column/>
          <BurgerItems/>
        </div>
    </div>
  );
}
