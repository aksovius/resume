import React from 'react'
import {Row} from "react-bootstrap";



const Experience = () => {
    return <Row className='justify-content-center d-flex align-content-center pt-lg-5'
                id='experience'>
            <div className='container' >
                <p className='title'>Experience</p>
                <ul className='list-table'>
                    <li>
                        <p className='date'>2021.08-2022.05</p>
                        <p className='list-primary'><a href='http://deepinspection.ai/' target='_blank'>Deep Inspection Co. Ltd.</a></p>
                        <p className='list-secondary'>Research Engineer</p>
                        <p className='list-tertiary'>Developing a web based application</p>
                    </li>
                    <li>
                        <p className='date'>2018.01-2020.02</p>
                        <p className='list-primary'><a href='http://www.medonica.com/html/main.html' target='_blank'>Medonica Co. Ltd.</a></p>
                        <p className='list-secondary'>Medical Equipment Engineer</p>
                        <p className='list-tertiary'>Customer Service</p>
                    </li>
                </ul>
            </div>
    </Row>
};

export default Experience;