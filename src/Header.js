import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { ethers } from "ethers";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faList,
  faStore,
  faArrowRight,
  faCirclePlus,
  faCircleChevronDown,
  faMagnifyingGlass,
  faShop,
  faUserAstronaut,
  faVideo,
  faCoins,
  faUserCircle,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "./Context";
import SmallLogo from "./jpg/smol-logo.png";

const ArrowHeaderSymbol = {
  fontSize: "0.8vw",
  color: "rgba(255,255,255,0.65)",
};

const SingularHeaderSymbol = {
  fontSize: "0.8vw",
  color: "rgba(255,255,255,0.65)",
};

const ButtonStyle = {
  fontSize: "0.9vw",
  borderRadius: "1.0vw",
  padding: "0 1vw 0 1vw",
  boxShadow:
    "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.05), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.01)",
};

function Header() {

 


  const { setLayout, ethAddress,  setEthAddress} = useContext(AppContext);

  const LoginWithMetamask = () => {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    provider.send("eth_requestAccounts", []).then(() => {
      const signer = provider.getSigner();
      signer.getAddress().then((address) => {
        setEthAddress(address);
      });
    });
  };

  return (
    <Container
      className="header"
      style={{
        minWidth: "unset",
        maxWidth: "unset",
        justifyContent: "center",
        display: "flex",
        padding: 0,
        margin: 0,
      }}
    >
      <Col className="col-10" style={{ padding: 0, margin: 0 }}>
        <Row
          style={{
            paddingTop: "1vh",
            paddingBottom: "1vh",
          }}
        >
          <Col
            style={{
              display: "flex",
              justifyContent: "left",
              padding: 0,
              gap: "0.25vw",
            }}
          >
            <Button
              size="lg"
              variant="light"
              style={ButtonStyle}
              className="border border-0"
            >
              <FontAwesomeIcon
                style={SingularHeaderSymbol}
                icon={faMagnifyingGlass}
              />
            </Button>
            <Button
              size="lg"
              variant="light"
              style={{
                fontSize: "0.9vw",
                borderRadius: "1.0vw",
                // padding: "0.4vw 0.8vw 0.4vw 0.8vw",
                boxShadow:
                  "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.05), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.01)",
              }}
              className="border border-0"
              onClick={() => setLayout("HOME")}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <img
                  src={SmallLogo}
                  style={{
                    height: "40px",
                    marginRight: "0.55vw",
                  }}
                />
                <p
                  style={{
                    fontSize: "1.0vw",
                    fontWeight: "500",
                    color: "rgba(255,255,255,0.75)",
                    padding: "0",
                    margin: 0,
                  }}
                >
                  Payco
                </p>
              </div>
            </Button>
          </Col>

          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              padding: 0,
              gap: "0.25vw",
            }}
          >
            <Button
              onClick={() => setLayout("IMAGE-EDITOR")}
              size="lg"
              variant="light"
              style={ButtonStyle}
              className="border border-0"
            >
              <FontAwesomeIcon style={SingularHeaderSymbol} icon={faImage} />
            </Button>

            <Button
              onClick={() => setLayout("VIDEO-EDITOR")}
              size="lg"
              variant="light"
              style={ButtonStyle}
              className="border border-0"
            >
              <FontAwesomeIcon style={SingularHeaderSymbol} icon={faVideo} />
            </Button>

            <Button
              onClick={() => setLayout("STORE-FRONT")}
              size="lg"
              variant="light"
              style={ButtonStyle}
              className="border border-0"
            >
              <FontAwesomeIcon
                style={SingularHeaderSymbol}
                icon={faUserAstronaut}
              />
            </Button>

            <Button
              onClick={() => setLayout("POS")}
              size="lg"
              variant="light"
              style={ButtonStyle}
              className="border border-0"
            >
              <FontAwesomeIcon style={SingularHeaderSymbol} icon={faShop} />
            </Button>

            <Button
              onClick={() => setLayout("ETHERS")}
              size="lg"
              variant="light"
              style={ButtonStyle}
              className="border border-0"
            >
              <FontAwesomeIcon style={SingularHeaderSymbol} icon={faCoins} />
            </Button>
          </Col>

          <Col
            style={{
              display: "flex",
              justifyContent: "right",
              padding: 0,
              gap: "0.25vw",
            }}
          >
            <Button
              size="lg"
              variant="light"
              style={ButtonStyle}
              className="border border-0"
            >
              EN
              <FontAwesomeIcon
                style={{ ...ArrowHeaderSymbol, marginLeft: "0.35vw" }}
                icon={faCircleChevronDown}
              />
            </Button>

            {ethAddress ? (
              <Button
                size="lg"
                variant="light"
                style={ButtonStyle}
                className="border border-0"
              >
                <FontAwesomeIcon
                  style={{ ...ArrowHeaderSymbol, marginRight: "0.35vw" }}
                  icon={faUserCircle}
                />
                {ethAddress.substring(0, 6)}
              </Button>
            ) : (
              <Button
              onClick={()=>(LoginWithMetamask())}
                size="lg"
                variant="light"
                style={ButtonStyle}
                className="border border-0"
              >
                Login{" "}
                <FontAwesomeIcon
                  style={ArrowHeaderSymbol}
                  icon={faArrowRight}
                />
              </Button>
            )}
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Header;
