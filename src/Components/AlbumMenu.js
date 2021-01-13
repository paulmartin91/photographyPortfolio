import React from 'react';
import FadeIn from 'react-fade-in';
import { Col, Container } from 'react-bootstrap'

import '../Styles/albumMenu.css';

const AlbumMenu = ({ albumOpen, handleClick }) => {

  const albums = [
    "All",
    "Jungle",
    "Desert",
    "England",
    "Tundra"
  ]

  return (
    <div
      className="albumsBox"
      style={(albumOpen) ? { minWidth: "200px" } : { minWidth: "0" }}
    >
      <Col
        className="albums"
      >
        <Col className="albumTabs d-flex flex-column align-items-center justify-content-between">
          {(albumOpen) && albums.map((x, y) =>
            <FadeIn delay={y * 200}>
              <a className="menuItems" name="albumFilter" onClick={handleClick}>
                {x}
              </a>
            </FadeIn>
          )}
        </Col>
      </Col>
    </div >
  )
}

export default AlbumMenu;