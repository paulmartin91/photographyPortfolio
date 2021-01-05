import React from 'react';
import './App.css';
import BG1 from './PhotosMain/BG1.jpg'
import BG2 from './PhotosMain/BG2.jpg'
import BG3 from './PhotosMain/BG3.jpg'
import BG4 from './PhotosMain/BG4.jpg'
import BG5 from './PhotosMain/BG5.jpg'
import BG6 from './PhotosMain/BG6.jpg'
import BG7 from './PhotosMain/BG7.jpg'
import BG8 from './PhotosMain/BG8.jpg'
import BG9 from './PhotosMain/BG9.jpg'
import BG10 from './PhotosMain/BG10.jpg'

import KitPannel from './KitPannel'
import About from './About'
import Contact from './Contact'

const Photos = (props) => {

    const photos = {
        All: [BG1, BG2, BG3, BG4, BG5, BG6, BG7, BG8, BG9, BG10],
        Jungle: [BG1, BG2, BG3],
        Desert: [BG4, BG5],
        England: [BG6, BG7, BG8],
        Tundra: [BG9, BG10]
      }

    return (
        // <section id="albumFilter" className="photosMainBox" >
        // {photos[props.albumFilter].map((x, y)=>
        //         (y==0 && props.kitShow) ? 
        //             <CrossfadeImage src={KIT} className="photoMain"/> 
        //             : 
        //             <CrossfadeImage src={x} className="photoMain"/>
        //         )}
        // </ section>
        <div className="photosMainBox" id='photoMainBox'>
            <KitPannel albumOpen = {props.albumOpen} kitShow={props.kitShow} />
            <About albumOpen = {props.albumOpen} aboutShow={props.aboutShow} />
            <Contact albumOpen = {props.albumOpen} contactShow={props.contactShow} />
            {photos[props.albumFilter].map((x, y)=>
                <img src={x} class = "photoMain"/>
            )}
        </div>
        
    )
}

export default Photos;