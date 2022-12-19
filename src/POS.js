import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image1 from "./jpg/7-lg.png";
import {Col, Container, Row} from "react-bootstrap";
import {faCircleXmark, faPlusCircle, faCircleCheck, faLock, faScaleBalanced, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CoffeeImage from './jpg/coffee.jpeg';
import CardGroup from "react-bootstrap/CardGroup";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const ButtonStyle = {
    "backgroundColor": "rgba(0,0,0,0.01)",
    "fontSize": "1.0vw",
    "borderRadius": "0.5vw",
    "padding": "0.5vw 0.95vw 0.5vw 0.95vw",
    "boxShadow": "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.05), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.01)"
}
const SubSonnet = () => {
    return <Card style={{width: '10vw', margin: '1vw', padding: '1vw'}}>
        <Row style={{
            "marginBottom": "1vw"
        }}>
            <img src={CoffeeImage}/>
        </Row>
        <Row>
            <Button size="lg" variant="light" style={ButtonStyle} className="border border-0">
                Latte

                <FontAwesomeIcon icon={faPlusCircle} style={{
                    color: "rgba(0,0,0,0.25)",
                    marginLeft: "1.0vw"
                }}/>
            </Button>

        </Row>

    </Card>
}

const Sonnet = () => {
    const SubSonnets = [1, 2, 3, 4, 5].map((x, i) => (<SubSonnet key={i}/>))

    return <div style={{

        "padding": "2.0vw",
        "backgroundColor": "rgba(0,0,0,0.05)"

    }}>
        <Row xs={1} md={2} className="g-4">

            {SubSonnets}

        </Row>
    </div>
}

const CenterStyle = {"display": "flex", "justifyContent": "center", "alignItems": "center", flexDirection: "column", gap: "1.0vw"};

const ShoppingCart = () => {
    return (
        <ListGroup as="ol" numbered style={{
            width: "60%",
            fontSize: "1.0vw"
        }}>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Cappuccino</div>
                    <p>Hot, Small, Oat Milk</p>
                </div>
                <Badge bg="primary" pill>
                    $4.00
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Earl Grey</div>
                    <p>Hot, Large, Whole Milk</p>
                </div>
                <Badge bg="primary" pill>
                    $2.50
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Chocolate Cake</div>
                    <p>Small Slice</p>
                </div>
                <Badge bg="primary" pill>
                    $3.25
                </Badge>
            </ListGroup.Item>
        </ListGroup>
    );
}

function MainCard() {


    return <Card
            style={{
                backgroundColor: "#f3f3f3",
                marginTop: "0",
                marginBottom: "100vh",
                padding: "2.0vw 1.0vw 2.0vw 1.0vw",
                borderRadius: "1.0vw",
                overflow: "hidden"
            }}
            className="border border-0"
        >
            <Row>
                <Col className="col-6" style={CenterStyle}>
                    <div style={{"fontSize": "1.0vw"}}>

                        <Tabs
                            defaultActiveKey="profile"
                            id="fill-tab-example"
                            fill
                        >
                            <Tab eventKey="home" title="Favorites">
                                <Sonnet/>
                            </Tab>
                            <Tab eventKey="profile" title="Coffee">
                                <Sonnet/>
                            </Tab>
                            <Tab eventKey="long" title="Tea">
                                <Sonnet/>
                            </Tab>
                            <Tab eventKey="contact" title="Cake">
                                <Sonnet/>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
                <Col className="col-6" style={CenterStyle}>

                    <ShoppingCart />
                    <div style={{
                        display: "flex",
                        gap: "1.0vw"
                    }}>
                        <Button size="lg" variant="light" style={ButtonStyle} className="border border-0">
                            <FontAwesomeIcon icon={faCircleXmark} style={{
                                color: "rgba(0,0,0,0.25)",
                                marginRight: "1.0vw"
                            }}/>
                            Cancel


                        </Button>
                    <Button size="lg" variant="light" style={ButtonStyle} className="border border-0">
                        Continue

                        <FontAwesomeIcon icon={faArrowRight} style={{
                            color: "rgba(0,0,0,0.25)",
                            marginLeft: "1.0vw"
                        }}/>
                    </Button>
                    </div>

                </Col>
            </Row>
        </Card>
}

export default MainCard;
