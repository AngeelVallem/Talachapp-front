import React from "react";
import Link from "../Link";

export default function BurgerItems() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 style={{ marginBottom: "20px" }}>Talachapp</h1>
      <Link text="Iniciar Sesión" route="Login" />
      <Link text="Registrarse" route="Register" />
    </div>
  );
}
