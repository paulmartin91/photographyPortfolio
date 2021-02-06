import React from 'react';
import FadeIn from 'react-fade-in';

import Me from "../PhotosMain/me.jpg"

import '../Styles/App.css';

const About = ({ activeTab }) => {
    const containerStyle = {
        maxWidth: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: 50,
        fontFamily: "Playfair Display"
    }
    return (
        <div 
            className="aboutBox"
            style = {(activeTab == 'About') ? {minWidth: "400px"} : {minWidth: "0"}}
        >
            {(activeTab == 'About') &&
                <div style={containerStyle}>
                    <FadeIn delay={300}>
                        <h1 >About me</h1> 
                        <p >Thanks for stopping by! I'm a software developer who likes to take pictures in his spare time. I take my camera along whenever I'm lucky enough to travel anywhere and I take photos of people or things I find interesting. Feel free to have a look around and please enjoy my photos!</p>
                        <img style={{width: 300}} src={Me}/>
                    </FadeIn>
                </div>
            }
        </div>
    )
}

export default About;