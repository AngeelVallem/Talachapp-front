import React from "react";
import Button from "../../components/Button";
import Image from "../../components/Image";
import { colors } from "../../globals/index";
import selectImage from "../../assets/Home/why-talachapp.svg"

export default function WhySection() {
  return (
    <>
    <div className="col col-md-6 p-4">
      <section className="text-center">
        <h1>¿Por que talachapp?</h1>
        <p className="my-4 px-md-5">
          Buscamos facilitar la búsqueda y contratación de servicios en
          cualquier lugar que te encuentres, aegurandote que el 100% de los
          trabajadores son profesionales.
        </p>
        <Button color={colors.primary} text="Contratar" />
      </section>
    </div>
    <div className="d-none d-md-block col-md-6 d-flex text-center">
      <Image  src={selectImage} size='300px'/> 
    </div>
    </>
  );
}
