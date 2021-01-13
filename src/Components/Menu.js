import React from 'react';
import { Col, Container } from 'react-bootstrap'

import Logo from "../PhotosMain/logo.png"
import "../Styles/menu.css"

function Menu({ albumOpen, albumFilter, kitShow, aboutShow, contactShow, handleClick }) {
    return (
        <Container className = "col-2 mainMenu d-none d-md-flex">
            <Col className="logo d-flex flex-column justify-content-start">
                <img src={Logo} width= "200"></img>
            </Col>
            <Col className="menuItems d-flex flex-column justify-content-between">
                <a
                    name = "album"
                    className="menuItem"
                    className={(albumOpen) ? "unselected" : "menuHover"}
                    onClick={handleClick}
                >
                    Albums
                </a>
                <a
                    name = "Kit"
                    className="menuItem"
                    className={(kitShow) ? "unselected" : "menuHover"}
                    onClick={handleClick}
                >
                    Kit
                </a>
                <a
                    name = "About"
                    className="menuItem menuHover"
                    onClick={handleClick}
                    className={(aboutShow) ? "unselected" : "menuHover"} 
                >
                    About
                </a>
                <a
                    name = "Contact"
                    className="menuItem menuHover"
                    onClick={handleClick}
                    // onClick={() => console.log("yes")}
                    className={(contactShow) ? "unselected" : "menuHover"} 
                >
                    Contact
                </a>
            </Col >
        </Container>
        );
    }
    
    export default Menu;