import React from 'react';
import FadeIn from 'react-fade-in';

import './App.css';

const Contact = (props) => {
    return (
        <div 
        className="contactBox"
        style = {(props.contactShow && !props.albumOpen) ? {minWidth: "510px"} : {minWidth: "0"}}
        >
            {(props.contactShow) && <FadeIn delay={200}> <p>Hello World!</p> </FadeIn>}
        </div>
    )
}

export default Contact;