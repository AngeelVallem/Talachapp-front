import React from "react";
import Button from "../../components/Button";
import { colors } from "../../globals/index";

export default function WhySection() {
  return (
    <div className="col p-4">
      <section className="text-center">
        <h1>¿Por que talachapp?</h1>
        <p className="my-4">
          Buscamos facilitar la búsqueda y contratación de servicios en
          cualquier lugar que te encuentres, aegurandote que el 100% de los
          trabajadores son profesionales.
        </p>
        <Button color={colors.primary} text="Contratar" />
      </section>
    </div>
  );
}
