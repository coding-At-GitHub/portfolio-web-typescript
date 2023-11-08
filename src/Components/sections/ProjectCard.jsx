import * as React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import './../combined.css';


export default function ProjectCard({ title, description, imageUrl, projectUrl, sourceCodeUrl }) {
    return (
        <>
            <Card sx={{ maxWidth: 215, ml: 2, backgroundColor: '#badee8' }} className='projectCard'>
                <CardMedia component="img" alt={title} image={imageUrl} height="100" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"> {title} </Typography>
                    <Typography variant="body2" color="text.secondary"> {description} </Typography>
                </CardContent>
                <CardActions >
                    <Stack
                        className="project-links"
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        <Chip label="View Project" component="a" href={projectUrl} clickable size="small" />
                        <Chip label="Source Code" component="a" href={sourceCodeUrl} clickable size="small" />
                    </Stack>

                </CardActions>
            </Card>

        </>
    );
}
