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
          <h3>Registrate como talachero en tan solo 3 pasos</h3>
        </header>
      </div>
      <div className="col-12 col-md-4 p-0">
        <Card color={colors.teal} icon={listingIcon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          lacus, gravida risus integer bibendum orci sed adipiscing nisl.
        </Card>
      </div>
      <div className="col-12 col-md-4 p-0 my-3 my-md-0">
        <Card color={colors.orange} icon={trustIcon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          lacus, gravida risus integer bibendum orci sed adipiscing nisl.
        </Card>
      </div>
      <div className="col-12 col-md-4 p-0">
        <Card color={colors.primary} icon={adviceIcon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          lacus, gravida risus integer bibendum orci sed adipiscing nisl.
        </Card>
      </div>
    </>
  );
}
