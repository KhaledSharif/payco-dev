import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Video1 from "./mp4/iss.mp4"


import {Col, Container, Row} from "react-bootstrap";
import {useRef, useState} from "react";



const VideoContainerStyle = {

}

const VideoStyle = {
}
const CenterStyle = {"display": "flex", "alignItems": "center", "justifyContent": "center"}

function MainCard() {

    const VideoRef = useRef()

    const [IsPlaying, SetIsPlaying] = useState(false)

    const TogglePlay = () => {

        if (!IsPlaying) {
            VideoRef.current.play()
        }
        else {
            VideoRef.current.pause()
        }

        SetIsPlaying(!IsPlaying)
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
                minHeight: "90vh"
            }}
            className="border border-0"
        >

            <Row>
                <Col />

                <Col className="col-8" style={CenterStyle}>
                    <div style={VideoContainerStyle}>
                    <video ref={VideoRef} src={Video1} style={VideoStyle} width="100%" />
                    </div>
                </Col>

                <Col />

            </Row>

            <Row>
                <Col />
                <Col className="col-8" style={CenterStyle}>

                    <Button variant="light" onClick={() => {TogglePlay()}}>
                        {IsPlaying ? "Pause" : "Play"}
                    </Button>

                </Col>
                    <Col />
            </Row>



        </Card>

    </Container>
}

export default MainCard;
