import React, { useState } from "react";

export default function Filtro() {
  return (
    <React.Fragment>
      <label className="AdminLabel">Panel de Administrador</label>
      <div className="mb-3 mrgleft">
        <label for="exampleFormControlInput1" className="form-label">
          Buscar Talachero por Nombre
        </label>
        <input
          type="search"
          className="form-control siz"
          id="exampleFormControlInput1"
          placeholder="Ej. Roberto Piña"
        />
      </div>
    </React.Fragment>
  );
}
