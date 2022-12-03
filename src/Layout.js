import React, {useContext, useState} from "react";
import Header from "./Header";
import Steps from "./Steps"
import MainCard from "./MainCard";
import {AppContext} from "./Context";
import ServiceInfoCard from "./ServiceInfoCard";
import BusinessInfoCard from "./BusinessInfoCard";
import {Container, Col,Row} from "react-bootstrap";
import IndividualInfoCard from "./IndividualInfoCard";
import EtherscanCard from "./EtherscanCard";
import VideoEditor from "./VideoEditor";
import POS from "./POS";

const ContainerStyle = {minWidth:"100vw", display: "flex", "justify-content": "center"};

function Layout() {

    const {layout} = useContext(AppContext);

    let layoutInternals;

    if (layout === "HOME") {
        layoutInternals = <Container style={ContainerStyle}>
            <Col className="col-11">
            <Row>
            <MainCard/>
            </Row>
            <Row>
            <Steps/>
            </Row>
            </Col>
        </Container>
    } else if (layout === "CREATORS") {
        layoutInternals = <Container style={ContainerStyle}>
            <Col className="col-11">
                <Row>
                    <ServiceInfoCard />
                </Row>
            </Col>
        </Container>
    } else if (layout === "BUSINESSES") {
        layoutInternals = <Container style={ContainerStyle}>
            <Col className="col-11">
                <Row>
                    <BusinessInfoCard />
                </Row>
            </Col>
        </Container>
    } else if (layout === "INDIVIDUALS") {
        layoutInternals = <Container style={ContainerStyle}>
            <Col className="col-11">
                <Row>
                    <IndividualInfoCard />
                </Row>
            </Col>
        </Container>
    } else if (layout === "ETHERSCAN") {
        layoutInternals = <Container style={ContainerStyle}>
            <Col className="col-11">
                <Row>
                    <EtherscanCard />
                </Row>
            </Col>
        </Container>
    } else if (layout === "VIDEO-EDITOR") {
        layoutInternals = <Container style={ContainerStyle}>
            <Col className="col-11">
                <Row>
                    <VideoEditor />
                </Row>
            </Col>
        </Container>
    } else if (layout === "POS") {
        layoutInternals = <Container style={ContainerStyle}>
            <Col className="col-11">
                <Row>
                    <POS />
                </Row>
            </Col>
        </Container>
    }

    return (
        <div style={{
            "margin-bottom": "10vh"
        }}>
            <Header />
            {layoutInternals}
        </div>
    );
}

export default Layout;