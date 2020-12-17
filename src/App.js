import React from 'react';
import Photos from './Photos'
import AlbumMenu from './AlbumMenu'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      albumOpen: false,
      albumFilter: "All",
      kitShow: false,
    }
  }

  handleClick = (event) => {
    if (event.target.name == "album") {
      this.setState(prevState => ({
        albumOpen: !prevState.albumOpen,
        kitShow: false
    }));
    }

    if (event.target.name == "Kit") {
        // document.getElementsByClassName("photoMain")[0].src = KIT
        this.setState(prevState => ({
          kitShow: !prevState.kitShow,
          albumOpen: false
      }))
    }

    if (event.target.name == "albumFilter") {
      var nme = event.target.innerHTML
      console.log(nme)
      if (this.state.albumFilter != event.target.innerHTML) {
        let x = document.getElementsByClassName('photoMain')
        //fade existing photos
          for (let i = 0; i<x.length; i++) {
            // setTimeout(()=>x[i].style.opacity = 0, i*100)
            x[i].style.opacity = 0;
          }
      
          setTimeout(()=>{
            document.getElementById('photoMainBox').scrollLeft = 0 //this one
            this.setState({
              albumFilter: [nme]
            })
          }, 300)

      setTimeout(()=>{
        let x = document.getElementsByClassName('photoMain')
        for (let i = 0; i<x.length; i++) {
          // setTimeout(()=>x[i].style.opacity = 0, i*100)
          x[i].style.opacity = 1;
        }
      }, 350, nme)
      }
    }
  }

  render(){

    return(
      <section>
        <div className="app">
          <div className = "mainMenu">
          <div className="logo">PM PHOTOGRAPHY</div>
            <div className="menuItems">
              <a
                name = "album"
                className="menuItem"
                className={(this.state.albumOpen) ? "unselected" : "menuHover"}
                onClick={this.handleClick}>
                  Albums
              </a>
              <a
                name = "Kit"
                className="menuItem"
                className={(this.state.kitShow) ? "unselected" : "menuHover"}
                onClick={this.handleClick}
                >
                  Kit
              </a>
              <a
                name = "About"
                className="menuItem menuHover"
                // className={(this.state.albumOpen) ? "unselected" : "menuHover"} 
                >
                  About
              </a>
              <a
                name = "Contact"
                className="menuItem menuHover"
                // className={(this.state.albumOpen) ? "unselected" : "menuHover"} 
                >
                  Contact
              </a>
            </div>
          </div>
              <AlbumMenu albumOpen={this.state.albumOpen} handleClick={this.handleClick}/>
              <Photos albumOpen = {this.state.albumOpen} albumFilter={this.state.albumFilter} kitShow={this.state.kitShow}/>
        </div>
      </section>
    )
  } 
} 

export default App;
