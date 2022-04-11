import React from 'react'
import '../css/About.css'
import photo from '../static/sample.jpg'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={photo} alt='Alexander' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
                    <p>I am , a graduate researcher for "an independently owned financial planning company called" Deep Inspection.</p>
                    <TableContainer className='table'>
                        <Table>
                            <TableBody>
                                <TableRow className='tr'>
                                        <TableCell className='tc'>
                                        <label>Birthday</label>
                                        </TableCell>
                                        <TableCell className='tc' align="right">
                                        January 12th 1991
                                        </TableCell>
                                </TableRow>
                                <TableRow>
                                        <TableCell className='tc' >
                                        <label>Location</label>
                                        </TableCell>
                                        <TableCell  className='tc' align="right">
                                        Seoul
                                        </TableCell>
                                </TableRow>    
                                <TableRow>
                                        <TableCell  className='tc'>
                                        <label>email</label>
                                        </TableCell>
                                        <TableCell  className='tc' align="right">
                                        January 12th 1991
                                        </TableCell>
                                </TableRow>                               
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <a className='button' href={require("../static/CV.pdf")} download="CV">Download CV</a>
                </div>
            </div>
        </div>
    );
};

export default About;