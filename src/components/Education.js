import React from 'react'
import {Col, Row} from "react-bootstrap";
import {Card, Typography} from "@mui/material";
import CardContent from "@mui/material/CardContent";

const Education = () => {
    return <Row className='section justify-content-center d-flex align-content-center'
     id='education'>
        <Row className='justify-content-center'>
            <p className='title'>Education</p>
        </Row>
        <Row className='g-1 g-md-3'>
            <Col>
                <Card sx={{
                    marginTop: 1
                }}>
                    <CardContent>
                        <p className='date'>2020-2022</p>
                        <p className='list-primary'>Sungkyunkwan University</p>
                        <p className='list-secondary'>Master of Science in Engineering</p>
                        <p className='list-tertiary'>Convergence Engineering for Future City</p>
                        <br/>
                        <p className='date'>2008-2013</p>
                        <p className='list-primary'> National Research Nuclear University (MEPhI)</p>
                        <p className='list-secondary'><a href='https://en.wikipedia.org/wiki/Specialist_degree' target='_blank' rel="noreferrer">Specialist degree</a></p>
                        <p className='list-tertiary'>Industrial and Civil Engineering</p>
                    </CardContent>
                </Card>
                <Card sx={{
                    marginTop: 1
                }}>
                    <CardContent>
                        <Typography variant="h4" paragraph>
                            Courses
                        </Typography>
                        <Typography variant="h5">
                            Big Data AI bootcamp
                        </Typography>
                        <Typography variant="h7" color='text.secondary' paragraph>
                            60 hours
                        </Typography>
                        <Typography variant="h5">
                            TensorFlow: Advanced Techniques by DeepLearning.AI
                        </Typography>
                        <Typography variant="h7" color='text.secondary' paragraph >
                            Coursera online
                        </Typography>
                        <Typography variant="h5">
                            DeepLearning.AI TensorFlow Developer by DeepLearning.AI
                        </Typography>
                        <Typography variant="h7" color='text.secondary' >
                            Coursera online
                        </Typography>
                    </CardContent>
                </Card>
            </Col>
            <Col>
                <Card sx={{
                    marginTop: 1
                }}>
                    <CardContent>
                        <Typography variant="h4" paragraph>
                            Programming Skills
                        </Typography>
                        <Typography variant="h5">
                            Python
                        </Typography>
                        <Typography variant="h7" color='text.secondary' paragraph>
                            Tensorflow, Pandas, Scikit-learn
                        </Typography>
                        <Typography variant="h5">
                            Java Scripts
                        </Typography>
                        <Typography variant="h7" color='text.secondary' paragraph >
                            NodeJS, React, Express, MobX
                        </Typography>
                        <Typography variant="h5">
                            Image Processing
                        </Typography>
                        <Typography variant="h7" color='text.secondary' >
                            U-net, Mask R-CNN, ResNet, MobileNet
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                    marginTop: 1
                }}>
                    <CardContent>
                        <Typography variant="h4" paragraph>
                            Languages
                        </Typography>
                        <Typography variant="h5">
                            English
                        </Typography>
                        <Typography variant="h7" color='text.secondary' paragraph>
                            TOEFL 71, IETLS 6.0
                        </Typography>
                        <Typography variant="h5">
                            Korean
                        </Typography>
                        <Typography variant="h7" color='text.secondary' paragraph >
                            TOPIK 5
                        </Typography>
                        <Typography variant="h5">
                            Russian
                        </Typography>
                        <Typography variant="h7" color='text.secondary' >
                            NATIVE
                        </Typography>
                    </CardContent>
                </Card>

            </Col>
        </Row>


    </Row>
};

export default Education;