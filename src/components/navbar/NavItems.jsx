import React from "react";

import Button from "../Button";
import Link from "../Link";

import { colors } from "../../globals";

export default function NavItems(props) {
  if (props.column) {
    return (
      <React.Fragment>
        <div className="d-flex flex-column align-items-center quit">
          <Link
            className="d-none d-md-block"
            route="Login"
            text="Iniciar Sesión"
          />
          <Button
            className="mx-2 btn-warning"
            text="Iniciar Sesión"
            color={colors.primary}
            link
            route="register"
          />
        </div>
        <div className="d-flex align-items-center quit">
          <Link
            className="d-none d-md-block"
            route="Login"
            text="Iniciar Sesión"
          />
          <Button
            className="mx-2 btn-warning"
            text="Registrarse"
            color={colors.primary}
            link
            route="register"
          />
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="d-flex align-items-center quit">
      <Link className="d-none d-md-block" route="Login" text="Iniciar Sesión" />
      <Button
        className="mx-2 btn-warning quit"
        text="Registrarse"
        color={colors.primary}
        link
        route="register"
      />
    </div>
  );
}
