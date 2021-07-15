import React from "react";

import { colors } from "../../../globals/index";

import Card from "./Card";
import listingIcon from "../../../assets/Home/icons/015-list.svg";
import trustIcon from "../../../assets/Home/icons/009-trust.svg";
import adviceIcon from "../../../assets/Home/icons/006-advice.svg";

export default function WorkerInfoSection() {
  return (
    <>
      <div className="col-12">
        <header className="px-5 my-4 text-center">
          <h3 style={{ overflowX: "visible" }}>
            Únete como talachero en tan solo 3 pasos
          </h3>
        </header>
      </div>
      <div className="col-12 col-md-4 p-0">
        <Card color={colors.teal} icon={listingIcon}>
          <h3 style={{ overflowX: "visible" }}>
            1. Regístrate en la plataforma.
          </h3>
        </Card>
      </div>
      <div className="col-12 col-md-4 p-0 my-3 my-md-0">
        <Card color={colors.orange} icon={trustIcon}>
          <h3 style={{ overflowX: "visible" }}>
            2. Llena el formulario especial para talacheros.
          </h3>
        </Card>
      </div>
      <div className="col-12 col-md-4 p-0">
        <Card color={colors.primary} icon={adviceIcon}>
          <h3 style={{ overflowX: "visible" }}>
            3. Realiza tu pago de suscripción mensual por tan solo $10MXN
          </h3>
        </Card>
      </div>
    </>
  );
}
