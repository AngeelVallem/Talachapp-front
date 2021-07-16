import React, { useState, useEffect } from "react";

import Image from "../Image";
import Logo from "../../assets/Home/LOGO.png";
import BurgerMenu from "./BurguerMenu";

import { validateToken } from "../../globals/index";
import { getUser } from "../../services";

import NavItems from "./NavItems";
import LoggedNavItems from "./LoggedNavItems";
import "../../styles/Navbar/index.scss";

export default function Navbar(props) {
  const [user, setUser] = useState(null);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [token, setToken] = useState(null);

  async function getCurrentUser() {
    try {
      const user = await getUser(token);
      setUser(user);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    setToken(validateToken());

    if (token) {
      getCurrentUser();
    }
  }, [token]);

  return (
    <nav
      className="d-flex justify-content-between align-items-center fixed-top nav"
      {...props}
    >
      <div className="d-flex align-items-center">
        <BurgerMenu isOpen={burgerOpen} setIsOpen={setBurgerOpen} />
        <Image src={Logo} link />
      </div>
      {token ? (
        <LoggedNavItems setIsLogged={setToken} user={user ? user : {}} />
      ) : (
        <NavItems />
      )}
    </nav>
  );
}
