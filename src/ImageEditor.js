import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

import Image2 from "./jpg/wl-1.jpg";
import Image3 from "./jpg/wl-2.webp";


import {
  faArrowRight,
  faUser,
  faCube,
  faShop,
  faUserAstronaut,
  faVideo,
  faCoins,
  faUserCircle,
  faInfoCircle,
  faInfo,
  faHistory,
  faHeart,
  faCartShopping,
  faFilm,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import Video1 from "./mp4/wl.mp4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faWindowMaximize,
  faWindowMinimize,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { Col, Container, Row } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
const SingularHeaderSymbol = {
  fontSize: "1vw",
  color: "rgba(0,0,0,0.45)",
};
const ButtonStyle = {
    minWidth: "2.5vw",
  paddingLeft: "1vw",
  paddingRight: "1vw",

  backgroundColor: "rgba(255,255,255,0.65)",
  fontSize: "0.85vw",
  borderRadius: "0.92vw",
  padding: "0.75vh 0.8vw 0.5vh 0.8vw",
  height: "4vh",
  boxShadow:
    "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.05), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.01)",
};

const VideoControlButtonStyle = {
  zIndex: 10,
  width: "6.5vw",
  height: "3.5vh",
  fontSize: "0.675vw",
  borderRadius: "0.75vw",
  padding: "0.25vw 0.15vw 0.25vw 0.15vw",
  boxShadow:
    "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.05), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.01)",
};

const MerchRowStyle = {
  width: "91%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  zIndex: 15,
  margin: "-2vh 2vw 0 2vw",
  padding: "12vh 0 12vh 0",
  gap: "6vw",
  background:
  "linear-gradient(318deg, rgba(38,56,73,1) 0%, rgba(38,56,73,1) 10%, rgba(10,10,10,1) 100%)",
  borderRadius: "1.0vw",
};

const TitleRowStyle = {
  zIndex: 10,
  width: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  margin: "-0.2vh 2vw 0 2vw",
  padding: "0.2vh 0 20vh 0",
  gap: "6vw",
  background:
    "linear-gradient(318deg, rgba(38,56,73,1) 0%, rgba(38,56,73,1) 10%, rgba(10,10,10,1) 100%)",
  borderRadius: "1.0vw",
};

const MerchImageStyle = {
  overflow: "hidden",
  borderRadius: "1.0vw",
  cursor: "pointer",
  height: "32vh",
  width: "30vw"
};

const VideoContainerStyle = {
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "86.5vh",
};

const FSContainerStyle = {
  width: "100vw",
  height: "100vh",
  zIndex: "1",

  margin: "-4% 0 0 -9%",

  padding: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "black",
};

const VideoStyle = {};
const FullscreenVideoStyle = {};

const MerchHeaderStyle = {
  borderRadius: "1.0vw",
  color: "rgba(0,0,0,0.9)",
  border: "none",
  padding: "0.75vw",
  width: "100%",

  backgroundColor: "rgba(250,250,255,0.975)",

  marginTop: "1.0vh",

  fontSize: "1.0vw",
  fontWeight: "400",

  marginBottom: "1.0vw",
  boxShadow:
    "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.01), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.05)",
};

const ArrowHeaderStyle = {
  borderRadius: "1.0vw",
  color: "rgba(0,0,0,0.9)",
  border: "none",
  padding: "0.75vw",
  width: "100%",

  marginTop: "1.0vh",

  fontSize: "1.0vw",
  fontWeight: "400",

  marginBottom: "1.0vw",
  boxShadow:
    "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.01), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.05)",
};

const ArrowHeaderSymbol = {
  marginRight: "0.75vw",
  fontSize: "1vw",
  color: "rgba(0,0,0,0.45)",
};

const CenterStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  margin: 0,
  padding: 0,
  gap: "0.5vw",
};

const CenterStyleCol = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: 0,
  padding: 0,
};

const FSProgressBarStyle = {
  height: "1.0vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "-0.5vh",
  marginLeft: "-10vw",
  zIndex: "10",
  width: "101vw",
  borderRadius: 0,
  padding: 0,
};

const WinProgressBarStyle = {
  width: "100%",
  height: "1.0vh",

  display: "flex",
  justifyContent: "center",
  marginTop: "0vh",
};

const WinRowStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "1.0vh",
};

const FSRowStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "-6vh",
  marginLeft: "-8vw",
};

function MainCard() {
  const VideoRef = useRef();

  const [IsUIHidden, SetUIHidden] = useState(false);

  const [IsPlaying, SetIsPlaying] = useState(false);

  const [IsFullscreen, SetIsFullscreen] = useState(false);

  const [CurrentTime, SetCurrentTime] = useState(0);

  const [TotalTime, SetTotalTime] = useState(0);

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
      VideoRef.current.play();
    } else {
      VideoRef.current.pause();
    }

    SetIsPlaying(!IsPlaying);
  };

  const ToggleFullscreen = () => {
    if (!IsFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }

    SetIsFullscreen(!IsFullscreen);

    setTimeout(() => {
      SetUIHidden(true);
    }, 4000);
  };

  const ScrubVideo = ({ pct }) => {
    VideoRef.current.currentTime = (pct / 100.0) * TotalTime;
    SetCurrentTime(parseFloat(VideoRef.current.currentTime));
  };

  const WindowedStyle = {
    backgroundColor: "rgba(0,0,0,0.9)",
    marginTop: "0",
    marginBottom: "1.0vh",
    padding: "0 0 25vh 0vw",
    borderRadius: "1.0vw",
    overflow: "hidden",
  };

  const FullscreenStyle = {
    backgroundColor: "unset",

    margin: "0",
    padding: "0",
    height: "200vh",
    width: "100vw",
  };

  let Progress = -1;
  if (CurrentTime > 0 && TotalTime > 0) {
    Progress = parseFloat((CurrentTime / TotalTime) * 100);
  }

  return (
    <Card
      style={IsFullscreen ? FullscreenStyle : WindowedStyle}
      className="border border-0"
    >
      <Row>
        <Col style={CenterStyleCol}>
          <Row
            style={{
              width: "100%",
              padding: 0,
              marginBottom: "0",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.9)",
              zIndex: IsUIHidden ? "11" : "9",
            }}
          >
            <div style={IsFullscreen ? FSContainerStyle : VideoContainerStyle}>
              {IsFullscreen ? (
                <video
                  ref={VideoRef}
                  src={Video1}
                  style={FullscreenVideoStyle}
                  height="100%"
                />
              ) : (
                <video
                  ref={VideoRef}
                  src={Video1}
                  style={VideoStyle}
                  height="100%"
                />
              )}
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

                let x = ((e.clientX - bounds.left) / bounds.width) * 100;
                ScrubVideo({ pct: x });
              }}
              style={{
                height: "0.75vh",
                padding: 0,
                backgroundColor: "rgba(255,255,255,0.4)",
              }}
              variant="success"
              animated={false}
              now={Progress}
            />
          </Row>

          <Row style={TitleRowStyle}>
            <div
              style={{
                width: "40%",
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                gap: "0.5vw",
                marginTop: "1.0vh",
                padding: 0,
              }}
            >
                <Button
                onClick={() => TogglePlay()}
              >
                <FontAwesomeIcon
                  
                  icon={IsPlaying ? faPause : faPlay}
                />
              </Button>
              <Button                >
                <FontAwesomeIcon icon={faFilm} />
                <span>White Lotus: Behind the Scenes</span>
              </Button>

              <Button>
                <FontAwesomeIcon icon={faUser} />
                <span>HBO</span>
              </Button>
            </div>

            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "right",
                justifyContent: "right",
                gap: "0.35vw",
                marginTop: "1.0vh",
                padding: 0,
              }}
            >
              <Button
              >
                <FontAwesomeIcon  icon={faHeart} />
              </Button>

              <Button
              >
                <FontAwesomeIcon
                  
                  icon={faComment}
                />
              </Button>

              <Button
                style={{width: "10vw", display: "flex"}}
              >
                <div style={{
                    width: "2vw"
                }}>
                <FontAwesomeIcon  icon={faClock} />
                </div>

                <div
                
                style={{
                    width: "6vw"
                }}
                
                >
                {parseInt(Math.round(CurrentTime)).toString().padStart(2, "0")}s
                / {parseInt(Math.round(TotalTime)).toString().padStart(2, "0")}s
                </div>
              </Button>
            </div>
          </Row>


          <Row style={MerchRowStyle} className="merch-row">

            <Col className="col-4">
              <div style={MerchImageStyle}>
              <img src={Image2} width="100%" />
              </div>
              <div style={CenterStyle}>
              <Button >
              <FontAwesomeIcon
                  icon={faCartShopping}
                />
              White Lotus Season One
                <FontAwesomeIcon
                  icon={faArrowRight}
                />
              </Button>
              </div>
            </Col>
            <Col className="col-4">
            <div style={MerchImageStyle}>
              <img src={Image3} width="100%" />
              </div>
              <div style={CenterStyle}>
              <Button >
              <FontAwesomeIcon
                  icon={faCartShopping}
                />
                White Lotus Season Two
                <FontAwesomeIcon
                  icon={faArrowRight}
                />
              </Button>
              </div>
            </Col>
          </Row>

        </Col>
      </Row>
    </Card>
  );
}

export default MainCard;
