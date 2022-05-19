import React from 'react'
import '../css/About.css'
import photo from '../static/photo.jpeg'
import {Card, Col, Row} from "react-bootstrap";



const About = () => {
    return <Row id='about' className='about d-flex justify-content-center align-content-center'>
                <Col md={6} className={'d-flex justify-content-center'}>
                    <Card className={'frame'}>
                        <Card.Img src={photo} />
                    </Card>
                </Col>
                <Col md={6} className={'d-flex justify-content-center'}>
                    <Card border={'light'} >
                        <Card.Body>
                            <Card.Title className='title' >About </Card.Title>
                            <Card.Text>
                                <p className='list-primary'>I am a Graduate Researcher in the field of Smart Cities.
                                    Experienced with data analytics, computer vision techniques, and web development.</p>
                                <a className='btn' href={require("../static/CV.pdf")} download="CV">Download CV</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
             </Row>
};

export default About;