import React from "react";

import Button from "../Button";
import Link from "../Link";


import { colors } from "../../globals";

export default function NavItems(props) {
  if (props.column) {
    return (
      <div className="d-flex flex-column align-items-center">
      <Link className="d-none d-md-block" route="Login" text="login" />
      <Button
        className="mx-2"
        text="Create an account"
        color={colors.primary}
        link
        route="register"
      />
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center">
      <Link className="d-none d-md-block" route="Login" text="login" />
      <Button
        className="mx-2"
        text="Create an account"
        color={colors.primary}
        link
        route="register"
      />
    </div>
  );
}
