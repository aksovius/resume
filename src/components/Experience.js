import React from 'react'
import {Col, Row} from "react-bootstrap";
import {Card, CardContent, Typography} from "@mui/material";


const Experience = () => {
    return <Row className='section justify-content-center d-flex align-content-center'
                id='experience'>
        <Row className='justify-content-center'>
            <p className='title'>Experience</p>
        </Row>
        <Row className='g-1 g-md-3'>
        <Col md={6}>
        <Card sx={{
            marginTop: 1
        }}>
            <CardContent>
                        <p className='date'>2021.08-2022.05</p>
                        <p className='list-primary'><a href='https://deepinspection.ai/' target='_blank' rel="noreferrer">Deep Inspection Co. Ltd.</a></p>
                        <p className='list-secondary'>Research Engineer</p>
                        <p className='list-tertiary'>Developing a web based application</p>
                        <br/>
                        <p className='date'>2018.01-2020.02</p>
                        <p className='list-primary'><a href='https://www.medonica.com/html/main.html' target='_blank' rel="noreferrer">Medonica Co. Ltd.</a></p>
                        <p className='list-secondary'>Medical Equipment Engineer</p>
                        <p className='list-tertiary'>Customer Service</p>

            </CardContent>
        </Card>
        </Col>
        <Col md={6}>
            <Card sx={{
                marginTop: 1
            }}>
                <CardContent>
                    <Typography variant="h4" paragraph>
                        Projects
                    </Typography>
                    <Typography variant="h5">
                        Web application for scaffolding management
                    </Typography>
                    <Typography variant='body' color='text.secondary' paragraph>
                        React web application with NodeJS-Express backend and PostgreSQL database
                        for construction scaffolding management and quality inspection based on Computer Vision.
                    </Typography>
                    <Typography variant="h5">
                        Precast concrete inspection
                    </Typography>
                    <Typography variant="h7" color='text.secondary' paragraph >
                        Semantic segmentation-based deformation detection on the precast concrete surface.
                    </Typography>
                    <Typography variant="h5">
                        Digital twin
                    </Typography>
                    <Typography variant="h7" color='text.secondary' paragraph >
                        3D model with real-time shape modification dependent on Arduino sensors value.
                    </Typography>
                    <Typography variant="h5">
                        IoT
                    </Typography>
                    <Typography variant="h7" color='text.secondary' >
                        Visualization real-time sensors values in web application
                    </Typography>
                </CardContent>
            </Card>
        </Col>
        </Row>
    </Row>
};

export default Experience;