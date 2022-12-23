import React, { useContext, useState } from "react";
import Header from "./Header";
import Steps from "./Steps"
import MainCard from "./MainCard";
import Storefront from "./Storefront";
import SecondaryCard from "./SecondaryCard";
import { AppContext } from "./Context";
import BusinessInfoCard from "./BusinessInfoCard";
import { Container, Col, Row } from "react-bootstrap";
import IndividualInfoCard from "./IndividualInfoCard";
import EtherscanCard from "./EtherscanCard";
import EthersCard from "./EthersCard";
import ProfilePage from "./ProfilePage";
import ImageEditor from "./ImageEditor";

import VideoEditor from "./VideoEditor";
import POS from "./POS";

const ContainerStyle = { minWidth: "100vw", display: "flex", "justify-content": "center" };
const CenterStyle = {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "margin": 0,
    "padding": 0,
    "gap": "0.5vw"
}

function Layout() {

    const { layout } = useContext(AppContext);

    let layoutInternals;

    if (layout === "HOME") {
        layoutInternals = <Container style={ContainerStyle}>
            <Col className="col-11">
                <Row>
                    <MainCard />
                </Row>
                <Row>
                    <Steps />
                </Row>
                <Row>
                    <SecondaryCard />
                </Row>
            </Col>
        </Container>
    } else if (layout === "BUSINESSES") {
        layoutInternals = <BusinessInfoCard />
    } else if (layout === "INDIVIDUALS") {
        layoutInternals = <IndividualInfoCard />
    } else if (layout === "ETHERSCAN") {
        layoutInternals = <EtherscanCard />

    } else if (layout === "VIDEO-EDITOR") {
        layoutInternals = <VideoEditor />

    } else if (layout === "IMAGE-EDITOR") {
        layoutInternals = <ImageEditor />

    }  else if (layout === "PROFILE-PAGE") {
        layoutInternals = <ProfilePage />

    } else if (layout === "POS") {
        layoutInternals =
            <Row style={CenterStyle}>
                <Col className="col-11">
                    <POS />
                </Col>
            </Row>
    } else if (layout === "STORE-FRONT") {
        layoutInternals = <Storefront />

    } else if (layout === "ETHERS") {
        layoutInternals = <EthersCard />

    }

    return (
        <div style={{
            "marginBottom": "10vh"
        }}>
            <Header />
            {layoutInternals}
        </div>
    );
}

export default Layout;