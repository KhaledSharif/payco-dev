import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image1 from "./jpg/7-lg.png";
import { Col, Container, Row } from "react-bootstrap";
import {
  faCircleXmark,
  faPlusCircle,
  faCircleCheck,
  faLock,
  faScaleBalanced,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CoffeeImage from "./jpg/coffee.jpeg";
import CardGroup from "react-bootstrap/CardGroup";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const ButtonStyle = {
  backgroundColor: "rgba(255,255,255,0.15)",
  color: "white",
  fontSize: "1.0vw",
  borderRadius: "0.5vw",
  padding: "0.5vw 0.95vw 0.5vw 0.95vw",
};
const SubSonnet = () => {
  return (
    <Card style={{ width: "10vw", margin: "1vw", padding: "1vw", backgroundColor: "rgba(255,255,255,0.05)" }}>
      <Row
        style={{
          marginBottom: "1vw",
        }}
      >
        <img src={CoffeeImage} />
      </Row>
      <Row>
        <Button
          size="lg"
          variant="light"
          style={ButtonStyle}
          className="border border-0"
        >
          Latte
          <FontAwesomeIcon
            icon={faPlusCircle}
            style={{
              color: "rgba(255,255,255,0.25)",
              marginLeft: "1.0vw",
            }}
          />
        </Button>
      </Row>
    </Card>
  );
};

const Sonnet = () => {
  const SubSonnets = [1, 2, 3, 4, 5].map((x, i) => <SubSonnet key={i} />);

  return (
    <div
      style={{
        padding: "2.0vw",
        backgroundColor: "rgba(0,0,0,0.05)",
      }}
    >
      <Row xs={1} md={2} className="g-4">
        {SubSonnets}
      </Row>
    </div>
  );
};

const CenterStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1.0vw",
};

const ShoppingCart = () => {
  const lgi = [1, 2, 3].map((x) => (
    <ListGroup.Item
      key={x}
      as="li"
      className="d-flex justify-content-between align-items-start"
      style={{ backgroundColor: "rgba(0,0,20,0.5)", color: "rgba(255,255,255,0.85)" }}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Cappuccino</div>
        <p style={{color: "rgba(255,255,255,0.5)"}}>Hot, Small, Oat Milk</p>
      </div>
      <Badge bg="primary" pill>
        $4.00
      </Badge>
    </ListGroup.Item>
  ));

  return (
    <ListGroup
      as="ol"
      numbered
      style={{
        width: "80%",
        fontSize: "1.0vw",
      }}
    >
      {lgi}
    </ListGroup>
  );
};

function MainCard() {
  return (
    <Card
      style={{
        backgroundColor: "rgba(0,0,20,0.5)",
        marginTop: "0",
        marginBottom: "100vh",
        padding: "2.0vw 1.0vw 2.0vw 1.0vw",
        borderRadius: "1.0vw",
        overflow: "hidden",
      }}
      className="border border-0"
    >
      <Row>
        <Col className="col-6" style={CenterStyle}>
          <div style={{ fontSize: "1.0vw" }}>
            <Tabs defaultActiveKey="profile" id="fill-tab-example" fill>
              <Tab eventKey="home" title="Favorites">
                <Sonnet />
              </Tab>
              <Tab eventKey="profile" title="Coffee">
                <Sonnet />
              </Tab>
              <Tab eventKey="long" title="Tea">
                <Sonnet />
              </Tab>
              <Tab eventKey="contact" title="Cake">
                <Sonnet />
              </Tab>
            </Tabs>
          </div>
        </Col>
        <Col className="col-6" style={CenterStyle}>
          <ShoppingCart />
          <div
            style={{
              display: "flex",
              gap: "1.0vw",
            }}
          >
            <Button
              size="lg"
              variant="light"
              style={ButtonStyle}
              className="border border-0"
            >
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{
                  color: "rgba(255,255,255,0.25)",
                  marginRight: "1.0vw",
                }}
              />
              Cancel
            </Button>
            <Button
              size="lg"
              variant="light"
              style={ButtonStyle}
              className="border border-0"
            >
              Continue
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{
                  color: "rgba(255,255,255,0.25)",
                  marginLeft: "1.0vw",
                }}
              />
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default MainCard;
