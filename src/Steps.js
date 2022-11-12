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
        <Col className="col-12">
          <CardGroup style={{ fontSize: "18px" }}>
            <Card
              style={{ backgroundColor: "#f3f3f3", marginRight: "20px", borderRadius: "20px", padding: "10px"}}
              className="border border-0"
            >
              <Card.Img variant="top" src={Image2} style={{ borderRadius: "20px"}}  />
              <Card.Body>
                <Card.Text>Fill in a simple form, step by step</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{ backgroundColor: "#f3f3f3", marginRight: "20px", borderRadius: "20px", padding: "10px" }}
              className="border border-0"
            >
              <Card.Img variant="top" src={Image3} style={{ borderRadius: "20px"}} />
              <Card.Body>
                <Card.Text>Pay by wire transfer or cryptocurrency</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{ backgroundColor: "#f3f3f3", borderRadius: "20px", padding: "10px" }}
              className="border border-0"
            >
              <Card.Img variant="top" src={Image4} style={{ borderRadius: "20px"}} />

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
