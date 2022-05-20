import React from 'react'
import '../css/Home.css'
import Facebook from '../static/facebook.svg'
import LinkedIn from '../static/linkedin.svg'
import Instagram from '../static/instagram.svg'
import {Col, Row} from "react-bootstrap";
import {Button} from "@mui/material";

const Home = () => {
    return (
        <Row className='home d-flex align-items-center justify-content-center' id='home'>
            <Row className='hello mb-5'>
                <p>Hello,</p>
                <p> I'm Alexander Kim</p>
                <p> Smart City Researcher</p>
                <Col  md={{ span: 3, offset: 4 }}>
                    <Button size="large" variant="outlined" href="#about">Who am I ?</Button>
                </Col>
            </Row>

            <Row className="social-icons justify-content-end">
                <a href="https://www.facebook.com/aksovius" rel="noreferrer" target="_blank">
                    <img alt={'Facebook'} src={ Facebook }/>
                </a>
                <a href="https://www.instagram.com/aksovius" rel="noreferrer" target="_blank">
                    <img  alt='Instagram' src={ Instagram }/>
                </a>
                <a href="https://www.linkedin.com/in/aksovius" rel="noreferrer" target="_blank">
                    <img alt={'LinkedId'} src={ LinkedIn }/>
                </a>
            </Row>
        </Row>

    );
};

export default Home;