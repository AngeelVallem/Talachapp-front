import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/Home/LOGO.png";

export default function Tickets() {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="card mainCard d-flex ">
        <div className="card-body container ">
          <Link
            className="d-flex lbl"
            onClick={() => history.push(`/worker/KEY`)}
          >
            <img className="log" src={logo} alt="logo-icon" />
            <label className="lbl">ID 12312DFhg</label>
          </Link>

          <h5 className="card-title">Nombre del Talachero</h5>
          <p className="card-text">
            Descripción: Se requiere reparar dos puertas de madera y pintarlas.
          </p>

          <button className="btn btn1">Liberar Ticket</button>
        </div>
      </div>
    </React.Fragment>
  );
}
