import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavItems from "./NavItems";
import BurgerItems from "./BurgerItems";
import "../../styles/Navbar/burger-menu.scss";
import LoggedNavItems from "./LoggedNavItems";

export default function BurgerMenu({ isOpen, setIsOpen, token, user }, props) {
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return <AiOutlineMenu className="d-lg-none mx-2" onClick={toggleOpen} />;
  }
  return (
    <div className="menu-container margin">
      <AiOutlineClose className="d-lg-none mx-2" onClick={toggleOpen} />
      <div className="menu">
        {/* <NavItems column/> */}
        {!token ? <BurgerItems /> : <LoggedNavItems user={user} column />}
      </div>
    </div>
  );
}
