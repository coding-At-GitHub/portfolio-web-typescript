import React from 'react';
import { Grid, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import './../CombinedCss.css';
const projects = [
  {
    title: 'Project 11',
    description: 'Description of project 1...',
    imageUrl: 'https://via.placeholder.com/150',
    projectLink: 'https://example.com/project1'
  },
  {
    title: 'Project 12',
    description: 'Description of project 2...',
    imageUrl: 'https://via.placeholder.com/150',
    projectLink: 'https://example.com/project2'
  },
  {
    title: 'Project 13',
    description: 'Description of project 1...',
    imageUrl: 'https://via.placeholder.com/150',
    projectLink: 'https://example.com/project1'
  },
  {
    title: 'Project 14',
    description: 'Description of project 2...',
    imageUrl: 'https://via.placeholder.com/150',
    projectLink: 'https://example.com/project2'
  },
  // Add more project objects as needed
];

const ProjectSectionTwo = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
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
