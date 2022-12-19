import Card from "react-bootstrap/Card";
import Image1 from "./jpg/69-lg.png";
import { Col, Container, Row } from "react-bootstrap";
import { faArrowRight, faCircleCheck, faExclamationCircle, faLock, faScaleBalanced, faUserGroup, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EtherscanCard from "./EtherscanCard";

import AppStore from "./jpg/app-store.png";
import GooglePlay from "./jpg/google-play.png";

const ArrowText = {
    "marginLeft": "1.1vw",
    "fontSize": "1.05vw"
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


    MainCardHeading = <p style={{"fontSize": "1.75vw", "lineHeight": "4.25vh"}}>
        Get the simplest way to store, send, and receieve digital money
    </p>


    return <Container>

        <Card
            style={{
                backgroundColor: "rgba(255,255,255,0.875)",
                marginTop: "4.0vh", marginBottom: "1.0vh",
                borderRadius: "1.0vw",
                overflow: "hidden"
            }}
            className="border border-0"
        >
            <Row>
                <Col className="col-4" style={{
                    "display": "flex", "justifyContent": "center", "alignItems": "center"
                }}>
                    <div style={{ "width": "75%" }}>

                        <div>
                            {MainCardHeading}
                        </div>

                        <div style={MainBulletPoints}>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faUserGroup} style={{ fontSize: "1.15vw" }} />
                                <span style={ArrowText}>Send money to any phone or email</span>
                            </div>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faWallet} style={{ fontSize: "1.35vw" }} />
                                <span style={ArrowText}>Store your money on your phone</span>
                            </div>



                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "1.35vw" }} />
                                <span style={ArrowText}>Lower fees than anywhere else</span>
                            </div>

                        </div>

                        <div style={{
                            marginTop: "5.0vh"
                        }}>

                            <img src={GooglePlay} style={{

                                width: "7.5vw"

                            }} />

                            <img src={AppStore} style={{
                                marginLeft: "1.0vw",
                                width: "7.0vw",

                            }} />

                        </div>
                    </div>
                </Col>
                <Col className="col-8" style={{ "overflow": "hidden" }}>
                    <div style={{ "position": "absolute", "marginLeft": "9vw", "marginTop": "7.5vw" }}>
                        <div style={{
                            width: "19.0vw",
                            backgroundColor: "rgba(0,0,0,0.1)",
                            borderRadius: "1.0vw",
                            paddingTop: "5.0vh",
                            paddingBottom: "25.0vh"

                        }}>
                            <EtherscanCard />
                        </div>
                    </div>

                    <div style={{ "position": "absolute", "marginLeft": "36.5vw", "marginTop": "15vw" }}>
                        <div style={{
                            backgroundColor: "rgba(0,0,0,0.4)",
                            padding: "1.0vw",
                            borderRadius: "1.0vw"
                        }}>
                            <FontAwesomeIcon icon={faExclamationCircle} style={{ fontSize: "1.0vw", color: "white" }} />
                            <span style={{
                                fontSize: "1.0vw", color: "white", marginLeft: "1.0vw"
                            }}>You received 420.69 USDC</span>
                        </div>
                    </div>

                    <img src={Image1} style={{ width: "100%", height: "100%" }} />
                </Col>
            </Row>
        </Card>

    </Container>
}

export default MainCard;
