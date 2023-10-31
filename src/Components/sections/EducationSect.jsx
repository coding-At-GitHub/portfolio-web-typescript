import React from 'react';
import './../CombinedCss.css';
import { Grid, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
function EducationSect() {
  return (
    <div>
      <Grid  xs={12} sm={6} md={4}>
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
          
          </Grid>
          <Grid   xs={12} sm={6} md={4}>
           
          </Grid>
    </div>
  )
}

export default EducationSect;
