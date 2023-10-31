import React from 'react';
import { Container, Typography, Chip, Grid } from '@material-ui/core';

const Skills = () => {
  const skills = [
    'React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'Redux', 'RESTful API', 'Git',
    // Add more skills as needed
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Skills</Typography>
      <Grid container spacing={1}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip label={skill} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
