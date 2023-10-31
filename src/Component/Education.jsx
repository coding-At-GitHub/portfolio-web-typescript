import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@material-ui/core';

const educationData = [
  {
    institution: 'University Name 1',
    degree: 'Bachelor of Computer Science',
    year: '2016 - 2020',
    description: 'Description of education...'
  },
  {
    institution: 'University Name 2',
    degree: 'Master of Information Technology',
    year: '2021 - 2023',
    description: 'Description of education...'
  },
  // Add more education objects as needed
];

const Education = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Education</Typography>
      <Grid container spacing={3}>
        {educationData.map((education, index) => (
          <Grid item key={index} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">{education.institution}</Typography>
                <Typography variant="subtitle2">{education.degree}</Typography>
                <Typography variant="subtitle2" color="textSecondary">{education.year}</Typography>
                <Typography variant="body2">{education.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Education;
