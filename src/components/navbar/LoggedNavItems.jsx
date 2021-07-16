import React from "react";
import { useHistory } from "react-router-dom";
import Image from "../Image";
import Link from "../Link";
import Button from "../Button";

import { colors } from "../../globals/index";

export default function LoggedNavItems(props) {
  const { user } = props;
  const history = useHistory();
  const signOut = () => {
    const { setIsLogged } = props;

    window.localStorage.removeItem("token");
    setIsLogged(false);
    history.push("/");
  };

  if (props.column) {
    return (
      <div className="d-flex align-items-center logged flex-column">
        <Link route="home" text="Ver talacheros" className="mx-2" />
        <Link route="tickets" text="Mis tickets" className="mx-2" />
        <Button
          text="Cerrar Sesión"
          onClick={signOut}
          color={colors.primary}
          className="mx-1 btn btn-warning"
        />
        <p className="p-0 m-0">
          {user.name} {user.lastName}
        </p>
        <Image
          src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
          circle
          size="60px"
        />
      </div>
    );
  }
  return (
    <div className="d-flex align-items-center logged">
      <Link route="home" text="Ver talacheros" className="mx-2" />
      <Link route="tickets" text="Mis tickets" className="mx-2" />
      <Button
        text="Cerrar Sesión"
        onClick={signOut}
        color={colors.primary}
        className="mx-1 btn btn-warning"
      />
      <p className="p-0 m-0">
        {user.name} {user.lastName}
      </p>
      <Image
        src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
        circle
        size="60px"
      />
    </div>
  );
}
