import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image1 from "./jpg/7-lg.png";
import { Col, Container, Row } from "react-bootstrap";
import { faArrowRight, faCircleCheck, faLock, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


const ArrowText = {
    "marginLeft": "1.1vw",
    "fontSize": "1.05vw",
    "color": "rgba(255,255,255,0.85)"
}
const MainBulletPoints = {
    "marginTop": "2.0vw",
    "gap": "1.0vh",
    "display": "flex",
    "flexDirection": "column"
}

const BulletStyle = { "marginBottom": "0.2vw", "padding": "0" }

function MainCard() {

    let MainCardHeading;


    MainCardHeading = <p style={{ "fontSize": "1.55vw", "lineHeight": "2.0vw", "color": "rgba(255,255,255,0.85)" }}>
        Pay and get paid faster when you use Payco,
        the payment platform of the future
    </p>


    return <Container>

        <Card
            style={{
                backgroundColor: "rgba(0,0,20,0.875)",
                marginTop: "0", marginBottom: "0vh",
                borderRadius: "1.0vw",
                overflow: "hidden",
                height: "82vh"
            }}
            className="border border-0"
        >
            <Row>
                <Col style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "maxWidth": "30%" }}>

                    <div style={{width: "70%"}}>
                        <div>
                            {MainCardHeading}
                        </div>

                        <div style={MainBulletPoints}>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "1.25vw", color: "rgba(255,255,255,0.75)" }} />
                                <span style={ArrowText}>Lower fees than anywhere else</span>
                            </div>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faLock} style={{ fontSize: "1.35vw", color: "rgba(255,255,255,0.75)" }}  />
                                <span style={ArrowText}>More secure than a bank</span>
                            </div>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faScaleBalanced} style={{ fontSize: "1.0vw", color: "rgba(255,255,255,0.75)" }} />
                                <span style={ArrowText}>Protected by Swiss law</span>
                            </div>

                        </div>

                        

                    </div>
                </Col>
                <Col className="col-8">

                    <img src={Image1} style={{ width: "106%" }} />
                </Col>
            </Row>
        </Card>

    </Container>
}

export default MainCard;
