import React, { useState,useEffect } from "react";

import { useHistory } from "react-router";

import { Button, ButtonGroup, Input } from "reactstrap";
import {getUser,workerRegister} from "../../services"
import {colors, validateToken} from "../../globals/index"
import "../../styles/WorkersFilters/index.scss";
import Loader from "react-loader-spinner"
import CustomInput from "./CustomInput";
// Services
// import { postPost } from "../../services";

export default function FormWorkers() {

  const [cSelected, setCSelected] = useState([]);
  const [tarifa, setTarifa] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [location, setLocation] = useState([]);
  const [token,setToken] = useState(null)
  const [user, setUser] = useState(null)

  const history = useHistory();

  async function getClient() {
    try {
      const user = await getUser(token);
      setUser(user);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    setToken(validateToken());

    if (token) {
      getClient();
    }
  }, [token]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newDataWorkers = {
        skills: cSelected,
        price : tarifa,
        description : experiencia,
        location,
        premium : false,
        roles : ["user", "worker"]
      };
      workerRegister(user._id, newDataWorkers,history)
      //await postPost(newDataWorkers);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeLocation= (e) => {
      const location = e.target.value

      if(location === 'All'){
        setLocation(["Coyoacán"])
      }
      setLocation([location])
  }

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  if (!user) {
    return (
      <div className="fix-screen container d-flex justify-content-center align-items-center">
      <Loader
        type="Puff"
        color={colors.orange}
        height={200}
        width={200}
      />
      </div>
    )
  }
    return (
    <React.Fragment>
      <div className="containerForm2">
        <form onSubmit={handleSubmit}>
          <label className="lb3 text-center">
            Demuestra tus habilidades uniéndote como talachero
          </label>
          <div className="form-group  formDiv">
            <label>Habilidades</label>
            <ButtonGroup className="d-flex flex-wrap p-3">
              <Button
                color="white"
                className="btn-outline-warning text-light m-1"
                onClick={() => onCheckboxBtnClick("Carpintería")}
                active={cSelected.includes("Carpintería")}
              >
                Carpinteria
              </Button>
              <Button
                color="white"
                onClick={() => onCheckboxBtnClick("Electricista")}
                className="btn-outline-warning text-light m-1"
                active={cSelected.includes("Electricista")}
              >
                Electricista
              </Button>
              <Button
                color="white"
                onClick={() => onCheckboxBtnClick("Mecánico")}
                active={cSelected.includes("Mecánico")}
                className="btn-outline-warning text-light m-1"
              >
                Mecanico
              </Button>
              <Button
                color="white"
                onClick={() => onCheckboxBtnClick("Albañilería")}
                active={cSelected.includes("Albañilería")}
                className="btn-outline-warning text-light m-1"
              >
                Albañileria
              </Button>
            </ButtonGroup>
          </div>
          <div className="form-group formDiv d-flex justify-content-between">
            <div>
              <label>Tarifa por hora</label>
              <CustomInput
                className="p-2"
                id="tarifa"
                placeholder="Ej. $100 c/hr"
                value={tarifa}
                callback={setTarifa}
              />
            </div>
          </div>
          <div className="form-group col-md-6 formDiv">
            <label className="text-white mt-2">Ubicacion</label>
            <select className="s mb-3" onChange={onChangeLocation}>
              <option selected value="All">
                Todas
              </option>
              <option value="Álvaro_Obregón">Alvaro Obregon</option>
              <option value="Azcapotzalco">Azcapotzalco</option>
              <option value="Benito_Juárez">Benito Juárez</option>
              <option value="Coyoacán">Coyoacán</option>
              <option value= "Cuajimalpa_de_Morelos">
                Cuajimalpa de Morelos
              </option>
              <option value="Cuauhtémoc">Cuauhtémoc</option>
              <option value="GustavoA_Madero">Gustavo A. Madero</option>
              <option value="Iztacalco">Iztacalco</option>
              <option value="Tlalpan">Tlalpan</option>
              <option value="Venustiano_Carranza">Venustiano Carranza</option>
              <option value="Xochimilco">Xochimilco</option>
            </select>
          </div>
          <div className="form-group col-md-6 formDiv">
            <label>Describe un poco de ti y tu trabajo</label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              color="#FFFAF1"
              value={experiencia}
              onChange={(e) => setExperiencia(e.target.value)}
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
