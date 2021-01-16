import React from 'react';
import FadeIn from 'react-fade-in';
import { Col, Container, Row } from 'react-bootstrap'

import '../Styles/albumMenu.css';
import { Collapse } from 'react-bootstrap';

const AlbumMenu = ({ albumOpen, handleClick, albumFilter }) => {

  const albums = [
    "All",
    "Jungle",
    "Desert",
    "England",
    "Tundra"
  ]

  return (
    <div
      //className="col-2 d-flex flex-column justify-content-end"
      className="d-flex flex-md-column flex-row justify-content-md-end justify-content-center"
    >
      {/* <Row 
        className="albumMenuItems m-0 d-flex flex-row flex-md-column justify-content-md-between justify-content-between"
        
      > */}
        <Row 
          className="albumMenuItems m-0 d-flex flex-row flex-md-column justify-content-between"
          style={(albumOpen) ? { maxWidth: "300px", minHeight: '50px'} : { maxWidth: "0", minHeight: '0px'}}  
        >
          {(albumOpen) && albums.map((x, y) =>
            
            <FadeIn delay={y * 200}>
              <a
                className="menuItem" 
                style={(albumFilter == x) ? { opacity: 0.5 } : { opacity: 1 }}
                name="albumFilter" 
                onClick={handleClick}

              >
                {x}
              </a>
            </FadeIn>
          )}
        </Row>
      {/* </Row> */}
    </div >
  )
}

export default AlbumMenu;