import React from 'react';
import { Col, Image } from 'react-bootstrap'

import BG1 from '../PhotosMain/BG1.jpg'
import BG2 from '../PhotosMain/BG2.jpg'
import BG3 from '../PhotosMain/BG3.jpg'
import BG4 from '../PhotosMain/BG4.jpg'
import BG5 from '../PhotosMain/BG5.jpg'
import BG6 from '../PhotosMain/BG6.jpg'
import BG7 from '../PhotosMain/BG7.jpg'
import BG8 from '../PhotosMain/BG8.jpg'
import BG9 from '../PhotosMain/BG9.jpg'
import BG10 from '../PhotosMain/BG10.jpg'

import KitPannel from './KitPannel'
import About from './About'
import Contact from './Contact'

import '../Styles/App.css';

const Photos = ({ albumOpen, kitShow, aboutShow, contactShow, albumFilter }) => {

    const photos = {
        All: [BG1, BG2, BG3, BG4, BG5, BG6, BG7, BG8, BG9, BG10],
        Jungle: [BG1, BG2, BG3],
        Desert: [BG4, BG5],
        England: [BG6, BG7, BG8],
        Tundra: [BG9, BG10]
      }

    return (
        <div className="photosMainBox" id='photoMainBox' >
            <KitPannel albumOpen = {albumOpen} kitShow={kitShow} />
            <About albumOpen = {albumOpen} aboutShow={aboutShow} />
            <Contact albumOpen = {albumOpen} contactShow={contactShow} />
            <Col 
                className="photoMain pl-0 pl-md-2 d-flex flex-xl-row flex-column"
            >
                {photos[albumFilter].map(x =>
                    <Image className="px-xl-2 py-2" fluid src={x} />
                )}
            </Col>
        </div>
    )
}

export default Photos;