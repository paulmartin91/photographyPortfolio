import React from 'react';
import { Col, Image } from 'react-bootstrap'

import '../Styles/photos.css';

//England
import E1 from '../PhotosMain/England/E1.jpg'
import E2 from '../PhotosMain/England/E2.jpg'
import E3 from '../PhotosMain/England/E3.jpg'
import E4 from '../PhotosMain/England/E4.jpg'
import E5 from '../PhotosMain/England/E5.jpg'
import E6 from '../PhotosMain/England/E6.jpg'
import E7 from '../PhotosMain/England/E7.jpg'
import E8 from '../PhotosMain/England/E8.jpg'
import E9 from '../PhotosMain/England/E9.jpg'

//France
import F1 from '../PhotosMain/France/F1.jpg'
import F2 from '../PhotosMain/France/F2.jpg'
import F3 from '../PhotosMain/France/F3.jpg'
import F4 from '../PhotosMain/France/F4.jpg'
import F5 from '../PhotosMain/France/F5.jpg'

//Greece
import G1 from '../PhotosMain/Greece/G1.jpg'
import G2 from '../PhotosMain/Greece/G2.jpg'
import G3 from '../PhotosMain/Greece/G3.jpg'
import G4 from '../PhotosMain/Greece/G4.jpg'

//Morocco
import M1 from '../PhotosMain/Morocco/M1.jpg'
import M2 from '../PhotosMain/Morocco/M2.jpg'
import M3 from '../PhotosMain/Morocco/M3.jpg'
import M4 from '../PhotosMain/Morocco/M4.jpg'
import M5 from '../PhotosMain/Morocco/M5.jpg'
import M6 from '../PhotosMain/Morocco/M5.jpg'
import M7 from '../PhotosMain/Morocco/M5.jpg'

//Portugal
import P1 from '../PhotosMain/Portugal/P1.jpg'
import P2 from '../PhotosMain/Portugal/P2.jpg'
import P3 from '../PhotosMain/Portugal/P3.jpg'
import P4 from '../PhotosMain/Portugal/P4.jpg'
import P5 from '../PhotosMain/Portugal/P5.jpg'



function Photos({ activePhotos, activeTab, albumFilter }) {

    const photos = {
        England: [E1, E2, E3, E4, E5, E6, E7, E8, E9],
        France: [F1, F2, F3, F4, F5],
        Morocco: [M1, M2, M3, M4, M5, M6, M7],
        Portugal: [P1, P2, P3, P4, P5],
        Greece: [G1, G2, G3, G4]
    }

    return (
        <Col
            className="photoMain p-0 d-flex flex-xl-row flex-column"
            ref={activePhotos}
        >
            {photos[albumFilter].map(x =>
                <Image style={{transition: '500ms'}} className="px-xl-2 py-2" fluid src={x} />
            )}
        </Col>
    );
}

export default Photos;