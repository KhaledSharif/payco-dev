import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import { AppContext } from "./Context";

import { ethers } from 'ethers';

import { Alchemy, Network } from "alchemy-sdk";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import moment from "moment";
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
    faClock,
    faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useContext } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

import Table from 'react-bootstrap/Table';

const StripedRowExample = ({ data, txType, txNetwork }) => {

    const networkScanner = {
        "ETH": "https://etherscan.io",
        "POLY": "https://polygonscan.com"
    }

    if (data.length === 0) {
        return <div>
            <Spinner animation="border" style={{ fontSize: "1.25vw", color: "orange" }} />
            <span style={ArrowText}>Transaction in progress, please wait</span>
        </div>
    }

    let tableHead, tableRows;

    if (txType === "TX") {
        tableHead = <tr>
            <th>Age</th>
            <th>Tx Hash</th>
            <th>Block</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
        </tr>

        tableRows = data.transfers.map((x, i) => (
            <tr key={i}>
                <td>{moment(x.metadata.blockTimestamp).fromNow()}</td>
                <td>

                    <a href={`${networkScanner[txNetwork]}/tx/${x.hash}`}>
                        {x.hash.substring(0, 6)}
                    </a>


                </td>
                <td>{x.blockNum}</td>
                <td>{x.from.substring(0, 6)}</td>
                <td>{x.to.substring(0, 6)}</td>
                <td>{x.value.toFixed(3)} {x.asset}</td>
            </tr>
        ))
    } else if (txType === "NFT") {
        tableHead = <tr>
            <th>Age</th>
            <th>Tx Hash</th>
            <th>Block</th>
            <th>From</th>
            <th>To</th>
            <th>NFT Address</th>
        </tr>

        tableRows = data.transfers.map((x, i) => (
            <tr key={i}>
                <td>{moment(x.metadata.blockTimestamp).fromNow()}</td>
                <td>

                    <a href={`https://etherscan.io/tx/${x.hash}`}>
                        {x.hash.substring(0, 6)}
                    </a>

                </td>
                <td>{x.blockNum}</td>
                <td>{x.from.substring(0, 6)}</td>
                <td>{x.to.substring(0, 6)}</td>
                <td>

                    <a href={`https://opensea.io/assets/ethereum/${x.rawContract.address}/${ethers.BigNumber.from(x.tokenId)}`}>
                        {x.rawContract.address.substring(0, 6)}
                    </a>

                </td>
            </tr>
        ))
    } else {
        throw 'bad tx type'
    }

    return (
        <Table striped bordered hover variant="dark" style={{ width: "100%" }}>
            <thead>
                {tableHead}
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </Table>
    );
}



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

    const { ethAddress, setEthAddress } = useContext(AppContext);

    const [TransactionState, SetTransactionState] = useState("READY");

    const [TxDirection, SetTxDirection] = useState("FROM");

    const [TxType, SetTxType] = useState("TX");

    const [TxNetwork, SetTxNetwork] = useState("ETH");

    const [EthAddress, SetEthAddress] = useState("0x912fD21d7a69678227fE6d08C64222Db41477bA0");

    const [TransactionList, SetTransactionList] = useState([]);

    const networkNaming = {
        "ETH": "Ethereum",
        "POLY": "Polygon"
    }

    const networkMapping = {
        "ETH": Network.ETH_MAINNET,
        "POLY": Network.MATIC_MAINNET
    }

    const ResetDetails = () => {
        SetTransactionState("READY");
        SetTransactionList([])
    }

    const LoginWithMetamask = () => {
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        provider.send("eth_requestAccounts", []).then(() => {
            const signer = provider.getSigner();
            signer.getAddress().then((address) => {
                setEthAddress(address)
            })
        })

    }

    const resetTransaction = () => {
        SetTransactionState("PENDING");
        SetTransactionList([])



        const config = {
            apiKey: "c4d_elwERy9uvEdZJGx8Q3bSGfqgfy3_",
            network: networkMapping[TxNetwork],
        };

        const alchemy = new Alchemy(config);

        let AssetTransfersConfig = {

            fromBlock: "0x0",
            order: "desc",
            maxCount: 25,
            withMetadata: true,

        }

        if (TxDirection === "FROM") {
            AssetTransfersConfig.fromAddress = EthAddress
        } else if (TxDirection === "TO") {
            AssetTransfersConfig.toAddress = EthAddress
        } else {
            throw "bad tx dir"
        }

        if (TxType === "TX") {
            AssetTransfersConfig.category = ["external", "internal", "erc20"]
        } else if (TxType === "NFT") {
            AssetTransfersConfig.category = ["erc721"]
        } else {
            throw "bad tx type"
        }

        alchemy.core.getAssetTransfers(AssetTransfersConfig).then((data) => {

            console.log({ data, TxType, TxDirection, TxNetwork })

            SetTransactionList(data)
            SetTransactionState("COMPLETE");

        })
    }

    let progressBar;
    if (TransactionState === "PENDING") {
        progressBar = <ProgressBar variant="none" animated={true} now={50} />
    } else if (TransactionState === "COMPLETE") {
        progressBar = <ProgressBar variant="success" animated={false} now={100} />
    }

    let redoButton = <Button
        disabled={TransactionState === "PENDING"}
        onClick={() => (resetTransaction())}
        size="lg" variant="light" style={{
        }} className="border border-0">
        <FontAwesomeIcon
            style={{
                marginRight: "0.25vw",

            }} icon={faRotateLeft} />
        Refresh </Button>



    return <div style={CenterStyle}>

        <Card
            style={{
                backgroundColor: "rgba(0,0,20,0.5)",



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
            <Row>
                <div style={{

                    display: "flex",
                    gap: "1.0vw"

                }}>


                    {redoButton}



                    <DropdownButton size="lg" variant="light" style={{
                    }} className="border border-0" id="dropdown-basic-button" title={`Network: ${networkNaming[TxNetwork]}`}>
                        <Dropdown.Item

                            as="button"
                            onClick={
                                () => {
                                    ResetDetails();
                                    SetTxNetwork("ETH");
                                }
                            }

                        >Ethereum</Dropdown.Item>
                        <Dropdown.Item

                            as="button"
                            onClick={
                                () => {
                                    ResetDetails();
                                    SetTxNetwork("POLY");
                                }
                            }

                        >Polygon</Dropdown.Item>
                    </DropdownButton>

                    {

                        ethAddress ? <Button size="lg" variant="light" className="border border-0"

                            onClick={
                                () => (setEthAddress(null))
                            }
                        >
                            Logged in as {ethAddress.substring(0,6)}
                        </Button> : <Button size="lg" variant="light" className="border border-0"

                            onClick={
                                () => (LoginWithMetamask())
                            }
                        >
                            Login with Metamask
                        </Button>

                    }



                </div>

            </Row>

            <br />

            <Row>

                <div style={{
                    width: "100%"
                }}>
                    {progressBar}
                </div>
            </Row>
            <br />

            <Row style={{
                minHeight: "35vh",
                padding: 0,
                margin: 0
            }}>
                <Col className="col-4" style={{
                    display: "flex"
                }}>
                    <Accordion style={{ width: "100%" }} defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ethereum Transactions</Accordion.Header>
                            <Accordion.Body>

                                <ButtonGroup size="lg" style={{
                                    width: "100%", padding: "0", backgroundColor: "rgba(0,0,0,0.05)"
                                }} vertical>
                                    <Button variant="outline-dark"

                                        onClick={() => {

                                            ResetDetails();
                                            SetEthAddress("0x912fD21d7a69678227fE6d08C64222Db41477bA0")
                                            SetTxDirection("FROM")
                                            SetTxType("TX")

                                        }}>

                                        Txs from 0x912fD2

                                    </Button>


                                    <Button variant="outline-dark"

                                        onClick={() => {

                                            ResetDetails();
                                            SetEthAddress("0xe2Db77D7a6417e84395A2A74276564638077B779")
                                            SetTxDirection("FROM")
                                            SetTxType("TX")

                                        }}>

                                        Txs from 0xe2Db77

                                    </Button>

                                    <Button variant="outline-dark"

                                        onClick={() => {

                                            ResetDetails();
                                            SetEthAddress("0x912fD21d7a69678227fE6d08C64222Db41477bA0")
                                            SetTxDirection("TO")
                                            SetTxType("TX")

                                        }}>

                                        Txs to 0x912fD2

                                    </Button>

                                    <Button variant="outline-dark"

                                        onClick={() => {

                                            ResetDetails();
                                            SetEthAddress("0x752cB5a80F6A702a865c9705f426731bB92a18D3")
                                            SetTxDirection("TO")
                                            SetTxType("TX")

                                        }}>

                                        Txs to 0x752cB5

                                    </Button>


                                </ButtonGroup>

                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="2">
                            <Accordion.Header>ERC-20 Tokens</Accordion.Header>
                            <Accordion.Body>



                            </Accordion.Body>
                        </Accordion.Item>



                        <Accordion.Item eventKey="3">
                            <Accordion.Header>ERC-721 NFTs</Accordion.Header>
                            <Accordion.Body>

                                <ButtonGroup size="lg" style={{
                                    width: "100%", padding: "0", backgroundColor: "rgba(0,0,0,0.05)"
                                }} vertical>


                                    <Button variant="outline-dark"

                                        onClick={() => {

                                            ResetDetails();
                                            SetEthAddress("0xb00154e628C7880cEdDF01c36888Fa9e6FD3ecb9")
                                            SetTxDirection("TO")
                                            SetTxType("NFT")

                                        }}>

                                        NFTs sent to 0xb00154

                                    </Button>

                                    <Button variant="outline-dark"

                                        onClick={() => {

                                            ResetDetails();
                                            SetEthAddress("0x17eF2B6Ff281dbb79847c9CBb2Ce62572Abb24C8")
                                            SetTxDirection("TO")
                                            SetTxType("NFT")

                                        }}>

                                        NFTs sent to 0x17eF2B

                                    </Button>

                                    <Button variant="outline-dark"

                                        onClick={() => {

                                            ResetDetails();
                                            SetEthAddress("0xb00154e628C7880cEdDF01c36888Fa9e6FD3ecb9")
                                            SetTxDirection("FROM")
                                            SetTxType("NFT")

                                        }}>

                                        NFTs sent from 0xb00154

                                    </Button>

                                    <Button variant="outline-dark"

                                        onClick={() => {

                                            ResetDetails();
                                            SetEthAddress("0x17eF2B6Ff281dbb79847c9CBb2Ce62572Abb24C8")
                                            SetTxDirection("FROM")
                                            SetTxType("NFT")

                                        }}>

                                        NFTs sent from 0x17eF2B

                                    </Button>



                                    <Button variant="outline-dark"

                                        onClick={() => {

                                            ResetDetails();
                                            SetEthAddress("0x4D4B61a639EAd8bebE50f067B062e940658233AD")
                                            SetTxDirection("FROM")
                                            SetTxType("NFT")

                                        }}>

                                        NFTs sent from 0x4D4B61

                                    </Button>
                                </ButtonGroup>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col>

                <Col className="col-8" style={CenterStyle}>








                    <ListGroup  style={{ width: "100%" }} as="ol">
                        <ListGroup.Item 
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{TxDirection === "FROM" ? "Sending" : "Receiving"} Address</div>

                                {EthAddress}

                            </div>
                            <Button
                                size="lg" style={ButtonStyle} className="border border-0">
                                <FontAwesomeIcon
                                    style={SingularHeaderSymbol} icon={faCopy} />

                            </Button>
                            <Button
                                size="lg" style={ButtonStyle} className="border border-0">
                                <FontAwesomeIcon
                                    style={SingularHeaderSymbol} icon={faQuestionCircle} />
                            </Button>
                        </ListGroup.Item>




                    </ListGroup>

                    <br />

                    <div style={{

                        width: "100%",
                        backgroundColor: "rgba(0,0,20,0.5)",
                        paddingTop: "2%",
                        paddingBottom: "2%",
                        paddingLeft: "1.0vw",
                        paddingRight: "1.0vw",
                        borderRadius: "0.25vw"

                    }}>

                        {

                            TransactionState === "READY" ?

                                <div>
                                    <Alert variant="warning">
                                        <FontAwesomeIcon style={InfoHeaderSymbol} icon={faExclamationCircle} />
                                        Click the refresh button above to load transaction history
                                    </Alert>

                                </div>

                                :

                                <div>
                                    <Alert variant="success">
                                        <FontAwesomeIcon style={InfoHeaderSymbol} icon={faCircleCheck} />

                                        Latest 25 <b>{
                                            TxType === "NFT" ? "NFT" : "token"
                                        }</b> transactions <b>{
                                            TxDirection === "FROM" ? "sent from" : "recieved by"
                                        }</b> the address shown above

                                    </Alert>

                                    <StripedRowExample data={TransactionList} txType={TxType} txNetwork={TxNetwork} /> </div>

                        }

                        <br />





                    </div>
                    <br />



                </Col>






            </Row>


        </Card></div>
}

export default MainCard;
