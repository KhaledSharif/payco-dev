import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image2 from "./jpg/2.png";
import Image3 from "./jpg/3.png";
import Image4 from "./jpg/4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser, faUserTie, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {AppContext} from "./Context";

const ArrowHeaderIcon = {
  "marginRight": "8px"
}

const ArrowHeaderSymbol = {
  "marginLeft": "8px",
  "fontSize": "15px",
  "color": "grey"
}

const ImageContainer = {
  "maxHeight": "315px",
  "borderRadius": "20px",
  "overflow": "hidden"
}

const TextContainer = {
  "padding": "20px"
}

const ArrowHeaderStyle = {
  "borderRadius": "20px",
  "color": "black",
  "border": "none",
  "padding": "10px",
  "paddingLeft": "20px",
  "marginBottom": "10px",
  "width": "100%"
}

function GroupExample() {
  const {setLayout} = useContext(AppContext);

  return (
    <Container style={{
      marginBottom: "25px",
      maxWidth:"unset"
    }}>
          <CardGroup style={{ fontSize: "18px" }}>
            <Card
              style={{ backgroundColor: "#f3f3f3", marginRight: "20px", borderRadius: "20px", padding: "10px"}}
              className="border border-0"
            >
              <Button variant="light" style={ArrowHeaderStyle} onClick={()=>(setLayout("INDIVIDUALS"))}>
                <FontAwesomeIcon icon={faUser} style={ArrowHeaderIcon}  /> For Individuals <FontAwesomeIcon style={ArrowHeaderSymbol} icon={faArrowRight} />
              </Button>

              <div style={ImageContainer}>
               <img src={Image2} style={{ width: "100%"}}  />
              </div>
              <div style={TextContainer}>
                Store your money safely in a digital wallet that only you hold the keys to
              </div>

            </Card>
            <Card
              style={{ backgroundColor: "#f3f3f3", marginRight: "20px", borderRadius: "20px", padding: "10px" }}
              className="border border-0"
            >
              <Button variant="light" style={ArrowHeaderStyle} onClick={()=>(setLayout("BUSINESSES"))}>
                <FontAwesomeIcon icon={faUserTie} style={ArrowHeaderIcon} /> For Businesses <FontAwesomeIcon style={ArrowHeaderSymbol} icon={faArrowRight} />
              </Button>

              <div style={ImageContainer}>
                <img src={Image3} style={{ width: "100%"}}  />
              </div>
              <div style={TextContainer}>
                Easily accept fiat and crypto currencies, both in-store and online
              </div>

            </Card>
            <Card
              style={{ backgroundColor: "#f3f3f3", borderRadius: "20px", padding: "10px" }}
              className="border border-0"
            >
              <Button variant="light" style={ArrowHeaderStyle} onClick={()=>(setLayout("CREATORS"))}>
                <FontAwesomeIcon icon={faUserAstronaut} style={ArrowHeaderIcon} /> For Creators <FontAwesomeIcon style={ArrowHeaderSymbol} icon={faArrowRight} />
              </Button>

              <div style={ImageContainer}>
                <img src={Image4} style={{ width: "100%"}}  />
              </div>
              <div style={TextContainer}>
                Sell your artistic creations in a marketplace that empowers everyone
              </div>

            </Card>
          </CardGroup>
    </Container>
  );
}

export default GroupExample;
