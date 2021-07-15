import React, { useState } from "react";
import { toast } from "react-toastify";
import { colors } from "../../globals/index";

import Input from "../../components/Register/CustomInput";
import { Button, ButtonGroup } from "reactstrap";
import "../../styles/WorkersFilters/index.scss";
import CustomButton from "../Button";

export default function WorkersFilters() {
  const [cSelected, setCSelected] = useState([]);
  const [locationSelected, setLocationSelected] = useState('All')

	const isAll = locationSelected === 'All' ? 'selected' : '';

  const resetFilter = () => {
    setCSelected([]);
    setLocationSelected('All')
  };

  const onChangeLocation = (e) => {
    const location = e.target.value;

    setLocationSelected(location);


  };

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  return (
    <div className="filters-container p-3 m-3 m-lg-0 mt-lg-3">
      <header>
        <h3 className="text-white text-center" onClick={() => alert("text")}>
          Filtra talacheros
        </h3>
      </header>
      <div>
        <label className="text-white mt-2">Ubicacion</label>
        <select className="select mb-3" onChange={onChangeLocation} value={locationSelected}>
          <option selected value="All">
            Todas
          </option>
          <option value="Alvaro Obregon">Alvaro Obregon</option>
          <option value="Azcapotzalco">Azcapotzalco</option>
          <option value="Benito Juárez">Benito Juárez</option>
          <option value="Coyoacán">Coyoacán</option>
          <option value="Cuajimalpa de Morelos">Cuajimalpa de Morelos</option>
          <option value="Cuauhtémoc">Cuauhtémoc</option>
          <option value="Gustavo A. Madero">Gustavo A. Madero</option>
          <option value="Iztacalco">Iztacalco</option>
          <option value="Tlalpan">Tlalpan</option>
          <option value="Venustiano Carranza">Venustiano Carranza</option>
          <option value="Xochimilco">Xochimilco</option>
        </select>

        <h3 className="text-white">Skills Disponibles</h3>
        <ButtonGroup className="d-flex flex-wrap p-3">
          <Button
            color="white"
            className="btn-outline-warning text-light m-1"
            onClick={() => onCheckboxBtnClick("Carpinteria")}
            active={cSelected.includes("Carpinteria")}
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
            onClick={() => onCheckboxBtnClick("Mecanico")}
            active={cSelected.includes("Mecanico")}
            className="btn-outline-warning text-light m-1"
          >
            Mecanico
          </Button>
          <Button
            color="white"
            onClick={() => onCheckboxBtnClick("Albañileria")}
            active={cSelected.includes("Albañileria")}
            className="btn-outline-warning text-light m-1"
          >
            Albañileria
          </Button>
        </ButtonGroup>
        <div className="w-100 flex-wrap">
          <p className=" text-white">
            Seleccionada:{" "}
            {cSelected.map((item,i) => (
              <small key={i}> {item} ,</small>
            ))}
          </p>
        </div>
        <div className="d-flex justify-content">
          <CustomButton
            text="Resetear filtros"
            color={colors.primary}
            className="mx-auto"
            onClick={() => {
              resetFilter();
              toast.warning("Filtros reseteados", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
