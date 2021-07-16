import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

import Tickets from "./Ticket";
import { validateToken } from "../../globals/index";
import { getUser } from "../../services";
import { getTickets } from "../../services";

import "../../styles/Register/styles.scss";
import "../../styles/RegisterWorkers/styles.scss";
import "../../styles/Tickets/styles.scss";

function TicketsCom() {
  const [activeTab, setActiveTab] = useState("active");
  const [client, setClient] = useState(null);
  const [tickets, setTickets] = useState(null);
  const [token, setToken] = useState(null);
  const [refresh, setRefresh] = useState(false)


  async function getClient() {
    try {
      const user = await getUser(token);
      setClient(user);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function getData(status) {
    const res = await getTickets(status ? status : "");
    setTickets(res);
  }

  useEffect(() => {
    setToken(validateToken());

    if (token) {
      getClient();
    }
  }, [token]);



  useEffect(() => {
    getData(activeTab);
  }, [activeTab]);

  const toggle = (tab) => {
    setActiveTab(tab);
  };

  if(!client){
    return(
      <h1>LOADING</h1>
    )
  }

  return (
    <div className="d-flex flex-column mrginTop save-top save-bot">
      <Nav tabs className="bg-light align-items-center">
        <h3 className="">Mis tickets</h3>
        <NavItem className="tab">
          <NavLink
            className={classnames({ active: activeTab === "active" })}
            onClick={() => {
              toggle("active");
            }}
          >
            Activos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "pending" })}
            onClick={() => {
              toggle("pending");
            }}
          >
            Pendientes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "done" })}
            onClick={() => {
              toggle("done");
            }}
          >
            Terminados
          </NavLink>
        </NavItem>
      </Nav>
      {!tickets && !client ? (
        <h1>LOADING</h1>
      ) : (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="active">
            <Row>
            {tickets.map((ticket, i) => (
                <>
                  {(client._id === ticket.clientId || client._id === ticket.workerId)&& (
                    <Col sm="6" key={i}>
                      <Tickets ticket={ticket} client={client} refresh={setActiveTab}/>
                    </Col>
                  )}
                </>
              ))}
            </Row>
          </TabPane>
          <TabPane tabId="pending">
            <Row>
              {tickets.map((ticket, i) => (
                <>
                  {(client._id === ticket.clientId || client._id === ticket.workerId)&& (
                    <Col sm="6" key={i}>
                      <Tickets ticket={ticket} client={client} refresh={setActiveTab}/>
                    </Col>
                  )}
                </>
              ))}
            </Row>
          </TabPane>
          <TabPane tabId="done">
          <Row>
              {tickets.map((ticket, i) => (
                <>
                  {(client._id === ticket.clientId || client._id === ticket.workerId)&& (
                    <Col sm="6" key={i}>
                      <Tickets ticket={ticket} client={client} />
                    </Col>
                  )}
                </>
              ))}
            </Row>  
          </TabPane>
        </TabContent>
      )}
    </div>
  );
}

export default TicketsCom;
