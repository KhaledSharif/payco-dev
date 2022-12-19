import Card from "react-bootstrap/Card";
import Image1 from "./jpg/2-lg.jpg";
import Image2 from "./jpg/square.png";
import Image3 from "./jpg/square-2.png";

import { Col, Row } from "react-bootstrap";
import { faCircleCheck, faLock, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
const CenterStyle = { "display": "flex", "flexDirection": "row", "gap": "3.5vh", "alignItems": "center", "justifyContent": "center", "paddingBottom": "100vh" }
const CommonCardStyle = {
    height: "82vh",
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.875)",
    marginTop: "0", marginBottom: "0",
    borderRadius: "1.0vw",
    overflow: "hidden"
}
const BulletStyle = { "marginBottom": "0.2vw", "padding": "0" }

function MainCard() {
    let MainCardHeading;

    MainCardHeading = <p style={{  "fontSize": "1.55vw", "lineHeight": "2.0vw"  }}>
        Store your money safely in a digital wallet that only you hold the keys to
    </p>

    return <Row style={CenterStyle}>



        <Card
            style={CommonCardStyle}
            className="border border-0"
        >
            <Row>

                <Col className="col-4" style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "maxWidth": "30%" }}>
                    <div style={{ "width": "70%" }}>

                        <div>
                            {MainCardHeading}
                        </div>

                        <div style={MainBulletPoints}>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "1.25vw" }} />
                                <span style={ArrowText}>Lower fees than anywhere else</span>
                            </div>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faLock} style={{ fontSize: "1.35vw" }} />
                                <span style={ArrowText}>More secure than a bank</span>
                            </div>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faScaleBalanced} style={{ fontSize: "1.0vw" }} />
                                <span style={ArrowText}>Protected by Swiss law</span>
                            </div>

                        </div>
                    </div>
                </Col>

                <Col className="col-8">
                    <img src={Image1} width="110%" />
                </Col>

            </Row>
        </Card>


        <Card
            style={CommonCardStyle}
            className="border border-0"
        >
            <Row>

                <Col className="col-4" style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                    <div style={{ "width": "70%" }}>

                        <div>
                            <p style={{ "fontSize": "1.55vw", "lineHeight": "1.3em" }}>
                                Streamline your payments, simplify inventory, and sell anywhere in the world
                            </p>
                        </div>

                        <div style={MainBulletPoints}>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "1.25vw" }} />
                                <span style={ArrowText}>Lower fees than anywhere else</span>
                            </div>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faLock} style={{ fontSize: "1.35vw" }} />
                                <span style={ArrowText}>More secure than a bank</span>
                            </div>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faScaleBalanced} style={{ fontSize: "1.0vw" }} />
                                <span style={ArrowText}>Protected by Swiss law</span>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col className="col-8" style={{ "overflow": "hidden", "padding": 0 }}>
                    <img src={Image2} style={{ width: "100%" }} />
                </Col>
            </Row>
        </Card>


        <Card
            style={CommonCardStyle}
            className="border border-0"
        >
            <Row>

                <Col className="col-4" style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                    <div style={{ "width": "70%" }}>

                        <div>
                            <p style={{ "fontSize": "1.55vw", "lineHeight": "1.3em" }}>
                                Tools that keep your business moving — so you can shape what's next
                            </p>
                        </div>

                        <div style={MainBulletPoints}>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "1.25vw" }} />
                                <span style={ArrowText}>Lower fees than anywhere else</span>
                            </div>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faLock} style={{ fontSize: "1.35vw" }} />
                                <span style={ArrowText}>More secure than a bank</span>
                            </div>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faScaleBalanced} style={{ fontSize: "1.0vw" }} />
                                <span style={ArrowText}>Protected by Swiss law</span>
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
                <Col className="col-8" style={{ "overflow": "hidden", "padding": 0 }}>
                    <img src={Image3} style={{ width: "100%" }} />
                </Col>
            </Row>
        </Card>

    </Row>
}

export default MainCard;
