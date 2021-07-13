import React, { Fragment } from "react";

import NavbarReg from "../RegisterWorkers/importNav";
import Tickets from "./Ticket";

import "../../styles/Register/styles.scss";
import "../../styles/RegisterWorkers/styles.scss";
import "../../styles/Tickets/styles.scss";

class TicketsCom extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="containerScroll d-flex">
          <NavbarReg />
          <Tickets />
        </div>
      </Fragment>
    );
  }
}

export default TicketsCom;
