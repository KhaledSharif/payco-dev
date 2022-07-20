import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image2 from "./jpg/2.png";
import Image3 from "./jpg/3.png";
import Image4 from "./jpg/4.png";

function GroupExample() {
  return (
    <Container>
      <Row>
        <Col className="col-8">
          <CardGroup>
            <Card
              style={{ backgroundColor: "#f3f3f3" }}
              className="border border-0"
            >
              <Card.Img variant="top" src={Image2} style={{ width: "300px" }} />
              <Card.Body>
                <Card.Text>Fill in a simple form, Step by step</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{ backgroundColor: "#f3f3f3" }}
              className="border border-0"
            >
              <Card.Img variant="top" src={Image3} style={{ width: "300px" }} />
              <Card.Body>
                <Card.Text>Pay by wire transfer or cryptocurrency</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{ backgroundColor: "#f3f3f3" }}
              className="border border-0"
            >
              <Card.Img variant="top" src={Image4} style={{ width: "300px" }} />

              <Card.Body>
                <Card.Text>Receive a confirmed letter of credit</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default GroupExample;
