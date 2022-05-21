import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Card, CardContent} from "@mui/material";


const Publications = () => {
    return <Row className='section justify-content-center d-flex align-content-center'
                id='publications'>
        <Row className='justify-content-center'>
            <p className='title'>Publications</p>
        </Row>
        <Row  className='justify-content-center align-content-center g-1 g-md-3'>
        <Col>
        <Card border={ 'light' }>
            <CardContent>
                <p className='date'>2020</p>
                <p className='list-primary'>Kim A., Zhu Z., Lee K., Mun T., Kwon S.</p>
                <p className='list-secondary'>Development of User Interface for Temporary Structure Quality Evaluation
                    System Based on Multiple Sensing and BIM Model</p>
                <p className='list-tertiary'>The 26th Winter Conference of Society for Computational Design and
                    Engineering</p>

                <p className='date'>2020</p>
                <p className='list-primary'> Lee S., Kwon S., Jeong M., Hasan M., and Kim A.</p>
                <p className='list-secondary'>Automated On-Site Quality Inspection and Reporting Technology for Off-Site
                    Construction (OSC)-based Precast Concrete Members.</p>
                <p className='list-tertiary'>2020 Proceedings of the 37th ISARC </p>

            </CardContent>
        </Card>
        </Col>
        </Row>
    </Row>
};

export default Publications;