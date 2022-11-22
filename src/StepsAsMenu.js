import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
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
  "width": "100%"
}

function GroupExample() {
  const {setLayout} = useContext(AppContext);

  return (
    <Container style={{
      marginBottom: "25px"
    }}>
          <Row>
            <Col>
              <Button variant="light" style={ArrowHeaderStyle} onClick={()=>(setLayout("INDIVIDUALS"))}>
                <FontAwesomeIcon icon={faUser} style={ArrowHeaderIcon}  /> For Individuals <FontAwesomeIcon style={ArrowHeaderSymbol} icon={faArrowRight} />
              </Button>



            </Col>
            <Col>
              <Button variant="light" style={ArrowHeaderStyle} onClick={()=>(setLayout("BUSINESSES"))}>
                <FontAwesomeIcon icon={faUserTie} style={ArrowHeaderIcon} /> For Businesses <FontAwesomeIcon style={ArrowHeaderSymbol} icon={faArrowRight} />
              </Button>



            </Col>
            <Col>
              <Button variant="light" style={ArrowHeaderStyle} onClick={()=>(setLayout("CREATORS"))}>
                <FontAwesomeIcon icon={faUserAstronaut} style={ArrowHeaderIcon} /> For Creators <FontAwesomeIcon style={ArrowHeaderSymbol} icon={faArrowRight} />
              </Button>

</Col>
          </Row>
    </Container>
  );
}

export default GroupExample;
