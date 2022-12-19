import React from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleInfo,
    faList,
    faStore,
    faArrowRight,
    faCirclePlus,
    faCircleChevronDown,
    faMagnifyingGlass,
    faShop,
    faUserAstronaut,
    faVideo,
    faCoins
} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { AppContext } from "./Context";
import SmallLogo from "./jpg/smol-logo.png"

const ArrowHeaderSymbol = {
    "marginLeft": "0.3vw",
    "fontSize": "0.8vw",
    "color": "rgba(0,0,0,0.25)"
}

const SingularHeaderSymbol = {
    "margin": "0",
    "fontSize": "0.8vw",
    "color": "rgba(0,0,0,0.25)"
}

const ButtonStyle = {
    "zIndex": 10,

    "fontSize": "0.9vw",
    "borderRadius": "1.0vw",
    "padding": "0.4vw 0.8vw 0.4vw 0.8vw",
    "boxShadow": "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.05), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.01)"
}

function Header() {
    const { setLayout } = useContext(AppContext);


    return (
        <Container className="header" style={{
            "minWidth": "unset",
            "maxWidth": "unset",
            "justifyContent": "center",
            "display": "flex",
            "padding": 0,
            "margin": 0,
        }}>
            <Col className="col-10" style={{ "padding": 0, "margin": 0 }}>
                <Row style={{
                    "paddingTop": "1vh",
                    "paddingBottom": "1vh",


                }}>


                    <Col className="col-2"
                        style={{
                            "display": "flex", "justifyContent": "left", "padding": 0, "gap": "0.25vw"
                        }}>
                        <Button
                            size="lg" variant="light" style={ButtonStyle} className="border border-0">
                            <FontAwesomeIcon
                                style={SingularHeaderSymbol} icon={faMagnifyingGlass} />
                        </Button>
                        <Button size="lg" variant="light" style={ButtonStyle} className="border border-0"
                            onClick={() => (setLayout("HOME"))}>

                            <img src={SmallLogo} style={{
                                width: "1.35vw",
                                marginRight: "0.55vw"
                            }} />

                            Payco

                        </Button>

                    </Col>

                    <Col></Col>

                    <Col className="col-3"
                        style={{ "display": "flex", "justifyContent": "right", "padding": 0, "gap": "0.25vw" }}>
                        <Button
                            size="lg" variant="light" style={ButtonStyle}
                            className="border border-0">EN <FontAwesomeIcon
                                style={ArrowHeaderSymbol} icon={faCircleChevronDown} /></Button>

                    <Button onClick={() => (setLayout("VIDEO-EDITOR"))}
                            size="lg" variant="light" style={ButtonStyle} className="border border-0">
                            <FontAwesomeIcon
                                style={SingularHeaderSymbol} icon={faVideo} />
                        </Button>

<Button onClick={() => (setLayout("STORE-FRONT"))}
                            size="lg" variant="light" style={ButtonStyle} className="border border-0">
                            <FontAwesomeIcon
                                style={SingularHeaderSymbol} icon={faUserAstronaut} />
                        </Button>


                        <Button onClick={() => (setLayout("POS"))}
                            size="lg" variant="light" style={ButtonStyle} className="border border-0">
                            <FontAwesomeIcon
                                style={SingularHeaderSymbol} icon={faShop} />
                        </Button>

                        <Button onClick={() => (setLayout("ETHERS"))}
                            size="lg" variant="light" style={ButtonStyle} className="border border-0">
                            <FontAwesomeIcon
                                style={SingularHeaderSymbol} icon={faCoins} />
                        </Button>


                        <Button


                            size="lg" variant="light" style={ButtonStyle} className="border border-0">Login <FontAwesomeIcon
                                style={ArrowHeaderSymbol} icon={faArrowRight} /></Button>

                    </Col>

                </Row>
            </Col>
        </Container>
    );
}

export default Header;