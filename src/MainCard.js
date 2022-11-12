import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image1 from "./jpg/1.png";
import { Col, Container, Row } from "react-bootstrap";
function MainCard() {
  return (
    <Container>
      <Row>
        <Col className="col-12">
          <Card
            style={{ backgroundColor: "#f3f3f3", padding: "20px", marginTop: "20px",marginBottom: "20px" }}
            className="border border-0"
          >
            <Container>
              <Row>
                <Col className="col-4">
                  <Card.Body>
                    <Card.Text style={{ fontSize: "22px" }}>
                      Getting a Letter of Credit from a Swiss bank has never
                        been easier
                    </Card.Text>
                    <Button variant="outline-secondary">Learn More</Button>
                  </Card.Body>
                </Col>
                <Col>
                  <Card.Img variant="top" src={Image1} style={{borderRadius: "15px"}} />
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MainCard;
