import React from 'react'
import '../css/About.css'
import photo from '../static/photo.jpeg'



const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col'>
                    <img src={photo} alt='Alexander' />
                </div>
                <div className='col'>
                    <div className='title'>
                        <h2>About</h2>
                    </div>
                   
                    <p>I am a Graduate Researcher in the field of Smart Cities. Experienced with data analytics, computer vision techniques, and web development.</p>
                    <a className='button' href={require("../static/CV.pdf")} download="CV">Download CV</a>
                </div>
            </div>
        </div>
    );
};

export default About;