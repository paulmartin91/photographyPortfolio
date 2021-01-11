import React from 'react';
import FadeIn from 'react-fade-in';

import '../Styles/App.css';

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
      <div
        className="albums"
        style={(albumOpen) ? { minWidth: "200px" } : { minWidth: "0" }}
      >
        {(albumOpen) && albums.map((x, y) =>
          <FadeIn delay={y * 200}>
            <a className="menuItem menuHover" name="albumFilter" onClick={handleClick}>
              {x}
            </a>
          </FadeIn>)
        }
      </div>
    </div>
  )
}

export default AlbumMenu;