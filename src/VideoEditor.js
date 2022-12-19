import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from 'react-bootstrap/ProgressBar';

import Image1 from "./jpg/dior/01.webp"
import Image2 from "./jpg/dior/02.webp"
import Image3 from "./jpg/dior/04.webp"
import Image4 from "./jpg/dior/03.jpg"


import Splash1 from "./jpg/dior/splash.jpg"


import {
    faArrowRight,
    faUser,
    faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import Video1 from "./mp4/anna.mp4"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlay, faPause, faWindowMaximize, faWindowMinimize, faClock
} from "@fortawesome/free-solid-svg-icons"

import { Col, Container, Row } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";


const VideoControlButtonStyle = {
    "zIndex": 10,
    "width": "6.5vw",
    "height": "3.5vh",
    "fontSize": "0.675vw",
    "borderRadius": "0.75vw",
    "padding": "0.25vw 0.15vw 0.25vw 0.15vw",
    "boxShadow": "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.05), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.01)"
}

const MerchRowStyle = {
    "width": "94%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "margin": "1.25vh 2vw 0 2vw",
    "padding": "8vh 0 20vh 0",
    "gap": "6vw",
    "borderTop": "0.35vh solid rgba(0,0,0,0.1)",
    "background": "radial-gradient(circle, rgba(22,26,41,0.75) 0%, rgba(38,56,73,1) 10%, rgba(10,10,10,0.75) 100%)",
    "borderRadius": "1.0vw"
}

const MerchImageStyle = {
    "borderRadius": "1.0vw",
    "cursor": "pointer"
}

const VideoContainerStyle = {
    padding: 0, margin: 0, display: "flex", alignItems: "center", justifyContent: "center", height: "80vh"
}

const FSContainerStyle = {
    width: "100vw",
    height: "100vh",
    zIndex: "1",

    margin: "-4% 0 0 -9%",

    padding: 0,

    display: "flex", alignItems: "center", justifyContent: "center",
    backgroundColor: "black"
}

const VideoStyle = {}
const FullscreenVideoStyle = {}

const MerchHeaderStyle = {

    "borderRadius": "1.0vw",
    "color": "rgba(0,0,0,0.9)",
    "border": "none",
    "padding": "0.75vw",
    "width": "100%",

    "backgroundColor": "rgba(250,250,255,0.975)",

    "marginTop": "1.0vh",

    "fontSize": "1.0vw",
    "fontWeight": "400",

    "marginBottom": "1.0vw",
    "boxShadow": "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.01), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.05)"
}

const ArrowHeaderStyle = {

    "borderRadius": "1.0vw",
    "color": "rgba(0,0,0,0.9)",
    "border": "none",
    "padding": "0.75vw",
    "width": "100%",

    "marginTop": "1.0vh",

    "fontSize": "1.0vw",
    "fontWeight": "400",

    "marginBottom": "1.0vw",
    "boxShadow": "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.01), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.05)"
}

const ArrowHeaderSymbol = {
    "marginLeft": "1.0vw",
    "fontSize": "1.0vw",
    "color": "rgba(0,0,0,0.25)"
}

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

const FSProgressBarStyle = {
    height: "1.0vh",
    width: "100%",
    display: "flex", justifyContent: "center",
    marginTop: "-0.5vh",
    marginLeft: "-10vw",
    zIndex: "10",
    width: "101vw",
    borderRadius: 0,
    padding: 0
}

const WinProgressBarStyle = {
    width: "100%",
    height: "1.0vh",

    display: "flex", justifyContent: "center",
    marginTop: "0vh"
}

const WinRowStyle = {
    width: "100%",
    display: "flex", justifyContent: "center",
    marginTop: "1.0vh"
}

const FSRowStyle = {
    width: "100%",
    display: "flex", justifyContent: "center",
    marginTop: "-6vh",
    marginLeft: "-8vw",

}


function MainCard() {

    const VideoRef = useRef()

    const [IsUIHidden, SetUIHidden] = useState(false)

    const [IsPlaying, SetIsPlaying] = useState(false)

    const [IsFullscreen, SetIsFullscreen] = useState(false)

    const [CurrentTime, SetCurrentTime] = useState(0)

    const [TotalTime, SetTotalTime] = useState(0)

    let TimeoutID;


    useEffect(() => {
        const interval = setInterval(() => {
            if (VideoRef.current) {
                SetCurrentTime(parseFloat(VideoRef.current.currentTime));

                let tt = parseFloat(VideoRef.current.duration);
                if (tt !== TotalTime) {
                    SetTotalTime(tt);
                }

            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

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

        setTimeout(() => {
            SetUIHidden(true)
        }, 4000);
    }

    const ScrubVideo = ({ pct }) => {
        VideoRef.current.currentTime = pct / 100.0 * TotalTime;
        SetCurrentTime(parseFloat(VideoRef.current.currentTime));
    }

    const WindowedStyle = {
        backgroundColor: "rgba(0,0,0,0.9)",
        marginTop: "0",
        marginBottom: "1.0vh",
        padding: "0 0 25vh 0vw",
        borderRadius: "1.0vw",
        overflow: "hidden",
    }

    const FullscreenStyle = {
        backgroundColor: "unset",

        margin: "0",
        padding: "0",
        height: "200vh",
        width: "100vw",
    }



    let Progress = -1;
    if (CurrentTime > 0 && TotalTime > 0) { Progress = parseFloat(CurrentTime / TotalTime * 100); }

    return <Card
            style={IsFullscreen ? FullscreenStyle : WindowedStyle}
            className="border border-0"
        >

            <Row>


                <Col style={CenterStyleCol}>
                    <Row style={{

                        width: "100%",
                        padding: 0,
                        marginBottom: "0",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "rgba(0,0,0,0.9)",
                        zIndex: IsUIHidden ? "11" : "9"

                    }}>
                        <div style={IsFullscreen ? FSContainerStyle : VideoContainerStyle}>
                            {
                                IsFullscreen ?

                                    <video ref={VideoRef} src={Video1} style={FullscreenVideoStyle} height="100%" /> :

                                    <video ref={VideoRef} src={Video1} style={VideoStyle} height="100%" />
                            }
                        </div>
                    </Row>

                    <Row style={IsFullscreen ? FSProgressBarStyle : WinProgressBarStyle}>

                        <ProgressBar
                            size="lg"

                            onClick={(e) => {

                                let target = e.target;

                                if (e.target.role && e.target.role === "progressbar") {
                                    target = e.target.parentElement;
                                }

                                let bounds = target.getBoundingClientRect();


                                let x = (e.clientX - bounds.left) / bounds.width * 100;
                                ScrubVideo({ pct: x })


                            }}
                            style={{ height: "0.75vh", padding: 0, backgroundColor: "rgba(255,255,255,0.4)" }} variant="success" animated={false} now={
                                Progress
                            } />

                    </Row>

                    <Row style={IsFullscreen ? FSRowStyle : WinRowStyle}>
                        <Col
                            className="col-3"
                            style={{
                                display: "flex",
                                justifyContent: "left",
                            }}

                        >
                            <Button style={VideoControlButtonStyle} variant="light" onClick={() => TogglePlay()}>

                                {

                                    IsPlaying

                                        ? <div style={CenterStyle}><FontAwesomeIcon icon={faPause} />Pause</div>

                                        : <div style={CenterStyle}><FontAwesomeIcon icon={faPlay} />Play</div>

                                }
                            </Button>
                        </Col>
                        <Col className="col-4" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>


                        </Col>
                        <Col className="col-3" style={{
                            display: "flex",
                            justifyContent: "right",
                            gap: "0.5vw"
                        }}>
                            <Button style={VideoControlButtonStyle} variant="light">

                                <div style={CenterStyle}><FontAwesomeIcon icon={faClock} />{

                                    parseInt(Math.round(CurrentTime)).toString().padStart(2, '0')


                                }s / {


                                        parseInt(Math.round(TotalTime)).toString().padStart(2, '0')



                                    }s</div>
                            </Button>
                            {/* <Button style={VideoControlButtonStyle} variant="light" onClick={() => ToggleFullscreen()}>
                                {
                                    IsFullscreen

                                        ? <div style={CenterStyle}><FontAwesomeIcon icon={faWindowMinimize} />Windowed</div>

                                        : <div style={CenterStyle}><FontAwesomeIcon icon={faWindowMaximize} />Fullscreen</div>

                                }
                            </Button> */}
                        </Col>
                    </Row>

                    <Row style={MerchRowStyle}>

                        <Col className="col-3">
                            <img src={Image3} style={MerchImageStyle} width="100%" />
                            <Button style={ArrowHeaderStyle}>
                                Dior Prestige Set
                                <FontAwesomeIcon
                                    style={ArrowHeaderSymbol} icon={faArrowRight} />
                            </Button>
                        </Col>
                        <Col className="col-3">
                            <img src={Image1} style={MerchImageStyle} width="100%" />
                            <Button style={ArrowHeaderStyle}>
                                Sauvage Elixir For Men
                                <FontAwesomeIcon
                                    style={ArrowHeaderSymbol} icon={faArrowRight} />
                            </Button>
                        </Col>
                        <Col className="col-3">
                            <img src={Image2} style={MerchImageStyle} width="100%" />
                            <Button style={ArrowHeaderStyle}>
                                Miss Dior for Women
                                <FontAwesomeIcon
                                    style={ArrowHeaderSymbol} icon={faArrowRight} />
                            </Button>
                        </Col>

                    </Row>

                    <Row style={CenterStyle}>

                        <Col style={{
                            marginLeft: "2vw",
                            marginRight: "2vw",
                            marginTop: "-5vh",
                            marginBottom: "0vh",
                            zIndex: "12",
                            boxShadow: "0 1vh 2.5vw 1vh rgba(0, 0, 0, 0.25)"

                        }}>
                            <img src={Splash1} style={{
                                borderRadius: "1.0vw"
                            }} width="100%" />

                            <Row style={CenterStyle}>
                                <div style={{
                                    width: "21.0vw",
                                    marginTop: "-9vh"
                                }}>
                                    <Button style={MerchHeaderStyle}>
                                        Christian Dior Paris Set of 10
                                        <FontAwesomeIcon style={ArrowHeaderSymbol} icon={faArrowRight} />
                                    </Button>
                                </div>
                            </Row>
                        </Col>

                    </Row>

                    <Row style={{
                        "width": "94%",
                        "display": "flex",

                        "alignItems": "center",
                        "justifyContent": "center",
                        "flexDirection": "row",
                        "margin": "-4vh 2vw 0 2vw",
                        "padding": "25vh 0 25vh 0",
                        "gap": "6.0vh",
                        "background": "linear-gradient(318deg, rgba(38,56,73,1) 0%, rgba(38,56,73,1) 10%, rgba(10,10,10,1) 100%)",
                        "borderRadius": "1.0vw"
                    }}>

                        <Row style={{
                            "width": "100%",
                            "display": "flex",

                            "alignItems": "center",
                            "justifyContent": "center",
                            "flexDirection": "row",
                            "gap": "2vw"
                        }}>

                            <Col className="col-3">
                                <img src={Image3} style={MerchImageStyle} width="100%" />
                            </Col>
                            <Col className="col-3">
                                <img src={Image1} style={MerchImageStyle} width="100%" />
                            </Col>
                            <Col className="col-3">
                                <img src={Image2} style={MerchImageStyle} width="100%" />
                            </Col>

                        </Row>

                        <Row style={{
                            "width": "100%",
                            "display": "flex",

                            "alignItems": "center",
                            "justifyContent": "center",
                            "flexDirection": "row",
                            "gap": "2vw"
                        }}>

                            <Col className="col-3">
                                <img src={Image4} style={MerchImageStyle} width="100%" />
                            </Col>
                            <Col className="col-3">
                                <img src={Image3} style={MerchImageStyle} width="100%" />
                            </Col>
                            <Col className="col-3">
                                <img src={Image4} style={MerchImageStyle} width="100%" />
                            </Col>

                        </Row>

                    </Row>

                </Col>




            </Row>


        </Card>

}

export default MainCard;
