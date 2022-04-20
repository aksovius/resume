import React from 'react'
import '../css/About.css'
import photo from '../static/photo.jpeg'



const About = () => {
    return (
            <div className='container' id='about'>
                <div className='col'>
                    <img src={photo} alt='Alexander' />
                </div>
                <div className='col'>
                <p className='title'>About</p>
                <p className='list-primary'>I am a Graduate Researcher in the field of Smart Cities. Experienced with data analytics, computer vision techniques, and web development.</p>
                <a className='button' href={require("../static/CV.pdf")} download="CV">Download CV</a>
                </div>
            </div>
    );
};

export default About;