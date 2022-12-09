import Card from "react-bootstrap/Card";
import Image1 from "./jpg/69-lg.png";
import {Col, Container, Row} from "react-bootstrap";
import {faArrowRight, faCircleCheck, faExclamationCircle, faLock, faScaleBalanced} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import EtherscanCard from "./EtherscanCard";

import AppStore from "./jpg/app-store.png";
import GooglePlay from "./jpg/google-play.png";

const ArrowText = {
    "marginLeft": "1.1vw",
    "fontSize": "1.05vw"
}
const MainBulletPoints = {
    "marginTop": "2.0vw"
}

const BulletStyle = {"marginBottom": "0.2vw", "padding": "0"}

function MainCard() {

    let MainCardHeading;


    MainCardHeading = <p style={{"fontSize": "1.75vw", "lineHeight": "1.3em"}}>
        Pay and get paid faster, easier,
        and more reliably when you use Payco,
        the payment platform of the future
    </p>


    return <Container>

        <Card
            style={{
                backgroundColor: "#f3f3f3",
                marginTop: "4.0vh", marginBottom: "1.0vh",
                borderRadius: "1.0vw",
                overflow: "hidden"
            }}
            className="border border-0"
        >
            <Row>
                <Col className="col-4" style={{
                    "display":"flex", "justifyContent":"center", "alignItems": "center"
                    }}>
                    <div style={{ "width": "75%"}}>

                        <div>
                            {MainCardHeading}
                        </div>

                        <div style={MainBulletPoints}>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faCircleCheck} style={{fontSize: "1.25vw"}}/>
                                <span style={ArrowText}>Lower fees than anywhere else</span>
                            </div>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faLock} style={{fontSize: "1.35vw"}}/>
                                <span style={ArrowText}>More secure than a bank</span>
                            </div>

                            <div style={BulletStyle}>
                                <FontAwesomeIcon icon={faScaleBalanced} style={{fontSize: "1.0vw"}}/>
                                <span style={ArrowText}>Protected by Swiss law</span>
                            </div>

                        </div>

                        <div style={MainBulletPoints}>

                            <img src={GooglePlay}  style={{

                                    width: "7.5vw"

                            }}/>

<img src={AppStore}  style={{
marginLeft: "1.0vw",
width: "7.0vw", 

}}/>

                        </div>
                    </div>
                </Col>
                <Col className="col-8" style={{"overflow": "hidden"}}>
                    <div style={{"position": "absolute", "marginLeft": "9vw", "marginTop": "7.5vw"}}>
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

                    <div style={{"position": "absolute", "marginLeft": "36.5vw", "marginTop": "15vw"}}>
                        <div style={{
                            backgroundColor: "rgba(0,0,0,0.4)",
                            padding: "1.0vw",
                            borderRadius: "1.0vw"
                        }}>
                            <FontAwesomeIcon icon={faExclamationCircle} style={{fontSize: "1.0vw", color: "white"}}/>
                            <span style={{
                                fontSize: "1.0vw", color: "white", marginLeft: "1.0vw"
                            }}>You received 420.69 USDC</span>
                        </div>
                    </div>

                    <img src={Image1} style={{width: "100%", height: "100%"}}/>
                </Col>
            </Row>
        </Card>

    </Container>
}

export default MainCard;
