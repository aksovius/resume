import React from 'react'
import photo from '../static/photo.jpeg'
import { Col, Row} from "react-bootstrap";
import {Button} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';

const About = () => {
    return <Row id='about' className='section d-flex justify-content-center'>
                <Col className='justify-content-center' xs={11}   sm={6} md={4}>
                    <Card>
                            <CardMedia
                                component="img"
                                image={photo}
                                alt="Photo"
                            />
                    </Card>
                </Col>
                <Col  className={'justify-content-center'} xs={11} sm={6} md={6}>
                    <p className='title'> About
                    </p>
                    <Card border={'light'} >
                        <CardContent>

                                <p className='list-secondary'>I am a Graduate Researcher in the field of Smart Cities.
                                    Experienced with data analytics, computer vision techniques, and web development.</p>
                               <Button
                                   size="large"
                                   variant="outlined"
                                   href={require("../static/CV.pdf")}>
                                   Download CV
                               </Button>
                        </CardContent>
                    </Card>

                </Col>
             </Row>
};

export default About;