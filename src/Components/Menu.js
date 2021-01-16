import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'

import Logo from "../PhotosMain/logo.png"
import AlbumMenu from './AlbumMenu'
import "../Styles/menu.css"

function Menu({ albumOpen, albumFilter, kitShow, aboutShow, contactShow, handleClick }) {
    return (
        // <Container className="menuHolder d-none d-md-flex flex-direction-row">
        <Container fluid className="d-flex flex-column flex-md-row p-0 mt-2">
            <Col className = "mainMenu d-flex flex-row flex-md-column align-items-center justify-content-start justify-content-md-between">
            {/* <Col className = "d-flex "> */}
                {/* <Row className="logoContainer d-flex flex-column justify-content-start"> */}
                    <img src={Logo} className="logo"></img>
                {/* </Row> */}
                <Row className="col-8 menuItems ml-2 d-flex flex-row flex-md-column justify-content-between">
                    <a
                        name = "album"
                        className="menuItem"
                        style={(albumOpen) ? { opacity: 0.5 } : { opacity: 1 }}
                        onClick={handleClick}
                    >
                        Albums
                    </a>
                    <a
                        name = "Kit"
                        className="menuItem"
                        style={(kitShow) ? { opacity: 0.5 } : { opacity: 1 }}
                        onClick={handleClick}
                    >
                        Kit
                    </a>
                    <a
                        name = "About"
                        className="menuItem"
                        onClick={handleClick}
                        style={(aboutShow) ? { opacity: 0.5 } : { opacity: 1 }}
                    >
                        About
                    </a>
                    <a
                        name = "Contact"
                        className="menuItem"
                        onClick={handleClick}
                        // onClick={() => console.log("yes")}
                        style={(contactShow) ? { opacity: 0.5 } : { opacity: 1 }} 
                    >
                        Contact
                    </a>
                </Row >
            </Col>
            <AlbumMenu className = "d-none d-md-flex" albumOpen={albumOpen} handleClick={handleClick} albumFilter={albumFilter}/>
        </Container>
    );
}
    
    export default Menu;