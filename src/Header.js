import React from "react";
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCircleInfo,
    faList,
    faStore,
    faArrowRight,
    faCirclePlus,
    faCircleChevronDown,
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons"
import {useContext} from "react";
import {AppContext} from "./Context";

const ArrowHeaderSymbol = {
    "marginLeft": "0.3vw",
    "fontSize": "0.9vw",
    "color": "rgba(0,0,0,0.25)"
}

const SingularHeaderSymbol = {
    "margin": "0",
    "fontSize": "0.9vw",
    "color": "rgba(0,0,0,0.25)"
}

const ButtonStyle = {
    "fontSize": "1.0vw",
    "borderRadius": "1.0vw",
    "padding": "0.5vw 0.95vw 0.5vw 0.95vw",
    "boxShadow": "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.05), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.01)"
}

const ButtonIcon = {
    "marginRight": "0.5vw",
    "fontSize": "0.9vw",
    "color": "rgba(0,0,0,0.5)"
}

function Header() {
    const {setLayout} = useContext(AppContext);


    return (
        <Container className="header" style={{"minWidth": "unset", "maxWidth": "unset", "justifyContent": "center", "display": "flex", "padding": 0, "margin":0}}>
            <Col className="col-10" style={{ "padding": 0, "margin":0 }}>
            <Row style={{
                "paddingTop": "1.0vh",
                "paddingBottom": "1.0vh",


            }}>


                <Col className="col-2" style={{"display": "flex", "justifyContent": "left", "padding": 0, "gap": "0.25vw"}}>
                    <Button size="lg" variant="light" style={ButtonStyle} className="border border-0"><FontAwesomeIcon
                        style={SingularHeaderSymbol} icon={faMagnifyingGlass}/></Button>
                    <Button size="lg" variant="light" style={ButtonStyle} className="border border-0"
                            onClick={() => (setLayout("HOME"))}>
                        <FontAwesomeIcon icon={faCirclePlus} style={{color: "#f70000"}}/> Payco</Button>

                </Col>

                <Col></Col>

                <Col className="col-3"  style={{"display": "flex", "justifyContent": "right", "padding": 0, "gap":"0.25vw"}}>
                    <Button size="lg" variant="light" style={ButtonStyle} className="border border-0">EN <FontAwesomeIcon
                            style={ArrowHeaderSymbol} icon={faCircleChevronDown}/></Button>
                    <Button size="lg" variant="light" style={ButtonStyle} className="border border-0">Get
                        Started <FontAwesomeIcon
                            style={ArrowHeaderSymbol} icon={faArrowRight}/></Button>

                </Col>

            </Row>
            </Col>
        </Container>
    );
}

export default Header;