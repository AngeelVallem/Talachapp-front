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
  const [lastName, setLastName ] = useState("");
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
        premium : false,
        roles : ['user']
      };
      register(newUser);  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {/* <div className="containerForm2"> */}
      <div className="containerForm">
        <form onSubmit={handleSubmit}>
          <img className="fLogo3" src={logo} alt="logo-icon" />
          <label className="lb3">Registro</label>
          <div className="form-group col-md-6 formDiv">
            {/* <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title" */}
            <CustomInput
              id="Nombre"
              placeholder="Nombre"
              value={name}
              // onChange={(event) => setTitle(event.target.value)}
              callback={setName}
            />
          </div>
          <div className="form-group col-md-6 formDiv">
            {/* <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title" */}
            <CustomInput
              id="Apellido"
              placeholder="Apellido"
              value={lastName}
              // onChange={(event) => setTitle(event.target.value)}
              callback={setLastName}
            />
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="Correo"
              placeholder="Correo"
              value={email}
              callback={setEmail}
            />
          </div>
          <div className="form-group formDiv">
            <CustomInput
              id="Contraseña"
              type="Contraseña"
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
          <Link className="labLogo3" to="/">
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
