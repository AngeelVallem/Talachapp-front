import React, { useState } from "react";

import { useHistory } from "react-router";
import logo from "../../assets/Home/LOGO.png";
import { Link } from "react-router-dom";

import CustomInput from "./CustomInput";
// Services
// import { postPost } from "../../services";

export default function FormWorkers() {
  const [skills, setSkills] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [experiencia, setExp] = useState("");
  const [imgProf, setImgProf] = useState("");
  const [imgIne, setImgIne] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newDataWorkers = {
        skills,
        tarifa,
        experiencia,
        imgProf,
        imgIne,
      };
      //await postPost(newDataWorkers);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="containerForm2">
        <form onSubmit={handleSubmit}>
          <label className="lb3 text-center">
            Demuestra tus habilidades uniendote como talachero
          </label>
          <div className="form-group col-md-6 formDiv">
            <label>Habilidades</label>
            <CustomInput
              id="skills"
              placeholder="Ej. Electricista, Plomero, etc. "
              value={skills}
              callback={setSkills}
            />
          </div>
          <div className="form-group formDiv">
            <label>Tarifa</label>
            <CustomInput
              id="tarifa"
              placeholder="Ej. $100 c/hr"
              value={tarifa}
              callback={setTarifa}
            />
          </div>
          <div className="form-group col-md-6 formDiv">
            <label>Años de Experiencia</label>
            <CustomInput
              id="experiencia"
              placeholder="Ej. 5 años "
              value={experiencia}
              callback={setExp}
            />
          </div>
          <div className="form-group col-md-6 formDiv">
            <label>Imagen de Perfil</label>
            <CustomInput
              id="imgProf"
              placeholder="imgProf"
              value={imgProf}
              callback={setImgProf}
              type="file"
            />
          </div>
          <div className="form-group col-md-6 formDiv">
            <label>Imagen INE</label>
            <CustomInput
              id="imgIne"
              placeholder="imgIne"
              value={imgIne}
              callback={setImgIne}
              type="file"
            />
          </div>
          <button
            className="btn btn-warning btn-lg btn-block mt-4 buttonStyle"
            type="submit"
          >
            Registrarme
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
