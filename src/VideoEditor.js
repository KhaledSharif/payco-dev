import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// import Video1 from "./mp4/lou.mp4"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPlay, faPause, faWindowMaximize, faWindowMinimize
} from "@fortawesome/free-solid-svg-icons"

import {Col, Container, Row} from "react-bootstrap";
import {useRef, useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";


const VideoContainerStyle = {
    padding: 0, margin: 0
}

const VideoStyle = {}
const CenterStyle = {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "margin": 0,
    "padding": 0,
    "gap": "0.5vw"
}
const CenterStyleCol = {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column",
    "margin": 0,
    "padding": 0
}


const ShoppingCart = () => {
    const item = (key) => <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        key={key}
    >
        <div className="ms-2 me-auto">
            <div className="fw-bold">Chocolate Cake</div>
            <p>Small Slice</p>
        </div>
    </ListGroup.Item>

    const items = [1, 2, 3, 4, 5].map((x, i) => item(i))

    return (
        <ListGroup as="ol" style={{
            fontSize: "0.75vw"
        }}>
            {items}

        </ListGroup>
    );
}


function MainCard() {

    const VideoRef = useRef()

    const [IsPlaying, SetIsPlaying] = useState(false)

    const [IsFullscreen, SetIsFullscreen] = useState(false)

    const TogglePlay = () => {

        if (!IsPlaying) {
            VideoRef.current.play()
        } else {
            VideoRef.current.pause()
        }

        SetIsPlaying(!IsPlaying)
    }

    const ToggleFullscreen = () => {
        if (!IsFullscreen) {
            document.documentElement.requestFullscreen()
        } else {
            document.exitFullscreen()
        }

        SetIsFullscreen(!IsFullscreen);
    }

    return <Container>

        <Card
            style={{
                backgroundColor: "rgba(0,0,25,0.45)",
                marginTop: "0",
                marginBottom: "1.0vh",
                padding: "0",
                borderRadius: "1.0vw",
                overflow: "hidden",
                height: "100vh"
            }}
            className="border border-0"
        >

            <Row style={CenterStyle}>
                {
                    IsFullscreen ? null : <Col className="col-2">
                        <ShoppingCart/>

                    </Col>
                }

                <Col style={CenterStyleCol}>
                    <Row style={{width:"100%", padding: 0, margin: 0}}>
                        <div style={VideoContainerStyle}>
                            {/* <video ref={VideoRef} src={Video1} style={VideoStyle} width="100%"/> */}
                        </div>
                    </Row>

                    <Row style={CenterStyle}>
                        <Col className="col-4">
                            <Button variant="light" onClick={() => TogglePlay()}>

                                {

                                    IsPlaying

                                        ? <div style={CenterStyle}><FontAwesomeIcon icon={faPause}/>Pause</div>

                                        : <div style={CenterStyle}><FontAwesomeIcon icon={faPlay}/>Play</div>

                                }
                            </Button>
                        </Col>
                        <Col className="col-4">
                            <Button variant="light" onClick={() => ToggleFullscreen()}>
                                {
                                    IsFullscreen

                                    ? <div style={CenterStyle}><FontAwesomeIcon icon={faWindowMinimize}/>Windowed</div>

                                    : <div style={CenterStyle}><FontAwesomeIcon icon={faWindowMaximize}/>Fullscreen</div>

                                }
                            </Button></Col>
                    </Row>
                </Col>
                {
                    IsFullscreen ? null : <Col className="col-2">
                        <ShoppingCart/>

                    </Col>
                }


            </Row>


        </Card>

    </Container>
}

export default MainCard;
