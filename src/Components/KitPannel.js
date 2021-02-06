import React from 'react';
import FadeIn from 'react-fade-in';

import KIT1 from '../PhotosMain/KIT1.jpg'
import KIT2 from '../PhotosMain/KIT2.jpg'
import KIT3 from '../PhotosMain/KIT3.jpg'
import KIT4 from '../PhotosMain/KIT4.jpg'
import KIT5 from '../PhotosMain/KIT5.jpg'
import KIT6 from '../PhotosMain/KIT5.jpg'
import KIT7 from '../PhotosMain/KIT7.jpg'
import KIT8 from '../PhotosMain/KIT8.jpg'

import '../Styles/App.css';

const KitPannel = ({ activeTab }) => {

    const kit = [
        KIT1, KIT2, KIT3, KIT4, KIT5, KIT6, KIT7, KIT8
    ]

    return (
        <div 
            className="kitBox"
            style = {(activeTab == 'Kit') ? {minWidth: "610px"} : {minWidth: "0"}}
        >
            {(activeTab == 'Kit') && kit.map((x, y)=>
                <FadeIn delay={(y==0) ? 500 : 500+y*200}>
                    <img className="kitPics" src={x} />
                </FadeIn>
            )}
        </div>
    )
}

export default KitPannel;