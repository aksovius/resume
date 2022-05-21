import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const Projects = ({image, project }) => {
    return <Card sx={{
        marginTop: 1,
        maxWidth: 345,
        padding:0
    }}>
        <CardMedia
            component="img"
            height="250"
            image={image.src}
            alt={image.alt}
        />
        <CardContent>
            <Typography variant="h5">
                {project.title}
            </Typography>
            <Typography variant='body' color='text.secondary' paragraph>
                {project.body}
            </Typography>
        </CardContent>
    </Card>
};

export default Projects;