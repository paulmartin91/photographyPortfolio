import React, { useState } from 'react';
import Photos from './Components/Photos'
import AlbumMenu from './Components/AlbumMenu'
import Logo from "./PhotosMain/logo.png"

import './Styles/App.css';

const App = () => {

  const [albumOpen, setAlbumOpen] = useState(false)
  const [albumFilter, setAlbumFilter] = useState("All")
  const [kitShow, setKitShow] = useState(false)
  const [aboutShow, setAboutShow] = useState(false)
  const [contactShow, setContactShow] = useState(false)
  
  const handleClick = event => {
    if (event.target.name == "album") {
      setAlbumOpen(prevState => !prevState)
      setAboutShow(false)
      setKitShow(false)
      setContactShow(false) 
    }

    if (event.target.name == "Kit") {
      setAlbumOpen(false)
      setKitShow(prevState => !prevState)
      setAboutShow(false)
      setContactShow(false)
    }

    if (event.target.name == "About") {
      setKitShow(false)
      setAboutShow(prevState => !prevState)
      setAlbumOpen(false)
      setContactShow(false)
    }

    if (event.target.name == "Contact") {
      setAlbumOpen(false)
      setKitShow(false)
      setAboutShow(false)
      setContactShow(prevState => !prevState)
    }

    if (event.target.name == "albumFilter") {
      var nme = event.target.innerHTML

      if (albumFilter != event.target.innerHTML) {
        let x = document.getElementsByClassName('photoMain')
        
        //fade existing photos
        for (let i = 0; i<x.length; i++) {
          x[i].style.opacity = 0;
        }
      
        setTimeout(()=>{
          document.getElementById('photoMainBox').scrollLeft = 0
          setAlbumFilter(nme)
        }, 300)

        setTimeout(()=>{
          let x = document.getElementsByClassName('photoMain')
          for (let i = 0; i<x.length; i++) {
            x[i].style.opacity = 1;
          }
        }, 350, nme)
      }
    }
  }

    return(
      <section>
        <div className="app">
          <div className = "mainMenu">
          <div className="logo">
            <img src={Logo} width= "200"></img>
          </div>
            <div className="menuItems">
              <a
                name = "album"
                className="menuItem"
                className={(albumOpen) ? "unselected" : "menuHover"}
                onClick={handleClick}>
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
            </div>
          </div>
              <AlbumMenu albumOpen={albumOpen} handleClick={handleClick}/>
              <Photos albumOpen = {albumOpen} albumFilter={albumFilter} kitShow={kitShow} aboutShow={aboutShow} contactShow={contactShow}/>
        </div>
      </section>
    )
  } 

export default App;
