import React from 'react';
import './../combined.css';
import { Grid, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';

function EducationSect() {
  return (
    <div>
      <Stack direction="row" spacing={2}>

        <Card>
          <CardContent>
            <Typography variant="h6">BTech</Typography>
            <Typography variant="body2">Govt Engineering college, Ajmer, Rajasthan</Typography>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <Typography variant="h6">Scholing</Typography>
            <Typography variant="body2">Kendriya Vidyalaya NTPC Anta, Rajasthan</Typography>
          </CardContent>
        </Card>
      </Stack>

    </div>
  )
}

export default EducationSect;
