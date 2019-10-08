import React from 'react';
import Photos from './Photos'
import './App.css';
import BG1 from './PhotosMain/BG1.png'
import BG2 from './PhotosMain/BG2.png'
import BG3 from './PhotosMain/BG3.png'
import BG4 from './PhotosMain/BG4.png'
import BG5 from './PhotosMain/BG5.png'
import BG6 from './PhotosMain/BG6.png'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <section>
        <div className="app">
          <div className = "mainMenu">
          <div className="logo">LOGO</div>
            <div className="menuItems">
              <a className="menuItem">Home</a>
              <a className="menuItem">Albums</a>
              <a className="menuItem">About</a>
              <a className="menuItem">Contact</a>
            </div>
          </div>
          <div className="photosMainBox">
            <Photos photo={BG1}/>
            <Photos photo={BG2}/>
            <Photos photo={BG3}/>
            <Photos photo={BG4}/>
            <Photos photo={BG5}/>
            <Photos photo={BG6}/>
          </div>
        </div>
      </section>
    )
  } 
} 

export default App;