import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Image1 from "./jpg/pp1.jpg";
import Image2 from "./jpg/pp2.jpg";


import {Col, Container, Row, Spinner} from "react-bootstrap";
import {
    faUserCircle,
    faRotateLeft,
    faCoins,
    faArrowRight,
    faCircleCheck,
    faLock,
    faScaleBalanced
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

const UserIconStyle = {
    fontSize: "1.0vw",
    marginLeft: "0.35vw",
    marginRight: "0.35vw"
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

const ArrowHeaderSymbol = {
    "marginLeft": "1.3vw",
    "marginRight": "1.3vw",

    "fontSize": "0.9vw",
    "color": "rgba(0,0,0,0.25)"
}

const UserNameStyle = {
    fontSize: "1.0vw",
}

const PaymentStyle = {
    margin: "0.5vw 0.5vw 0.25vw 0.25vw",
    fontSize: "1.0vw",
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: "1.0vw",
    borderRadius: "1.0vw",
    zIndex: "0",

}

const ArrowText = {
    marginLeft: "1.1vw",
    fontSize: "1.05vw"
}
const MainBulletPoints = {
    marginTop: "2.0vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const ImageContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1.0vw",
    overflow: "hidden",
    margin: "1.0vw"
}

const ProfileImageStyle = {
    borderRadius: "1.0vw",
    height: "20.0vh"
}

const CenterStyle = {"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center"}

const BulletStyle = {"marginBottom": "0.5vw", "padding": "0"}

function MainCard() {

    const [transactionState, setTransactionState] = useState("COMPLETE")

    const resetTransaction = () => {
        setTransactionState("PENDING");
        window.setTimeout(() => {
            setTransactionState("COMPLETE")
        }, 3000)
    }

    let progressBar;
    if (transactionState === "PENDING") {
        progressBar = <ProgressBar variant="none" animated={true} now={50}/>
    } else if (transactionState === "COMPLETE") {
        progressBar = <ProgressBar variant="success" animated={false} now={100}/>
    }

    let transactionDetails;

    if (transactionState === "PENDING") {
        transactionDetails = <div style={BulletStyle}>
            <Spinner animation="border" style={{fontSize: "1.25vw", color: "orange"}}/>
            <span style={ArrowText}>Transaction in progress, please wait</span>
        </div>
    } else if (transactionState === "COMPLETE") {
        transactionDetails = <div>
            <div style={BulletStyle}>
                <FontAwesomeIcon icon={faCircleCheck} style={{fontSize: "1.25vw", color: "green"}}/>
                <span style={ArrowText}>Transaction completed successfully</span>
            </div>
            <div style={BulletStyle}>
                <FontAwesomeIcon icon={faCoins} style={{fontSize: "1.0vw"}}/>
                <span style={ArrowText}>Khaled sent 420.69 USDC to Elon</span>
            </div>
        </div>
    }

    let redoButton;
    if (transactionState === "COMPLETE") {
        redoButton = <Button
            onClick={() => (resetTransaction())}
            size="lg" variant="light" style={ButtonStyle} className="border border-0">
            <FontAwesomeIcon
                style={{
                    marginRight: "1.0vw",

                }} icon={faRotateLeft}/>
            Redo </Button>
    }


    return <Container>

        <Card
            style={{
                backgroundColor: "#f3f3f3",
                marginTop: "0", marginBottom: "1.0vh",
                paddingTop: "15.0vh",
                paddingBottom: "15.0vh",
                paddingLeft: "1.0vw",
                paddingRight: "1.0vw",
                zIndex: "1",
                borderRadius: "1.0vw",
                overflow: "hidden"
            }}
            className="border border-0"
        >

            <Row>
                <Col></Col>

                <Col className="col-2" style={CenterStyle}>

                    <div style={ImageContainerStyle}>
                        <img src={Image1} style={ProfileImageStyle}/>
                    </div>


                    <div>
                        <FontAwesomeIcon icon={faUserCircle} style={UserIconStyle}/>
                        <span style={UserNameStyle}>Khaled Sharif</span>
                    </div>


                </Col>

                <Col className="col-4" style={{display: "flex", justifyContent: "center", height: "10%"}}>
                    <div style={PaymentStyle}><FontAwesomeIcon
                        style={ArrowHeaderSymbol} icon={faArrowRight}/>
                        $420.69<FontAwesomeIcon
                            style={ArrowHeaderSymbol} icon={faArrowRight}/>
                    </div>


                </Col>

                <Col className="col-2" style={CenterStyle}>

                    <div style={ImageContainerStyle}>
                        <img src={Image2} style={ProfileImageStyle}/>
                    </div>


                    <div>
                        <FontAwesomeIcon icon={faUserCircle} style={UserIconStyle}/>
                        <span style={UserNameStyle}>Elon Musk</span>
                    </div>

                </Col>

                <Col></Col>

            </Row>


            <Row style={CenterStyle}>
                <Col className="col-8" style={{
                    zIndex: "-5",
                    marginTop: "-28vh",
                    paddingLeft: "11vw",
                    paddingRight: "11vw",
                    paddingTop: "2.0vh",
                    paddingBottom: "2.0vh",


                }}>

                    {progressBar}

                </Col>
            </Row>

            <Row style={CenterStyle}>


                <Col className="col-4" style={{

                    paddingLeft: "2.75vw",
                    paddingRight: "2.75vw",
                    paddingTop: "8.0vh",
                    paddingBottom: "1.0vh",

                }}>

                    {transactionDetails}


                </Col>


            </Row>
            <Row style={CenterStyle}>
                <Col style={CenterStyle} className="col-4">
                    <div>
                        {redoButton}
                    </div>
                </Col>
            </Row>

        </Card>

    </Container>
}

export default MainCard;
