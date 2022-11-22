import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image1 from "./jpg/2-lg.jpg";
import {Col, Container, Row} from "react-bootstrap";
import {faArrowRight, faCircleCheck, faLock, faScaleBalanced} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState,useContext} from "react";
import {AppContext} from "./Context";

const ArrowText = {
    "marginLeft": "1.1vw",
    "fontSize": "1.05vw"
}
const MainBulletPoints = {
    "marginTop": "2.0vw"
}
const BulletStyle = {"marginBottom": "0.2vw", "padding": "0"}

function MainCard() {
    const {setLayout} = useContext(AppContext);

    const mediaQuery = "(min-width: 1000px)"

    const [matches, setMatches] = useState(window.matchMedia(mediaQuery).matches)
    useEffect(() => {
        window
            .matchMedia(mediaQuery)
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    let MainCardHeading;

    MainCardHeading = <p style={{"fontSize": "1.75vw", "lineHeight": "1.3em"}}>
        Store your money safely in a digital wallet that only you hold the keys to
    </p>

    return <Container>

        <Card
            style={{
                backgroundColor: "#f3f3f3",
                marginTop: "0.5vw", marginBottom: "0.5vw",
                borderRadius: "1.0vw",
                overflow: "hidden"
            }}
            className="border border-0"
        >
            <Row>
                <Col className="col-8" style={{"overflow": "hidden"}}>
                <img src={Image1} style={{width: "100%", height: "100%"}}/>
            </Col>
                <Col className="col-4" style={{"display":"flex", "justifyContent":"center", "alignItems": "center"}}>
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
                    </div>
                </Col>

            </Row>
        </Card>

    </Container>
}

export default MainCard;
