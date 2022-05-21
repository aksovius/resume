import React from 'react';
import {Col, Row} from "react-bootstrap";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Hobby = () => {
    return <Row className='section justify-content-center d-flex align-content-center'
                id='hobby'>
        <Col md={ 5 }>
            <Card sx={ {minWidth: 275} }>
                <CardContent>
                    <Typography variant="h5" paragraph>
                        Traveling and cycling in my passion.<br/>
                        I'm never the fastest rider out there but I happily go at my own pace,
                        whether along familiar roads or while exploring new places.
                        I can see a lot when I'm traveling on two wheels, and get a great workout at the same time
                    </Typography>
                </CardContent>
            </Card>
        </Col>
        <Col className={ 'justify-content-center' } md={ 5 }>
            <ImageList
                variant="quilted"
                cols={ 5 }
                rowHeight={ 121 }
            >
                <ImageListItem cols={ 3 } rows={ 1 }>
                    <img src='/photos/627EE326-D825-4EAC-A6D3-ADEDB9BB15F6.jpg' alt= 'ansan' />
                </ImageListItem>
                <ImageListItem cols={ 2 } rows={ 3 }>
                    <img src='/photos/IMG_0795.jpg' alt='ansan'/>
                </ImageListItem>
                <ImageListItem cols={ 3 } rows={ 2 }>
                    <img src='/photos/IMG_0900.jpg' alt='ansan'/>
                </ImageListItem>
                <ImageListItem cols={ 5 } rows={ 2 }>
                    <img src='/photos/IMG_0934.jpg' alt='ansan'/>
                </ImageListItem>
            </ImageList>
        </Col>
    </Row>

};

export default Hobby;
