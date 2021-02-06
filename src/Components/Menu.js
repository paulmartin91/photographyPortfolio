import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'

import Logo from "../PhotosMain/logo.png"
import AlbumMenu from './AlbumMenu'
import "../Styles/menu.css"

function Menu({ handleClick, albumFilter, activeTab, setActiveTab }) {

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
                        style={(activeTab == 'Album') ? { opacity: 0.5 } : { opacity: 1 }}
                        onClick={() => activeTab === 'Album' ? setActiveTab('None') : setActiveTab('Album')}
                    >
                        Albums
                    </a>
                    <a
                        as="P"
                        name = "Kit"
                        className="menuItem"
                        style={(activeTab == 'Kit') ? { opacity: 0.5 } : { opacity: 1 }}
                        onClick={() => activeTab === 'Kit' ? setActiveTab('None') : setActiveTab('Kit')}
                    >
                        Kit
                    </a>
                    <a
                        variant='light'
                        name = "About"
                        className="menuItem"
                        style={(activeTab == 'About') ? { opacity: 0.5 } : { opacity: 1 }}
                        onClick={() => activeTab === 'About' ? setActiveTab('None') : setActiveTab('About')}
                    >
                        About
                    </a>
                    <a
                        name = "Contact"
                        className="menuItem"
                        style={(activeTab == 'Contact') ? { opacity: 0.5 } : { opacity: 1 }} 
                        onClick={() => activeTab === 'Contact' ? setActiveTab('None') : setActiveTab('Contact')}
                    >
                        Contact
                    </a>
                </Row >
            </Col>
            <AlbumMenu 
                className = "d-none d-md-flex" 
                activeTab={activeTab} 
                albumFilter={albumFilter}
                handleClick={handleClick} 
            />
        </Container>
    );
}
    
    export default Menu;