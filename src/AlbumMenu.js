import React from 'react';
import FadeIn from 'react-fade-in';
import './App.css';

const AlbumMenu = (props) => {

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
        style = {(props.albumOpen) ? {minWidth: "200px"} : {minWidth: "0"}}
      >
        <div 
        className="albums"
        style = {(props.albumOpen) ? {minWidth: "200px"} : {minWidth: "0"}}
        >
          {(props.albumOpen) && albums.map((x, y)=>
             <FadeIn delay={y*200}>
               <a className="menuItem menuHover" name ="albumFilter" onClick={props.handleClick}>
                {x}
               </a>
              </FadeIn>)
            }
        </div>
       </div>
    )
}

export default AlbumMenu;