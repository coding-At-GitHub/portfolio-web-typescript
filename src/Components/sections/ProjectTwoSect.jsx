import React from 'react';
import { Grid, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import './../CombinedCss.css';
const projects = [
  {
    title: 'Portfolio',
    description: 'Description of Skills and Project.Easy to share Link instead of ',
    imageUrl: 'project1.jpg',
    projectUrl: 'https://rajesh02portfolio.vercel.app',
    sourceCodeUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'project2.jpg',
    projectUrl: 'https://example.com/project2',
    sourceCodeUrl: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: 'project1.jpg',
    projectUrl: 'https://example.com/project1',
    sourceCodeUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'project2.jpg',
    projectUrl: 'https://example.com/project2',
    sourceCodeUrl: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: 'project1.jpg',
    projectUrl: 'https://example.com/project1',
    sourceCodeUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'project2.jpg',
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
      <div className="project-list">
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
            </div>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              {/* <img src={project.imageUrl} alt={project.title} /> */}
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
      </Grid>
    </div>
  );
};

export default ProjectSectionTwo;
