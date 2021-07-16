import React from "react";
import { useHistory } from "react-router-dom";
import Image from "../Image";
import Link from "../Link";
import Button from "../Button";
import Pay from "../../screens/Payment/Index";
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
        <h1 style={{ marginBottom: "20px" }}>Talachapp</h1>
        <Link route="home" text="Ver Talacheros" className="mx-2 howw" />
        <Link route="tickets" text="Mis Tickets" className="marginr howw" />
        <Link
          route="registerForWorkers"
          text="Unete como Talachero"
          className="q howw"
        />
        <Button
          text="Cerrar Sesión"
          onClick={signOut}
          color={colors.primary}
          className="mx-1 btn btn-warning d-none d-lg-block "
        />
      </div>
    );
  }
  return (
    <div className="d-flex align-items-center logged quit ">
      <Link route="home" text="Ver talacheros" className="mx-2 quit " />
      <Link route="tickets" text="Mis tickets" className="mx-2 quit " />
      <Link
        route="registerForWorkers"
        text="Unete como Talachero"
        className="mx-2 quit "
      />
      <p className="abcd quit">
        {user.name} {user.lastName}
      </p>
      <Image
        className="quit"
        src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
        circle
        size="60px"
      />
      <Button
        text="Cerrar Sesión"
        onClick={signOut}
        color={colors.primary}
        className="mx-1 btn btn-warning "
      />
      <Pay user={user} />
    </div>
  );
}
