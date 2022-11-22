import {Col, Container, Row, Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image2 from "./jpg/2.png";
import Image3 from "./jpg/6.png";
import Image4 from "./jpg/5.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faUser, faUserTie, faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {AppContext} from "./Context";

const ArrowHeaderIcon = {
    "marginRight": "0.5vw"
}

const ArrowHeaderSymbol = {
    "marginLeft": "0.5vw",
    "fontSize": "1.0vw",
    "color": "rgba(0,0,0,0.25)"
}

const ImageContainer = {
    "height": "100%",
    "borderRadius": "1.0vw",
    "overflow": "hidden"
}

const TextContainer = {
    "paddingLeft": "2.5vw",
    "paddingRight": "2.5vw",

    "paddingTop": "1.1vw",
    "paddingBottom": "1.1vw",

    "fontSize": "1.0vw",
    "textAlign": "center",

    "fontWeight": "500"
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

const CommonStyle = {backgroundColor: "#f3f3f3", borderRadius: "1.0vw", padding: "1.0vw"}

function GroupExample() {
    const {setLayout} = useContext(AppContext);

    return <CardGroup className="steps" style={{"gap": "0.5vw"}}>
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
            <div style={TextContainer}>
                Store your money safely in a digital wallet that only you hold the keys to
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
            <div style={TextContainer}>
                Easily accept fiat and crypto currencies, both in-store and online
            </div>

        </Card>
        <Card
            style={CommonStyle}
            className="border border-0"
        >
            <Button variant="light" style={ArrowHeaderStyle} onClick={() => (setLayout("CREATORS"))}>
                <FontAwesomeIcon icon={faUserAstronaut} style={ArrowHeaderIcon}/> For Creators <FontAwesomeIcon
                style={ArrowHeaderSymbol} icon={faArrowRight}/>
            </Button>

            <div style={ImageContainer}>
                <img src={Image4} style={{width: "100%", height: "100%"}}/>
            </div>
            <div style={TextContainer}>
                Sell your artistic creations in a marketplace that empowers everyone
            </div>

        </Card>
    </CardGroup>

}

export default GroupExample;
