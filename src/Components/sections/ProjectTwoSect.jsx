import React from 'react';
import { Grid, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import './../CombinedCss.css';
import ProjectCard from './ProjectCard';
import ReduxIcon from './../../assets/Images/Icons/reduxIcon.png';
import NodeIcon from './../../assets/Images/Icons/nodeJsIcon.png';
import GitIcon from './../../assets/Images/Icons/gitIcon.png';
import ExpressIcon from './../../assets/Images/Icons/expressJsIcon.png';
import AngularIcon from './../../assets/Images/Icons/angularIcon.png';
const projects = [
  {
    title: 'Portfolio',
    description: 'Description of Skills and Project.Easy to share Link instead of ',
    imageUrl: './../../assets/Images/Icons/reduxIcon.png',
    projectUrl: 'https://rajesh02portfolio.vercel.app',
    sourceCodeUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: {NodeIcon},
    projectUrl: 'https://example.com/project2',
    sourceCodeUrl: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 1',
    imageUrl: './../../assets/Images/Icons/gitIcon.png',
    projectUrl: 'https://example.com/project1',
    sourceCodeUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 4',
    description: 'Description of Project 2',
    imageUrl: './../../assets/Images/Icons/expressJsIcon.png',
    projectUrl: 'https://example.com/project2',
    sourceCodeUrl: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 5',
    description: 'Description of Project 1',
    imageUrl: './../../assets/Images/Icons/nodeJsIcon.png',
    projectUrl: 'https://example.com/project1',
    sourceCodeUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 6',
    description: 'Description of Project 2',
    imageUrl: './../../assets/Images/Icons/reduxIcon.png',
    projectUrl: 'https://example.com/project2',
    sourceCodeUrl: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 7',
    description: 'Description of Project 2',
    imageUrl: './../../assets/Images/Icons/expressJsIcon.png',
    projectUrl: 'https://example.com/project2',
    sourceCodeUrl: 'https://github.com/yourusername/project2',
  },
];

const ProjectSectionTwo = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      {/* <div className="project-list">
              {projects.map((project, index) => (
                 <div className="project">
                 <img src={project.imageUrl} alt={project.title} />
                 <h3>{project.title}</h3>
                 <p>{project.description}</p>
                 <div className="project-links">
                   <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
                   <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
                 </div>
               </div>
              ))}
            </div> */}
      {/* <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <img src={project.imageUrl} alt={project.title} />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="primary" href={project.projectLink} target="_blank">
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
          
            {/* <ProjectCard  /> */}
            <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
                  sourceCodeUrl={project.sourceCodeUrl}
                />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectSectionTwo;
