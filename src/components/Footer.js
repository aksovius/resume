import React from 'react'
import '../css/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#education'>Education</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#publications'>Publications</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#hobby'>Hobby</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
