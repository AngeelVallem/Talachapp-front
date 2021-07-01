import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export default function BurgerMenu({ isOpen, setIsOpen }, props) {

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return <AiOutlineMenu className="d-lg-none mx-2" onClick={toggleOpen} />;
  }
  return <AiOutlineClose className="d-lg-none mx-2" onClick={toggleOpen} />;
}
