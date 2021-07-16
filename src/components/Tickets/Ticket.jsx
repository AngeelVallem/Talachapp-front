import React, { useReducer,useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/Home/LOGO.png";
import {colors} from "../../globals/index"
import { changeStatus } from "../../services";

import Button from "../../components/Button"




export default function Tickets({ticket, client,refresh}) {

  const history = useHistory();


function handlerStatus(status){
  changeStatus(ticket._id, {status : status})
}

 function currentStatus () {
  if(ticket.status === 'pending' && client.roles.includes('worker')) {
    return (
      <Button text={`Aceptar trabajo`} color={colors.primary} onClick={() => {
        handlerStatus('active')
        refresh('active')
      }}/>
    )
  }
  else if(ticket.status === 'active' && client.roles.length === 1) {
      return (
        <Button text={`Terminar talacha`} color={colors.primary} onClick={() => {
          handlerStatus('done')
          refresh('done')
        }}/>
      )
  }
 }


  if(client){
  return (
    <React.Fragment>
      <div className="card mainCard d-flex ">
        <div className="card-body container ">
          <Link
            className="d-flex lbl"
            onClick={() => history.push(`/worker/KEY`)}
          >
            <img className="log" src={logo} alt="logo-icon" />

          </Link>

          {client.roles.includes('worker') &&  <h5 className="card-title">{client.name}{"  "}{client.lastName}</h5>}
          <p className="card-text">
            Descripcion : <small>{ticket.description}</small>
          </p>
          {ticket.status === 'active' && <p>Direción : <small>{ticket.address}</small></p>}
          {currentStatus()}
          {ticket.status === 'done' && <p className="text-warning">TALACHA TERMINADA</p>}
          {ticket.status === 'pending' && <p className="text-warning">TALACHA PENDIENTE</p>}
        </div>
      </div>
    </React.Fragment>
  );
  }

  return <h1>Loading</h1>
}
