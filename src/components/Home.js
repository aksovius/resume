import React from 'react'
import '../css/Home.css'
import Facebook from '../static/facebook.svg'
import LinkedIn from '../static/linkedin.svg'
import Instagram from '../static/instagram.svg'
import { Row} from "react-bootstrap";

const Home = () => {
    return (
        <Row className='home d-flex align-items-center justify-content-center' id='home'>
            <Row className='hello'>
                <p>Hello,</p>
                <p> I'm Alexander Kim</p>
                <p> Smart City Researcher</p>
                <a className='btn' href="#about">Who am I ?</a>
            </Row>

            <Row className="social-icons justify-content-end">
                <a href="https://www.facebook.com/aksovius" rel="noreferrer" target="_blank">
                    <img src={ Facebook }/>
                </a>
                <a href="https://www.instagram.com/aksovius" rel="noreferrer" target="_blank">
                    <img src={ Instagram }/>
                </a>
                <a href="https://www.linkedin.com/in/aksovius" rel="noreferrer" target="_blank">
                    <img src={ LinkedIn }/>
                </a>
            </Row>
        </Row>

    );
};

export default Home;