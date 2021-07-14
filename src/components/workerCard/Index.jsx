import React from "react";

import { Link } from "react-router-dom";

import "../../styles/app.scss";

import { colors } from "../../globals/index";

import Image from "../Image";
import Button from "../Button";

export default function WorkerCard({ worker }) {
  return (
    <div className="col-12 col-md-6">
      <div className="card-worker m-3 p-3 shadow-sm">
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/${worker._id}`} className="link">
            <div className="d-flex align-items-center">
              <Image
                cirlce
                src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
                alt="avatar"
              />
              <p className="m-0 p-0">
                {worker.name}
                {"  "}
                {worker.lastName}
              </p>
            </div>
          </Link>
          <Button
            text="..."
            color="#fff"
            className="d-flex align-items-center"
          />
        </div>
        <Link to={`/${worker._id}`} className="link">
          <div className="card-works">
            <h5>Trabajos destacados</h5>
            <Image src="https://picsum.photos/200/100" className="work-img" />
            <Image src="https://picsum.photos/200/100" className="work-img" />
            <Image src="https://picsum.photos/200/100" className="work-img" />
          </div>
        </Link>
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-0 m-0">10$/hr</p>
          <Button text="Contratar" color={colors.teal} />
        </div>
      </div>
    </div>
  );
}
