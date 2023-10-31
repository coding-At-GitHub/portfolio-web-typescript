import React from 'react';
import { Container, Typography, Paper, Grid } from '@material-ui/core';

const AboutMe = () => {
  return (
    <Container maxWidth="md">
      <Paper style={{ padding: 20, marginBottom: 20 }}>
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">
              I am a Full Stack MERN Developer passionate about creating robust and scalable web applications.
              I have experience in MongoDB, Express.js, React, Node.js, and various other web technologies.
              My goal is to build high-quality solutions and continuously enhance my skills.
            </Typography>
          </Grid>
          {/* You can add more Grid items for additional information */}
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutMe;
