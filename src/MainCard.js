import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image1 from "./jpg/1.png";
import {Col, Container, Row} from "react-bootstrap";
import {faArrowRight, faCircleCheck, faLock, faScaleBalanced} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";

const ArrowText = {
    "marginLeft": "8px",
    "padding": "4px",
    "fontSize": "20px",
    "fontWeight": "400"
}
const MainBulletPoints = {
    "marginTop": "40px",
    "marginBottom": "40px",
}

function MainCard() {

    const mediaQuery = "(min-width: 1000px)"

    const [matches, setMatches] = useState(window.matchMedia(mediaQuery).matches)
    useEffect(() => {
        window
            .matchMedia(mediaQuery)
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    let MainCardHeading;

    if (matches) {
        MainCardHeading = <p style={{"fontSize": "30px", "lineHeight": "1.3em"}}>
            Pay and get paid faster, easier,
            and more reliably when you use Payco,
            the payment platform of the future
        </p>
    } else {
        MainCardHeading = <p style={{"fontSize": "20px", "lineHeight": "1em"}}>
            Pay and get paid faster, easier,
            and more reliably when you use Payco,
            the payment platform of the future
        </p>
    }

    return <Container>

        <Card
            style={{
                backgroundColor: "#f3f3f3", padding: "40px",
                marginTop: "20px", marginBottom: "20px",
                borderRadius: "20px"
            }}
            className="border border-0"
        >
            <Row>
                <Col className="col-4">
                    {MainCardHeading}

                    <div style={MainBulletPoints}>

                        <div style={{"marginBottom": "10px"}}>
                            <FontAwesomeIcon icon={faCircleCheck} style={{fontSize: "22px"}}/>
                            <span style={ArrowText}>Lower fees than anywhere else</span>
                        </div>

                        <div style={{"marginBottom": "10px"}}>
                            <FontAwesomeIcon icon={faLock} style={{fontSize: "25px"}}/>
                            <span style={ArrowText}>More secure than a bank</span>
                        </div>

                        <div style={{"marginBottom": "10px"}}>
                            <FontAwesomeIcon icon={faScaleBalanced} style={{fontSize: "18px"}}/>
                            <span style={ArrowText}>Protected by Swiss law</span>
                        </div>

                    </div>

                </Col>
                <Col className="col-8" style={{"overflow": "hidden"}}>
                    <img src={Image1} style={{borderRadius: "15px", maxWidth: "100%"}}/>
                </Col>
            </Row>
        </Card>

    </Container>
}

export default MainCard;
