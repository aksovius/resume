import React from 'react'
import {Row} from "react-bootstrap";



const Experience = () => {
    return <Row className='section justify-content-center d-flex align-content-center'
                id='experience'>
                <p className='title'>Experience</p>
                <ul className='list-table'>
                    <li>
                        <p className='date'>2021.08-2022.05</p>
                        <p className='list-primary'><a href='https://deepinspection.ai/' target='_blank' rel="noreferrer">Deep Inspection Co. Ltd.</a></p>
                        <p className='list-secondary'>Research Engineer</p>
                        <p className='list-tertiary'>Developing a web based application</p>
                    </li>
                    <li>
                        <p className='date'>2018.01-2020.02</p>
                        <p className='list-primary'><a href='https://www.medonica.com/html/main.html' target='_blank' rel="noreferrer">Medonica Co. Ltd.</a></p>
                        <p className='list-secondary'>Medical Equipment Engineer</p>
                        <p className='list-tertiary'>Customer Service</p>
                    </li>
                </ul>
    </Row>
};

export default Experience;