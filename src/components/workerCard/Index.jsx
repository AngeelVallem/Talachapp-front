import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../../styles/app.scss";

import { colors } from "../../globals/index";

import Image from "../Image";
import Button from "../Button";

import Modal from "../Modal";
import { Badge } from "reactstrap";

export default function WorkerCard({ worker }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="col-12 col-md-6">
      <Modal modal={isOpen} setModal={setIsOpen} id={worker._id} />
      <div className="card-worker m-3 p-3 shadow-sm">
        <div className="d-flex justify-content-between align-items-center over">
            <div className="d-flex flex-column over">
              <div className="d-flex align-items-center over">
                <Image
                  cirlce
                  src="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
                  alt="avatar"
                />
                <h5 className="m-0 p-0">
                  {worker.name}
                  {"  "}
                  {worker.lastName}
                </h5>
              </div>
              <div className="d-flex flex-wrap">
                {worker.skills.map((skill, i) => (
                  <small key={i} className="b p-1 m-1">
                    {skill}
                  </small>
                ))}
              </div>
            </div>
        </div>

        <p className="mb-2 over">{worker.description}</p>

        <div className="over">
          <h5>
            Zona de trabajo{" "}
            <small className="text-info ">{worker.location}</small>
          </h5>
        </div>

        <div className="d-flex justify-content-between align-items-center over">
          <p className="p-0 m-0">{worker.price}$/hr</p>
          <Button
            text="Contratar"
            color="#ffe277"
            className="btn btn-warning"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
}
