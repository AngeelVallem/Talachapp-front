import React, { useReducer, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/Home/LOGO.png";
import { colors } from "../../globals/index";
import { changeStatus } from "../../services";

import Button from "../../components/Button";

export default function Tickets({ ticket, client, refresh }) {
  const history = useHistory();

  function handlerStatus(status) {
    changeStatus(ticket._id, { status: status });
  }

  function currentStatus() {
    if (ticket.status === "pending" && client.roles.includes("worker")) {
      return (
        <Button
          className="btn-warning"
          text={`Aceptar trabajo`}
          color={colors.primary}
          onClick={() => {
            handlerStatus("active");
            refresh("active");
          }}
        />
      );
    } else if (ticket.status === "active" && client.roles.length === 1) {
      return (
        <Button
          text={`Terminar talacha`}
          color={colors.primary}
          onClick={() => {
            handlerStatus("done");
            refresh("done");
          }}
        />
      );
    }
  }

  if (client) {
    return (
      <React.Fragment>
        <div className="card mainCard d-flex  zoom ">
          <div className="card-body container ">
            <h2>Formato de Ticket de Talachapp</h2>
            <Link
              className="d-flex lbl"
              onClick={() => history.push(`/worker/KEY`)}
            ></Link>
            <div className="d-flex align-items-center">
              {client.roles.includes("worker") && (
                <label className="card-title abc">
                  Talachero:
                  {"  "}
                  {client.name}
                  {"  "}
                  {client.lastName}
                </label>
              )}
              <img className="log" src={logo} alt="logo-icon" />
            </div>

            <p className="">
              Descripción : <small>{ticket.description}</small>
            </p>
            {ticket.status === "active" && (
              <p>
                Dirección : <small>{ticket.address}</small>
              </p>
            )}
            {currentStatus()}
            {ticket.status === "done" && (
              <p className="text-warning">TALACHA TERMINADA</p>
            )}
            {ticket.status === "pending" && (
              <p className="text-warning">TALACHA PENDIENTE</p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }

  return <h1>Loading</h1>;
}
