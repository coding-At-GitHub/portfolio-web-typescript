import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './../CombinedCss.css';
import ReduxIcon from './../../assets/Images/Icons/reduxIcon.png';
import NodeIcon from './../../assets/Images/Icons/nodeJsIcon.png';
import GitIcon from './../../assets/Images/Icons/gitIcon.png';
import ExpressIcon from './../../assets/Images/Icons/expressJsIcon.png';
import AngularIcon from './../../assets/Images/Icons/angularIcon.png';
// = ({ title, description, imageUrl, projectUrl, sourceCodeUrl })

export default function ProjectCard({ title, description, imageUrl, projectUrl, sourceCodeUrl }) {
    return (
        <>

            <Card sx={{ maxWidth: 345 }} className='projectCard'>
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

            {/* <Card>
            <div className="project">
                <img src={imageUrl} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-links">
                    <a href={projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
                    <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
            </div>
            </Card> */}

        </>
    );
}
