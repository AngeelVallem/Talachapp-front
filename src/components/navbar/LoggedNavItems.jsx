import React from "react";
import { useHistory } from "react-router-dom";
import Image from "../Image";
import Link from "../Link";
import Button from "../Button";
import Pay from "../../screens/Payment/Index"
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

  return (
    <div className="d-flex align-items-center logged">
      <Button
        text="signOut"
        onClick={signOut}
        color={colors.primary}
        className="mx-1"
      />
      <Link route="home" text="Ver talacheros" className="mx-2" />
      <Link route="tickets" text="Mis tickets" className="mx-2"/>

      <p className="p-0 m-0">
        {user.name} {user.lastName}
      </p>
      <Image
        src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
        circle
        size="60px"
      />
      <Pay user={user}/>
    </div>
  );
}
