import React from 'react';
import FadeIn from 'react-fade-in';


import './App.css';

//logos
import FCC from './PhotosMain/FCC.png'
import Github from './PhotosMain/Github.png'
import CodeWars from './PhotosMain/CodeWars.png'
import LinkedIn from './PhotosMain/LinkedIn.png'

const Contact = (props) => {
    return (
        <div 
        className="contactBox"
        style = {(props.contactShow && !props.albumOpen) ? {minWidth: "510px"} : {minWidth: "0"}}
        >
            {(props.contactShow) && 
            <FadeIn delay={350}>
                <section className='contactHolder'>
                    <p>Say Hi <span role="img">👋</span></p>
                        <p2>Email: <a href="mailto:pauledwardmartin91@gmail.com" >pauledwardmartin91@gmail.com</a></p2>
                    <div className = "socialAll">
                         <FadeIn delay={350}> <a href="https://www.freecodecamp.org/paulmartin" target="_blank"><img src={FCC} className="socialImages" alt="Free Code Camp"/></a>   </FadeIn>
                         <FadeIn delay={400}> <a href="https://github.com/paulmartin91/" target="_blank"><img src={Github} className="socialImages" alt="Github"/></a>  </FadeIn>
                         <FadeIn delay={450}> <a href="https://www.codewars.com/users/paulimo/completed" target="_blank"><img src={CodeWars} className="socialImages" alt="Codewars"/></a> </FadeIn>
                         <FadeIn delay={500}> <a href="https://www.linkedin.com/in/paul-martin-35b24569/" target="_blank"><img src={LinkedIn} className="socialImages" alt="LinkedIn"/></a> </FadeIn>
                    </div> 
                </ section>
            </FadeIn>}
        </div>
    )
}

export default Contact;