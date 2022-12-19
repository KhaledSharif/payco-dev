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
    fontSize: "0.5vw",
    marginLeft: "0.35vw",
    marginRight: "0.35vw"
}

const ButtonStyle = {
    "fontSize": "0.5vw",
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
    fontSize: "0.6vw",
}

const PaymentStyle = {
    marginTop: "5vh",
    fontSize: "0.1vw",
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingTop: "1.0vh",
    paddingBottom: "1.0vh",

    borderRadius: "1.0vw",
    zIndex: "0",

}

const ArrowText = {
    marginLeft: "0.55vw",
    fontSize: "0.75vw"
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
    borderRadius: "0.25vw",
    overflow: "hidden",
    margin: "1.0vw"
}

const ProfileImageStyle = {
    height: "5.5vw"
}

const CenterStyle = {"marginTop": "2.0vh", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center"}

const BulletStyle = {"marginBottom": "0.5vw", "padding": "0"}

function MainCard() {

    const [transactionState, setTransactionState] = useState("COMPLETE")

    const resetTransaction = () => {
        setTransactionState("PENDING");
        window.setTimeout(() => {
            setTransactionState("COMPLETE")
        }, 2000)
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
                    marginRight: "0.25vw",

                }} icon={faRotateLeft}/>
            Redo </Button>
    }


    return <Container>

        <Card
            style={{
                backgroundColor: "#f3f3f3",
                paddingTop: "1.0vh", 
                paddingBottom: "1.0vh",
                margin: "0",
                zIndex: "1",
                borderRadius: "1.0vw",
                overflow: "hidden"
            }}
            className="border border-0"
        >

            <Row>

                <Col  style={CenterStyle}>

                    <div style={ImageContainerStyle}>
                        <img src={Image1} style={ProfileImageStyle}/>
                    </div>


                    <div>
                        <FontAwesomeIcon icon={faUserCircle} style={UserIconStyle}/>
                        <span style={UserNameStyle}>Khaled Sharif</span>
                    </div>


                </Col>



                <Col  style={CenterStyle}>

                    <div style={ImageContainerStyle}>
                        <img src={Image2} style={ProfileImageStyle}/>
                    </div>


                    <div>
                        <FontAwesomeIcon icon={faUserCircle} style={UserIconStyle}/>
                        <span style={UserNameStyle}>Elon Musk</span>
                    </div>

                </Col>


            </Row>


            <Row style={CenterStyle}>
                <Col className="col-8" style={{
                    zIndex: "-5",
                    position: "relative",
                    marginTop: "-12.5vw"

                }}>

                    {progressBar}

                </Col>
            </Row>

            <Row style={CenterStyle}>


                <Col  style={{
                    marginLeft: "1.25vw"
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
