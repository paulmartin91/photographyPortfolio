import React, { useState } from 'react';
import { Col, Container, Row, Collapse, Navbar, Nav, Button } from 'react-bootstrap'

import Photos from './Components/Photos'
import AlbumMenu from './Components/AlbumMenu'
import Menu from './Components/Menu'

import 'bootstrap/dist/css/bootstrap.min.css';
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
      <section className="app" >
        <Menu handleClick={handleClick} albumOpen = {albumOpen} albumFilter={albumFilter} kitShow={kitShow} aboutShow={aboutShow} contactShow={contactShow}/>
        <AlbumMenu className = "d-none d-md-flex" albumOpen={albumOpen} handleClick={handleClick}/>
        <Photos albumOpen = {albumOpen} albumFilter={albumFilter} kitShow={kitShow} aboutShow={aboutShow} contactShow={contactShow}/>
      </section>
    )
  } 

export default App;
