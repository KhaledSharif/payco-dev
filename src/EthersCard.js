import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';

import { Alchemy, Network } from "alchemy-sdk";
import { ethers } from "ethers";

import { Col, Container, Row, Spinner } from "react-bootstrap";
import {
    faUserCircle,
    faRotateLeft,
    faCoins,
    faArrowRight,
    faCircleCheck,
    faMagnifyingGlass,
    faLock,
    faScaleBalanced,
    faQuestionCircle,
    faCopy,
    faInfoCircle,
    faClock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

import Table from 'react-bootstrap/Table';

const StripedRowExample = ({ data }) => {

    if (data.length === 0) {
        return <div>
            Not yet fetched, please click on refresh button
        </div>
    }

    const tableRows = data.transfers.map((x, i) => (
        <tr key={i}>
            <td>{x.metadata.blockTimestamp}</td>
            <td>{x.hash.substring(0, 6)}</td>
            <td>{x.blockNum}</td>
            <td>{x.from.substring(0, 6)}</td>
            <td>{x.to.substring(0, 6)}</td>
            <td>{x.value} {x.asset}</td>
        </tr>
    ))

    return (
        <Table striped style={{ width: "100%" }}>
            <thead>
                <tr>
                    <th>Age</th>
                    <th>Tx Hash</th>
                    <th>Block</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </Table>
    );
}

const config = {
    apiKey: "c4d_elwERy9uvEdZJGx8Q3bSGfqgfy3_",
    network: Network.ETH_MAINNET,
};

const SingularHeaderSymbol = {
    "margin": "0",
    "fontSize": "0.8vw",
    "color": "rgba(0,0,0,0.25)"
}

const InfoHeaderSymbol = {
    "marginRight": "0.5vw",
    "fontSize": "0.8vw",
    "color": "rgba(0,0,0,0.5)"
}

const UserIconStyle = {
    fontSize: "0.5vw",
    marginLeft: "0.35vw",
    marginRight: "0.35vw"
}

const ButtonStyle = {
    "fontSize": "0.5vw",
    "borderRadius": "0.75vw",
    "padding": "0.5vw 0.5vw 0.5vw 0.5vw",
    "backgroundColor": "rgba(0,0,0,0.05)",
    "marginLeft": "0.25vw"
}

const ButtonIcon = {
    "marginRight": "0.5vw",
    "fontSize": "0.9vw",
    "color": "rgba(0,0,0,0.5)"
}

const ArrowHeaderSymbol = {
    "marginLeft": "1.3vw",
    "marginRight": "1.3vw",

    "fontSize": "0.9vw",
    "color": "rgba(0,0,0,0.25)"
}

const UserNameStyle = {
    fontSize: "0.6vw",
}

const PaymentStyle = {
    marginTop: "5vh",
    fontSize: "0.1vw",
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingTop: "1.0vh",
    paddingBottom: "1.0vh",

    borderRadius: "1.0vw",
    zIndex: "0",

}

const ArrowText = {
    marginLeft: "0.55vw",
    fontSize: "0.75vw"
}
const MainBulletPoints = {
    marginTop: "2.0vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const ImageContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.25vw",
    overflow: "hidden",
    margin: "1.0vw"
}

const ProfileImageStyle = {
    height: "5.5vw"
}

const CenterStyle = { "marginTop": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" }

const BulletStyle = { "marginBottom": "0.5vw", "padding": "0" }

function MainCard() {

    const [transactionState, setTransactionState] = useState("COMPLETE")

    const [EthAddress, SetEthAddress] = useState();

    const [TransactionList, SetTransactionList] = useState([])


    const resetTransaction = () => {
        setTransactionState("PENDING");

        const alchemy = new Alchemy(config);

        alchemy.core.getAssetTransfers({
            fromBlock: "0x0",
            fromAddress: "0x912fD21d7a69678227fE6d08C64222Db41477bA0",
            category: ["external", "internal"],
            order: "desc",
            maxCount: 25,
            withMetadata: true,
        }).then((data) => {

            console.log({ data });
            SetTransactionList(data)
            setTransactionState("COMPLETE");

        })
    }

    let progressBar;
    if (transactionState === "PENDING") {
        progressBar = <ProgressBar variant="none" animated={true} now={50} />
    } else if (transactionState === "COMPLETE") {
        progressBar = <ProgressBar variant="success" animated={false} now={100} />
    }

    let transactionDetails;

    if (transactionState === "PENDING") {
        transactionDetails = <div style={BulletStyle}>
            <Spinner animation="border" style={{ fontSize: "1.25vw", color: "orange" }} />
            <span style={ArrowText}>Transaction in progress, please wait</span>
        </div>
    } else if (transactionState === "COMPLETE") {
        transactionDetails = <div>
            <div style={BulletStyle}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "1.25vw", color: "green" }} />
                <span style={ArrowText}>Transaction completed successfully</span>
            </div>
            <div style={BulletStyle}>
                <FontAwesomeIcon icon={faCoins} style={{ fontSize: "1.0vw" }} />
                <span style={ArrowText}>Khaled sent 420.69 USDC to Elon</span>
            </div>
        </div>
    }

    let redoButton;
    if (transactionState === "COMPLETE") {
        redoButton = <Button
            onClick={() => (resetTransaction())}
            size="lg" variant="light" style={ButtonStyle} className="border border-0">
            <FontAwesomeIcon
                style={{
                    marginRight: "0.25vw",

                }} icon={faRotateLeft} />
            Refresh </Button>
    }


    return <div style={CenterStyle}>

        <Card
            style={{
                backgroundColor: "rgba(255,255,255,0.875)",



                paddingTop: "5vh ",
                paddingLeft: "10vw",
                paddingRight: "10vw",
                paddingBottom: "10vh",


                width: "90%",
                minHeight: "100vh",
                marginTop: 0,
                marginBottom: "100vh",
                zIndex: "1",
                borderRadius: "1.0vw",
                overflow: "hidden"
            }}
            className="border border-0"
        >

            <Row style={{
                minHeight: "35vh",
                padding: 0,
                margin: 0
            }}>
                <Col className="col-4" style={CenterStyle}>
                    <Accordion style={{ width: "100%" }} defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>ETH Transactions</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup as="ul" variant="flush">
                                    <ListGroup.Item as="li" active>
                                        From 0x912fD2
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        From 0x912fD2

                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        From 0x912fD2
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        From 0x912fD2

                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>ERC-20 Tokens</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup as="ul" variant="flush">
                                    <ListGroup.Item as="li">
                                        All Tokens owned by 0x912fD2
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        Morbi leo risus
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>ERC-721 NFTs</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup as="ul" variant="flush">
                                    <ListGroup.Item as="li">
                                        Cras justo odio
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        Morbi leo risus
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col>

                <Col className="col-8" style={CenterStyle}>

                    <div style={{
                        width: "100%"
                    }}>
                        {progressBar}
                    </div>

                    <br />




                    <ListGroup style={{ width: "100%" }} as="ol">
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Address</div>
                                0x912fD21d7a69678227fE6d08C64222Db41477bA0
                            </div>
                            <Button
                                size="lg" variant="light" style={ButtonStyle} className="border border-0">
                                <FontAwesomeIcon
                                    style={SingularHeaderSymbol} icon={faCopy} />

                            </Button>
                            <Button
                                size="lg" variant="light" style={ButtonStyle} className="border border-0">
                                <FontAwesomeIcon
                                    style={SingularHeaderSymbol} icon={faQuestionCircle} />
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Balance</div>

                                27.107479912036621837 Ether
                            </div>
                            <Button
                                size="lg" variant="light" style={ButtonStyle} className="border border-0">
                                <FontAwesomeIcon
                                    style={SingularHeaderSymbol} icon={faQuestionCircle} />
                            </Button>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Transaction Count</div>
                                1,522,704
                            </div>
                            <Button
                                size="lg" variant="light" style={ButtonStyle} className="border border-0">
                                <FontAwesomeIcon
                                    style={SingularHeaderSymbol} icon={faQuestionCircle} />
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                    <br />



                    <div style={{

                        width: "100%",
                        backgroundColor: "rgba(255,255,255,0.75)",
                        paddingTop: "2%",
                        paddingBottom: "2%",
                        paddingLeft: "1.0vw",
                        paddingRight: "1.0vw",
                        borderRadius: "0.25vw"

                    }}>

                        <Alert variant="info">
                            <FontAwesomeIcon style={InfoHeaderSymbol} icon={faInfoCircle} />
                            Shown below: latest 25 txs from a total of 1.5M txs
                        </Alert>

                        <StripedRowExample data={TransactionList} />
                    </div>
                    <br />
                    <div>
                        {redoButton}
                    </div>


                </Col>






            </Row>


        </Card></div>
}

export default MainCard;
