import React, { useState, useRef } from 'react';
import { Col, Container, Row, Collapse, Navbar, Nav, Button } from 'react-bootstrap'

import Photos from './Components/Photos'
import AlbumMenu from './Components/AlbumMenu'
import Menu from './Components/Menu'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import MainPannel from './Components/MainPannel';

const App = () => {

  const [albumFilter, setAlbumFilter] = useState("England")
  const [activeTab, setActiveTab] = useState('None')
  const activePhotos = useRef()

  const handleClick = event => {
    let filter = event.target.name
    activePhotos.current.childNodes.forEach((node, index) => setTimeout(() => node.style.opacity = 0, index*100))
    
    setTimeout(() => setAlbumFilter(filter), 500)
    setTimeout(() => {
      activePhotos.current.childNodes.forEach(node => node.style.opacity = 1)
      activePhotos.current.scrollLeft = 0
    }, 550)
  }

    return(
      <section className="app flex-column flex-md-row d-flex align-items-center justify-content-start" >

        <Menu handleClick={handleClick} albumFilter={albumFilter} activeTab={activeTab} setActiveTab={setActiveTab} setAlbumFilter={setAlbumFilter}/>
        
        <MainPannel handleClick={handleClick} albumFilter={albumFilter} activeTab={activeTab} activePhotos={activePhotos}/>

      </section>
    )
  } 

export default App;