import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './../combined.css';

export default function ProjectCard({ title, description, imageUrl, projectUrl, sourceCodeUrl }) {
    return (
        <>

            <Card sx={{ maxWidth: 215, ml: 2, backgroundColor:'#badee8' }} className='projectCard'>
                <CardMedia
                    component="img"
                    alt={title}
                    height="100"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Project</Button>
                    <Button size="small">Source Code</Button>
                </CardActions>
            </Card>


        </>
    );
}
