import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@material-ui/core';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1...',
    imageUrl: 'https://via.placeholder.com/150',
    projectLink: 'https://example.com/project1'
  },
  {
    title: 'Project 2',
    description: 'Description of project 2...',
    imageUrl: 'https://via.placeholder.com/150',
    projectLink: 'https://example.com/project2'
  },
  // Add more project objects as needed
];

const Projects = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <Card>
              <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: 'auto' }} />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
