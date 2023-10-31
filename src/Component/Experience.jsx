import React from 'react';
import { Container, Typography, Paper, Grid } from '@material-ui/core';

const WorkExperience = () => {
  return (
    <Container maxWidth="md">
      <Paper style={{ padding: 20, marginBottom: 20 }}>
        <Typography variant="h4" gutterBottom>Work Experience</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Full Stack Developer, XYZ Company</Typography>
            <Typography variant="subtitle2">January 2020 - Present</Typography>
            <Typography variant="body1">
              Responsible for developing and maintaining full-stack applications using MERN stack.
              Collaborated with the team to create scalable and efficient solutions.
            </Typography>
          </Grid>
          {/* You can add more Grid items for additional work experiences */}
        </Grid>
      </Paper>
    </Container>
  );
};

export default WorkExperience;
