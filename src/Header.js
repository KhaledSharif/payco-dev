import React from "react";
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleInfo, faList, faStore, faArrowRight, faCirclePlus} from "@fortawesome/free-solid-svg-icons"
import {useContext} from "react";
import {AppContext} from "./Context";

const ArrowHeaderSymbol = {
    "marginLeft": "8px",
    "fontSize": "15px",
    "color": "grey"
}

const ButtonStyle = {
    "marginLeft": "5px"
}

const ButtonIcon = {
    "marginRight": "10px",
    "fontSize": "15px",
    "color": "rgba(0,0,0,0.5)"
}

function Header() {
    const {setLayout} = useContext(AppContext);


    return (
        <Navbar style={{backgroundColor: "#f3f3f3"}} variant="light">
            <Container style={{"maxWidth": "unset", "paddingLeft": "1vw", "paddingRight": "1vw"}}>

                <Button variant="light" className="border border-0" onClick={() => (setLayout("HOME"))}>
                    <FontAwesomeIcon icon={faCirclePlus} style={{color: "#f70000"}}/> Payco</Button>
                <Nav>
                    <Button variant="light" className="border border-0" style={ButtonStyle}><FontAwesomeIcon
                        icon={faCircleInfo} style={ButtonIcon}/>About</Button>
                    <Button variant="light" className="border border-0" style={ButtonStyle}><FontAwesomeIcon
                        icon={faList} style={ButtonIcon}/>Services</Button>
                    <Button variant="light" className="border border-0" style={ButtonStyle}><FontAwesomeIcon
                        icon={faStore} style={ButtonIcon}/>Marketplace</Button>
                </Nav>
                <Button variant="light" className="border border-0">Get Started <FontAwesomeIcon
                    style={ArrowHeaderSymbol} icon={faArrowRight}/></Button>
            </Container>
        </Navbar>
    );
}

export default Header;