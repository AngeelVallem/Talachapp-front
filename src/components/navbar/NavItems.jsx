import React from "react";

import Button from "../Button";
import Link from "../Link";


import { colors } from "../../globals";

export default function NavItems(props) {
  if (props.column) {
    return (
      <div className="d-flex flex-column align-items-center">
        <Link className="d-none d-md-block" route="Login" text="Login" />
        <Button
          className="my-4"
          text="Create an account"
          color={colors.primary}
          link
          route="login"
        />
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center">
      <Link className="d-none d-md-block" route="Login" text="Login" />
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
