import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image1 from "./jpg/7-lg.png";
import { Accordion, Col, Container, Row } from "react-bootstrap";
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

import IMG1 from "./jpg/starbucks/cappuccino.webp";
import IMG2 from "./jpg/starbucks/flat-white.webp";
import IMG3 from "./jpg/starbucks/psl.webp";
import IMG4 from "./jpg/starbucks/caramel-brule.webp";
import IMG5 from "./jpg/starbucks/peppermint-mocha.webp";

import IMG6 from "./jpg/starbucks/tea.webp";
import IMG7 from "./jpg/starbucks/chai-latte.webp";
import IMG8 from "./jpg/starbucks/blueberry-muffin.webp";
import IMG9 from "./jpg/starbucks/pumpkin-muffin.webp";
import IMG10 from "./jpg/starbucks/coffee-cake.webp";
import IMG11 from "./jpg/starbucks/lemon-coconut.webp";

import IMG12 from "./jpg/starbucks/matcha-latte.webp";
import IMG13 from "./jpg/starbucks/honey-citrus-tea.webp";

import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const MenuItems = {
  Favorites: [
    { name: "Pumpkin Spice Latte", image: IMG3 },
    { name: "Flat White", image: IMG2 },
    { name: "Chai Latte", image: IMG7 },
    { name: "Matcha Latte", image: IMG12 },
    { name: "Blueberry Muffin", image: IMG8 },
    { name: "Lemon Coconut Cake", image: IMG11 },
  ],
  Coffee: [
    { name: "Cappuccino", image: IMG1 },
    { name: "Pumpkin Spice Latte", image: IMG3 },
    { name: "Flat White", image: IMG2 },
    { name: "Caramel Brule", image: IMG4 },
    { name: "Peppermint Mocha", image: IMG5 },
  ],
  Tea: [
    { name: "Earl Grey", image: IMG6 },
    { name: "Chai Latte", image: IMG7 },
    { name: "Matcha Latte", image: IMG12 },
    { name: "Honey Citrus", image: IMG13 },
  ],
  Cake: [
    { name: "Cinnamon Coffee Cake", image: IMG10 },
    { name: "Pumpkin Cream Muffin", image: IMG9 },
    { name: "Blueberry Muffin", image: IMG8 },
    { name: "Lemon Coconut Cake", image: IMG11 },
  ],
};

const SubSonnet = ({ name, image }) => {
  return (
    <Card
      style={{
        width: "15vw",
        padding: 0,

        backgroundColor: "unset",
        border: "none",
        display: "flex",
        alignItems: "center",
        marginRight: "0.8vw",
        marginBottom: "1.8vh",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "32.5vh",
          borderRadius: "0.2vw",
          overflow: "hidden",
          backgroundColor: "#1f3933",
        }}
      >
        <img src={image} width="100%" />
      </div>
      <div style={{ marginTop: "-18%", width: "90%" }}>
        <Button style={{ width: "100%", fontSize: "0.75vw" }}>
          <span>{name}</span>
        </Button>
      </div>
    </Card>
  );
};

const Sonnet = ({ title }) => {
  const SubSonnets = MenuItems[title].map((x, i) => (
    <SubSonnet key={i} name={x.name} image={x.image} />
  ));

  return (
    <div
      style={{
        paddingLeft: "2%",
        paddingTop: "4%",
        paddingBottom: "6%",
        backgroundColor: "rgba(255,255,255,0.025)",
        borderRadius: "0vw 0vw 1vw 1vw",
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
  const lgi = [
    {
      name: "Cappuccino",
      desc: "Hot, Small, Oat Milk",
      price: "$4.00",
    },
    {
      name: "Latte",
      desc: "Hot, Large, Oat Milk",
      price: "$4.50",
    },
    {
      name: "Chocolate Cake",
      desc: "Small Slice",
      price: "$5.00",
    },
  ].map((x, i) => (
    <Accordion.Item
      key={i}
      eventKey={i}
      style={{
        backgroundColor: "rgba(0,0,20,0.5)",
        color: "rgba(255,255,255,0.85)",
        width: "100%",
      }}
    >
      <Accordion.Header style={{ width: "100%" }} className="badge-header">
        <div style={{ width: "100%", padding:"1vh 0 0 1vw" }}>
          <b>{x.name}</b>
          <p style={{ color: "rgba(255,255,255,0.5)" }}>{x.desc}</p>
        </div>
        <Badge pill>{x.price}</Badge>
      </Accordion.Header>
      <Accordion.Body>
        <div style={{ width: "100%" }}>
          <b>{x.name}</b>
          <p style={{ color: "rgba(255,255,255,0.5)" }}>{x.desc}</p>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  ));

  return (
    <Accordion
      style={{
        width: "100%",
        fontSize: "0.75vw"
      }}
    >
      {lgi}
    </Accordion>
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
        <Col style={CenterStyle}>
          <div style={{ fontSize: "1.0vw" }}>
            <Tabs defaultActiveKey="Favorites" fill>
              <Tab eventKey="Favorites" title="Favorites">
                <Sonnet title="Favorites" />
              </Tab>
              <Tab eventKey="Coffee" title="Coffee">
                <Sonnet title="Coffee" />
              </Tab>
              <Tab eventKey="Tea" title="Tea">
                <Sonnet title="Tea" />
              </Tab>
              <Tab eventKey="Cake" title="Cake">
                <Sonnet title="Cake" />
              </Tab>
            </Tabs>
          </div>
        </Col>
        <Col className="col-5" style={CenterStyle}>
          <ShoppingCart />
          <div
            style={{
              display: "flex",
              gap: "1.0vw",
            }}
          >
            <Button>Cancel</Button>
            <Button>Continue</Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default MainCard;
