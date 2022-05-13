import React from 'react'
import '../css/Home.css'
import Facebook from '../static/facebook.svg'
import LinkedIn from '../static/linkedin.svg'
import Instagram from '../static/instagram.svg'
const Home = () => {
    return(
        <div className='home' id='home'>
            <div className='content'>
            
                <p>Hello,</p>
                <p> I'm Alexander Kim</p>
                <p> Smart City Researcher</p>
                <a className='btn' href="#about">Who am I ?</a>
                <div className="social-icons">
                <a href="https://www.facebook.com/aksovius" rel="noreferrer" target="_blank">
                <img src={Facebook}/>
                </a>
                <a href="https://www.instagram.com/aksovius" rel="noreferrer" target="_blank">
                    <img src={Instagram}/>
                </a>
                <a href="https://www.linkedin.com/in/aksovius" rel="noreferrer" target="_blank">
                    <img src={LinkedIn}/>
                </a>
                </div>
            </div>
        </div>

    );
};

export default Home;