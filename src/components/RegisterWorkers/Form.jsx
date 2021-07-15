import React, { useState } from "react";

import { useHistory } from "react-router";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

import CustomInput from "./CustomInput";
// Services
// import { postPost } from "../../services";

export default function FormWorkers() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [skills, setSkills] = useState([]);
  const [tarifa, setTarifa] = useState("");
  const [experiencia, setExp] = useState("");
  const [imgProf, setImgProf] = useState("");
  const [imgIne, setImgIne] = useState("");

  const checkHandler = (event) => {
    let skill = event.target.name;
    setSkills([...skills, skill]);
  };
  const toggle = () => setDropdownOpen((prevState) => !prevState);

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
            Demuestra tus habilidades uniéndote como talachero
          </label>
          <div className="form-group col-md-6 formDiv">
            <label>Habilidades</label>
            {/* <CustomInput
              id="skills"
              placeholder="Ej. Electricista, Plomero, etc. "
              value={skills}
              callback={setSkills}
            /> */}
            <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret color="warning">
                Habilidades
              </DropdownToggle>
              <DropdownMenu>
                <div className="A">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="check1"
                      name="skill1"
                      onClick={checkHandler}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Albañilería
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="check2"
                      name="skill2"
                      onClick={checkHandler}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Mecánico
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="check3"
                      name="skill3"
                      onClick={checkHandler}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Electricista
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="check4"
                      name="skill4"
                      onClick={checkHandler}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      Carpintería
                    </label>
                  </div>
                </div>
              </DropdownMenu>
            </Dropdown>
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
            className="btn btn-warning btn-lg btn-block mt-4 buttonStyle3"
            type="submit"
          >
            Registrarme
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
