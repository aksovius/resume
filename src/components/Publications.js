import React from 'react';
import {Row} from "react-bootstrap";


const Publications = () => {
    return <Row className='section justify-content-center d-flex align-content-center pt-lg-5'
                id='publications'>
            <p className='title'>Publications</p>
            <ul className='list-table'>
                <li>
                    <p className='date'>2020</p>
                    <p className='list-primary'>Kim A., Zhu Z., Lee K., Mun T., Kwon S.</p>
                    <p className='list-secondary'>Development of User Interface for Temporary Structure Quality Evaluation System Based on Multiple Sensing and BIM Model</p>
                    <p className='list-tertiary'>The 26th Winter Conference of Society for Computational Design and Engineering</p>
                </li>
                <li>
                    <p className='date'>2020</p>
                    <p className='list-primary'> Lee S., Kwon S., Jeong M., Hasan M., and Kim A.</p>
                    <p className='list-secondary'>Automated On-Site Quality Inspection and Reporting Technology for Off-Site Construction (OSC)-based Precast Concrete Members.</p>
                    <p className='list-tertiary'>2020 Proceedings of the 37th ISARC </p>
                </li>
            </ul>
    </Row>
};

export default Publications;