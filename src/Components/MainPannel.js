import React from 'react';

import KitPannel from './KitPannel'
import About from './About'
import Contact from './Contact'
import Photos from './Photos'

// import '../Styles/App.css';

const MainPannel = ({ activeTab, albumFilter, photoBox, activePhotos }) => {

   return (
        <div className="mainPannel" ref={photoBox} >
            <KitPannel activeTab = {activeTab} />
            <About activeTab = {activeTab} />
            <Contact  activeTab = {activeTab}/>
            <Photos activeTab = {activeTab} albumFilter={albumFilter} activePhotos={activePhotos} />
        </div>
    )
}

export default MainPannel;