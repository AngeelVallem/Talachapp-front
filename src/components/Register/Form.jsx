import React, { useState } from "react";

import { useHistory } from "react-router";
import logo from "../../assets/Home/LOGO.png";
import { Link } from "react-router-dom";

import { register } from "../../services";

import CustomInput from "./CustomInput";
// Services
// import { postPost } from "../../services";

export default function AddUser() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newUser = {
        name,
        lastName,
        email,
        password,
        premium: false,
        roles: ["user"],
      };
      register(newUser, history);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {/* <div className="containerForm2"> */}
      <div className="containerForm">
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center">
            <img className="fLogo3" src={logo} alt="logo-icon" />
            <label className="lb3">Registro</label>
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="Nombre"
              placeholder="Ej. Mario"
              value={name}
              callback={setName}
            />
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="Apellido"
              placeholder="Andrade"
              value={lastName}
              callback={setLastName}
            />
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
            className="btn btn-warning btn-lg btn-block mt-4 buttonStyle"
            type="submit"
          >
            Registrarme
          </button>
          <Link className="labLogo3" to="/login">
            <label className="lblMargin">
              ¿Tienes ya una cuenta? Iniciar Sesión
            </label>
          </Link>
        </form>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}
