import React, { Fragment } from "react";

import AdminPanel from "../workerCard/Index";
import Filtro from "./Filtro";

import "../../styles/Admin/styles.scss";

class AdminCom extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="containerScroll">
          <Filtro />
          <AdminPanel />
        </div>
      </Fragment>
    );
  }
}

export default AdminCom;
