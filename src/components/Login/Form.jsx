import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router";
import logo from "../../assets/Home/LOGO.png";
import { Link } from "react-router-dom";

import { login } from "../../services";

import CustomInput from "../Register/CustomInput";

// Services
// import { postPost } from "../../services";

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
      login(user,history); 
      
      clenInputs();
    } catch (error) {
      return false
    }
  };
  return (
    <React.Fragment>
      {/* <div className="containerForm2"> */}
      <div className="containerForm">
        <form onSubmit={handleSubmit}>
          <img className="fLogo3" src={logo} alt="logo-icon" />
          <label className="lb3">Iniciar sesion</label>
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
            onClick={handleSubmit}
            type="submit"
          >
            Iniciar sesion
          </button>
          <Link className="labLogo3" to="/login">
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
