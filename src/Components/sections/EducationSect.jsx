import React from 'react';
import './../combined.css';
import { Grid, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';

function EducationSect() {
  return (
    <div>
      <h2>Education</h2>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{ ml: 3 }}
      >
        <Card sx={{ maxWidth: 215, ml: 2,}} >
          <CardContent style={{ backgroundColor: '#e6e6e6', color:'#000000' }}>
            <Typography variant="h6">BTech</Typography>
            <Typography variant="body2">Govt Engineering college, Ajmer, Rajasthan</Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 215, ml: 2, }} >
          <CardContent style={{ backgroundColor: '#e6e6e6', color:'#000000' }}>
            <Typography variant="h6">Schooling</Typography>
            <Typography variant="body2">Kendriya Vidyalaya NTPC Anta, Rajasthan</Typography>
          </CardContent>
        </Card>
      </Stack>

    </div>
  )
}

export default EducationSect;
