import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image2 from "./jpg/2.png";
import Image3 from "./jpg/6-cropped.png";





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faUser,
    faUserTie,
    faUserAstronaut,
    faCircleCheck,
    faLock,
    faMoneyCheck, faShop, faBank, faPeopleGroup, faUserGroup, faPaintbrush, faCoins, faWallet, faCircleUser
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "./Context";

const IconStyle = {
    "fontSize": "1.25vw",
    "marginRight": "1.0vw",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center"
}

const ArrowHeaderIcon = {
    "marginRight": "1.0vw",
}
const ArrowHeaderSymbol = {
    "marginLeft": "1.0vw",
    "fontSize": "1.0vw",
    "color": "rgba(0,0,0,0.25)"
}
const ArrowText = {
    "fontSize": "1.25vw",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center"
}

const SubArrowText = {
    "color": "rgba(0,0,0,0.85)",
    "padding": "0.25vw 2.5vw 1.25vw 2.5vw",
    "fontSize": "0.75vw",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center"
}
const MainBulletPoints = {
    "color": "rgba(0,0,0,0.95)",
    "marginTop": "2.0vw",
    "padding": "1.0vw 1.0vw 1.0vw 1.0vw",
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "column",
    "justifyContent": "center",
    "gap": "2.0vw"
}
const SubBulletStyle = {
    display: "flex",
    flexDirection: "row"
}
const BulletStyle = {
    "width": "100%",
    "marginBottom": "0.2vw",
    "padding": "0",
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "column",
    "justifyContent": "center",
    "gap": "1.0vh"
}



const ImageContainer = {
    "marginTop": "0.5vh",
    "borderRadius": "1.0vw",
    "overflow": "hidden",
    "height": "28vw"
}

const ArrowHeaderStyle = {


    "borderRadius": "1.0vw",
    "color": "rgba(0,0,0,0.9)",
    "border": "none",
    "padding": "0.75vw",
    "width": "100%",

    "fontSize": "1.0vw",
    "fontWeight": "400",

    "marginBottom": "1.0vw",
    "boxShadow": "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.01), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.05)"
}

const CommonStyle = { backgroundColor: "rgba(255,255,255,0.875)", borderRadius: "0.85vw", paddingLeft: "1.0vw", paddingRight: "1.0vw", paddingTop: "2.0vh" }

function GroupExample() {
    const { setLayout } = useContext(AppContext);

    return <CardGroup className="steps" style={{ "gap": "9.5vw", marginTop: "1.5vh" }}>
        <Card
            style={CommonStyle}
            className="border border-0"
        >
            <Button variant="light" style={ArrowHeaderStyle} onClick={() => (setLayout("INDIVIDUALS"))}>
                <FontAwesomeIcon icon={faUser} style={ArrowHeaderIcon} />Payco For Individuals <FontAwesomeIcon
                    style={ArrowHeaderSymbol} icon={faArrowRight} />
            </Button>

            <div style={ImageContainer}>
                <img className="clickable" onClick={() => (setLayout("INDIVIDUALS"))} src={Image2} style={{ width: "100%", height: "100%" }} />
            </div>

            <div style={MainBulletPoints}>

                <div style={BulletStyle}>
                    <div style={SubBulletStyle}>

                        <div style={IconStyle}><FontAwesomeIcon icon={faWallet} /></div>
                        <span style={ArrowText}>Store your money safely in a digital wallet</span>
                    </div>
                    <div style={SubArrowText}>

                        Use the hardware wallet that's already in your pocket. Payco stores your money safely and securely on your phone. Access your money anytime, anywhere.

                    </div>
                </div>

                <div style={BulletStyle}>
                    <div style={SubBulletStyle}>
                        <div style={IconStyle}><FontAwesomeIcon icon={faUserGroup} /></div>
                        <span style={ArrowText}>Send and receive money for the lowest fees</span>

                    </div>
                    <div style={SubArrowText}>


                        Say goodbye to excessive transaction fees. Say hello to zero fees on all cryptocurrency transactions, and the lowest fees available for fiat currencies.

                    </div>

                </div>

                <div style={BulletStyle}>
                    <div style={SubBulletStyle}>
                        <div style={IconStyle}><FontAwesomeIcon icon={faLock} /></div>
                        <span style={ArrowText}>Only you hold the keys to your wallet</span>
                    </div>

                    <div style={SubArrowText}>

                        "Not your keys, not your money" has never been more true. Payco offers everyone a free digital wallet that only you can send and recieve money from.

                    </div>
                </div>

            </div>

            <div style={{
                marginTop: "3.0vh"
            }}>
                <Button variant="light" style={ArrowHeaderStyle} onClick={() => (setLayout("INDIVIDUALS"))}>
                    Browse Services for Individuals <FontAwesomeIcon
                        style={ArrowHeaderSymbol} icon={faArrowRight} />
                </Button>
            </div>

        </Card>
        <Card
            style={CommonStyle}
            className="border border-0"
        >
            <Button variant="light" style={ArrowHeaderStyle} onClick={() => (setLayout("BUSINESSES"))}>
                <FontAwesomeIcon icon={faUserTie} style={ArrowHeaderIcon} />Payco For Businesses <FontAwesomeIcon
                    style={ArrowHeaderSymbol} icon={faArrowRight} />
            </Button>

            <div style={ImageContainer}>
                <img className="clickable" onClick={() => (setLayout("BUSINESSES"))} src={Image3} style={{ width: "100%", height: "100%" }} />
            </div>


            <div style={MainBulletPoints}>

                <div style={BulletStyle}>
                    <div style={SubBulletStyle}>

                        <div style={IconStyle}><FontAwesomeIcon icon={faShop} /></div>
                        <span style={ArrowText}>Build an online store for your business for free</span>


                    </div>
                    <div style={SubArrowText}>Bring your vision to life with our easy-to-use store creator. Enjoy lower comission fees than anywhere else. No coding expertise required — just your next big idea.
                    </div>
                </div>

                <div style={BulletStyle}>
                    <div style={SubBulletStyle}>

                        <div style={IconStyle}><FontAwesomeIcon icon={faMoneyCheck} /></div>
                        <span style={ArrowText}>Accept more currencies with our point of sale</span>
                    </div>
                    <div style={SubArrowText}>Our point of sale is designed to help retail stores sell in-store and online seamlessly, with built-in tools for advanced inventory management, sales, and staffing.
                    </div>
                </div>

                <div style={BulletStyle}>
                    <div style={SubBulletStyle}>
                        <div style={IconStyle}><FontAwesomeIcon icon={faBank} /></div>
                        <span style={ArrowText}>Import products faster with our letter of credit</span>
                    </div>
                    <div style={SubArrowText}>Skip the line to the bank and get a letter of credit issued by Payco for the lowest fee on the market. Fund your letter of credit by wire transfer or cryptocurrency.
                    </div>
                </div>

            </div>
            <div style={{
                marginTop: "3.0vh"
            }}>
                <Button variant="light" style={ArrowHeaderStyle} onClick={() => (setLayout("BUSINESSES"))}>
                    Browse Services for Businesses  <FontAwesomeIcon
                        style={ArrowHeaderSymbol} icon={faArrowRight} />
                </Button>
            </div>
        </Card>

    </CardGroup>

}

export default GroupExample;
