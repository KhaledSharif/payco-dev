import {Col, Container, Row, Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image2 from "./jpg/2.png";
import Image3 from "./jpg/6.png";
import Image4 from "./jpg/5.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faUser,
    faUserTie,
    faUserAstronaut,
    faCircleCheck,
    faLock,
    faMoneyCheck, faShop, faBank, faPeopleGroup, faUserGroup, faPaintbrush, faCoins, faWallet
} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {AppContext} from "./Context";

const IconStyle = {
    "fontSize": "1.25vw",
    "marginRight": "1.0vw",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center"
}

const ArrowHeaderIcon = {
    "marginRight": "1.0vw"
}

const ArrowText = {
    "fontSize": "1.0vw",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center"
}
const MainBulletPoints = {
    "marginTop": "2.0vw",
    "padding": "1.0vw 1.0vw 1.0vw 1.0vw",
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "column",
    "justifyContent": "center",
    "gap": "2.0vw"
}

const BulletStyle = {
    "width": "100%",
    "marginBottom": "0.2vw",
    "padding": "0",
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "center",
    "gap": "1.0vh"
}

const ArrowHeaderSymbol = {
    "marginLeft": "1.0vw",
    "fontSize": "1.0vw",
    "color": "rgba(0,0,0,0.25)"
}

const ImageContainer = {
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

    "fontSize": "1.1vw",
    "fontWeight": "500",

    "marginBottom": "1.0vw",
    "boxShadow": "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.01), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.05)"
}

const CommonStyle = {backgroundColor: "#f3f3f3", borderRadius: "1.0vw", padding: "1.0vw 2.5vw 2.0vw 2.5vw"}

function GroupExample() {
    const {setLayout} = useContext(AppContext);

    return <CardGroup className="steps" style={{"gap": "5.5vw", marginTop: "2.5vw"}}>
        <Card
            style={CommonStyle}
            className="border border-0"
        >
            <Button variant="light" style={ArrowHeaderStyle} onClick={() => (setLayout("INDIVIDUALS"))}>
                <FontAwesomeIcon icon={faUser} style={ArrowHeaderIcon}/> For Individuals <FontAwesomeIcon
                style={ArrowHeaderSymbol} icon={faArrowRight}/>
            </Button>

            <div style={ImageContainer}>
                <img src={Image2} style={{width: "100%", height: "100%"}}/>
            </div>

            <div style={MainBulletPoints}>

                <div style={BulletStyle}>
                    <div style={IconStyle}><FontAwesomeIcon icon={faWallet}/></div>
                    <span style={ArrowText}>Store your money safely in a digital wallet</span>
                </div>

                <div style={BulletStyle}>
                    <div style={IconStyle}><FontAwesomeIcon icon={faLock}/></div>
                    <span style={ArrowText}>Only you hold the keys to your wallet</span>
                </div>

                <div style={BulletStyle}>
                    <div style={IconStyle}><FontAwesomeIcon icon={faUserGroup}/></div>
                    <span style={ArrowText}>Send and receive money for the lowest fees</span>
                </div>

            </div>

        </Card>
        <Card
            style={CommonStyle}
            className="border border-0"
        >
            <Button variant="light" style={ArrowHeaderStyle} onClick={() => (setLayout("BUSINESSES"))}>
                <FontAwesomeIcon icon={faUserTie} style={ArrowHeaderIcon}/> For Businesses <FontAwesomeIcon
                style={ArrowHeaderSymbol} icon={faArrowRight}/>
            </Button>

            <div style={ImageContainer}>
                <img src={Image3} style={{width: "100%", height: "100%"}}/>
            </div>


            <div style={MainBulletPoints}>

                <div style={BulletStyle}>
                    <div style={IconStyle}><FontAwesomeIcon icon={faMoneyCheck}/></div>
                    <span style={ArrowText}>Accept more currencies with our point of sale</span>
                </div>

                <div style={BulletStyle}>
                    <div style={IconStyle}><FontAwesomeIcon icon={faShop}/></div>
                    <span style={ArrowText}>Build an online store for your business for free</span>
                </div>

                <div style={BulletStyle}>
                    <div style={IconStyle}><FontAwesomeIcon icon={faBank}/></div>
                    <span style={ArrowText}>Import products faster with our letter of credit</span>
                </div>

            </div>

        </Card>
        {/*<Card*/}
        {/*    style={CommonStyle}*/}
        {/*    className="border border-0"*/}
        {/*>*/}
        {/*    <Button variant="light" style={ArrowHeaderStyle} onClick={() => (setLayout("CREATORS"))}>*/}
        {/*        <FontAwesomeIcon icon={faUserAstronaut} style={ArrowHeaderIcon}/> For Creators <FontAwesomeIcon*/}
        {/*        style={ArrowHeaderSymbol} icon={faArrowRight}/>*/}
        {/*    </Button>*/}

        {/*    <div style={ImageContainer}>*/}
        {/*        <img src={Image4} style={{width: "100%", height: "100%"}}/>*/}
        {/*    </div>*/}

        {/*    <div style={MainBulletPoints}>*/}

        {/*        <div style={BulletStyle}>*/}
        {/*            <div style={IconStyle}><FontAwesomeIcon icon={faPaintbrush}/></div>*/}
        {/*            <span style={ArrowText}>Sell your artistic creations online for free</span>*/}
        {/*        </div>*/}

        {/*        <div style={BulletStyle}>*/}
        {/*            <div style={IconStyle}><FontAwesomeIcon icon={faCircleCheck}/></div>*/}
        {/*            <span style={ArrowText}>Keep all your revenue below an annual threshold</span>*/}
        {/*        </div>*/}

        {/*        <div style={BulletStyle}>*/}
        {/*            <div style={IconStyle}><FontAwesomeIcon icon={faCoins}/></div>*/}
        {/*            <span style={ArrowText}>Only pay fees after the threshold</span>*/}
        {/*        </div>*/}

        {/*    </div>*/}

        {/*</Card>*/}
    </CardGroup>

}

export default GroupExample;
