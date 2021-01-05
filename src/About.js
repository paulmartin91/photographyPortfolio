import React from 'react';
import FadeIn from 'react-fade-in';

import './App.css';

const About = (props) => {
    return (
        <div 
        className="aboutBox"
        style = {(props.aboutShow && !props.albumOpen) ? {minWidth: "510px"} : {minWidth: "0"}}
        >
            {(props.aboutShow) && <FadeIn delay={200}> <p>Hello World!</p> </FadeIn>}
        </div>
    )
}

export default About;