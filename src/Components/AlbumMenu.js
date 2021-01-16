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
      className="albumsBox"
      style={(albumOpen) ? { maxWidth: "200px" } : { maxWidth: "0" }}
    >
      <Row 
        className="albumMenuItems d-flex flex-column justify-content-between"
      >
        <Row className="albumMenuItems d-flex flex-column justify-content-between">
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
      </Row>
    </div >
  )
}

export default AlbumMenu;