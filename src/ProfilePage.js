import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

import CoverPhoto from "./jpg/earth.jpg";
import PP from "./jpg/pp1.jpg";

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
  faVoicemail,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";


import Image1 from "./jpg/opensea/1.webp";
import Image2 from "./jpg/opensea/2.webp";
import Image3 from "./jpg/opensea/3.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faWindowMaximize,
  faWindowMinimize,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { Col, Row } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";

const MerchSubRowStyle = {
  width: "100%",
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "1vw",
};

const MerchRowStyle = {
  marginTop: "10vh",
  gap: "6vh",
  paddingLeft: "2%",
  width: "100%",
  borderRadius: "1.0vw",
};

const TitleRowStyle = {
  zIndex: 10,
  width: "90%",
  margin: "-60vh 2vw 0 2vw",
  padding: "0.2vh 0 20vh 0",
  background:
    "linear-gradient(318deg, rgba(38,56,73,0.995) 0%, rgba(38,56,73,0.995) 10%, rgba(10,10,10,0.995) 100%)",
  borderRadius: "1.0vw",
};

const MerchImageStyle = {
  overflow: "hidden",
  borderRadius: "1.0vw",
  cursor: "pointer",
  // height: "50%",
  width: "20vw",
};

const VideoContainerStyle = {
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "85vh"
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

function MainCard() {
  const WindowedStyle = {
    backgroundColor: "rgba(0,0,0,1)",
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

  return (
    <Card style={WindowedStyle} className="border border-0">
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
            }}
          >
            <div style={VideoContainerStyle}>
              <img src={CoverPhoto} width="100%" />
            </div>
          </Row>

          <Row style={TitleRowStyle}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={PP}
                style={{
                  width: "10vw",
                  borderRadius: "2vw",
                  marginTop: "-10vh",
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "1vh",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "1.5vw",
                }}
              >
                Khaled Sharif
              </p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "1%",
              }}
            >
              <Button>
                <FontAwesomeIcon icon={faComment} />
              </Button>

              <Button>
                <FontAwesomeIcon icon={faHeart} />
              </Button>

              <Button>
                <FontAwesomeIcon icon={faMoneyBill} />
              </Button>
            </div>
            <br />
            <Row style={MerchRowStyle}>
              <Row style={MerchSubRowStyle}>
                <Col>
                  <img src={Image3} style={MerchImageStyle} />
                </Col>
                <Col>
                  <img src={Image1} style={MerchImageStyle} />
                </Col>
                <Col>
                  <img src={Image2} style={MerchImageStyle} />
                </Col>
                <Col>
                  <img src={Image2} style={MerchImageStyle} />
                </Col>
              </Row>

              <Row style={MerchSubRowStyle}>
                <Col>
                  <img src={Image3} style={MerchImageStyle} />
                </Col>
                <Col>
                  <img src={Image1} style={MerchImageStyle} />
                </Col>
                <Col>
                  <img src={Image2} style={MerchImageStyle} />
                </Col>
                <Col>
                  <img src={Image2} style={MerchImageStyle} />
                </Col>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default MainCard;
