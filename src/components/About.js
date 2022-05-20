import React from 'react'
import '../css/About.css'
import photo from '../static/photo.jpeg'
import {Card, Col, Row} from "react-bootstrap";
import {Button} from "@mui/material";



const About = () => {
    return <Row id='about' className='about d-flex justify-content-center'>
                <Col className='justify-content-center' xs={11} md={4}  sm={6}>
                    <Card>
                        <Card.Img src={photo}  />
                    </Card>
                </Col>
                <Col  className={'justify-content-center'} xs={11} md={5}  sm={6}>
                    <Card border={'light'} >
                        <Card.Body>
                            <Card.Title className='title' >About </Card.Title>
                            <Card.Text>
                                <p className='list-primary'>I am a Graduate Researcher in the field of Smart Cities.
                                    Experienced with data analytics, computer vision techniques, and web development.</p>
                               <Button
                                   size="large"
                                   variant="outlined"
                                   href={require("../static/CV.pdf")}>
                                   Download CV
                               </Button>

                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
             </Row>
};

export default About;