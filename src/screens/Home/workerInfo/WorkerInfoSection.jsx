import React from "react";

import {colors} from '../../../globals/index'

import Card from "./Card";
import listingIcon from "../../../assets/Home/icons/015-list.svg";

export default function WorkerInfoSection() {
  return (
    <section className="text-center my-5 p-0">
      <div className="col">
        <header className="px-5 my-4">
          <h3>Registrate como talachero en tan solo 3 pasos</h3>
        </header>
      </div>
      <div className="col p-0">
        <Card color={colors.teal} icon={listingIcon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          lacus, gravida risus integer bibendum orci sed adipiscing nisl.
        </Card>
      </div>
      <div className="col p-0 my-3">
        <Card color={colors.orange} icon={listingIcon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          lacus, gravida risus integer bibendum orci sed adipiscing nisl.
        </Card>
      </div>
      <div className="col p-0">
        <Card color={colors.primary} icon={listingIcon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          lacus, gravida risus integer bibendum orci sed adipiscing nisl.
        </Card>
      </div>
    </section>
  );
}
