import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import { validateToken } from "../globals/index";
import { getUser, generateTicket } from "../services";

import { colors } from "../globals/index";

export default function CustomModal({ modal, id, setModal }) {
  const [user, setUser] = useState(null);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  async function getCurrentUser() {
    try {
      const user = await getUser(validateToken());
      setUser(user);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getCurrentUser();
  }, []);

  const toggle = () => setModal(!modal);

  const history = useHistory();

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader className="d-flex justify-content-center ">
        Contratación
      </ModalHeader>
      <ModalBody>
        <p className="p-0 m-0 mb-4 text-warning">
          Estas apunto de mandar una solicitud de contratación.
        </p>

        <div className="d-flex flex-column">
          <label className="mb-2">Descripción del trabajo</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="work-description"
            cols="30"
            rows="10"
            className="p-2"
            placeholder="Ej. Quiero arreglar la tubería de mi baño."
          ></textarea>

          <label className="mt-4">Dirección</label>
          <input
            type="text"
            className="p-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <small className="text-muted mb-2">
            La dirección se mostrará unicamente si el talachero acepta el
            trabajo
          </small>
        </div>
      </ModalBody>

      <ModalFooter>
        <Button
          className="btn btn-warning"
          color={colors.primary}
          onClick={() => {
            const ticket = {
              clientId: user._id,
              workerId: id,
              description,
              address,
              status: "pending",
            };

            generateTicket(ticket, history);
            toggle();
          }}
          text="Enviar"
        />
        <Button color={colors.orange} onClick={toggle} text="Cancelar" />
      </ModalFooter>
    </Modal>
  );
}
