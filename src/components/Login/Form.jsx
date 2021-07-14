import React, { useState } from "react";
import { useHistory } from "react-router";
import logo from "../../assets/Home/LOGO.png";
import { Link } from "react-router-dom";

import { login } from "../../services";

import CustomInput from "../Register/CustomInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const clenInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = {
        email,
        password,
      };
      login(user, history);

      clenInputs();
    } catch (error) {
      return false;
    }
  };
  return (
    <React.Fragment>
      {/* <div className="containerForm2"> */}
      <div className="containerForm3">
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center">
            <img className="fLogo4" src={logo} alt="logo-icon" />
            <label className="lb4">Iniciar sesión</label>
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="Correo"
              placeholder="Ej. Talachero24@gmail.com"
              value={email}
              callback={setEmail}
            />
          </div>
          <div className="form-group formDiv">
            <CustomInput
              id="Contraseña"
              type="password"
              placeholder="Contraseña"
              value={password}
              callback={setPassword}
            />
          </div>
          <button
            className="btn btn-warning btn-lg btn-block buttonStyle2"
            onClick={handleSubmit}
            type="submit"
          >
            Iniciar sesion
          </button>
          <Link className="labLogo3" to="/Register">
            <label className="lblMargin">
              ¿No tienes una cuenta? Registrarse
            </label>
          </Link>
        </form>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}
