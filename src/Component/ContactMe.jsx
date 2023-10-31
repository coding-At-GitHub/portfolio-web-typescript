import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Email, Phone, LocationOn, GitHub, LinkedIn } from '@material-ui/icons';

const ContactMe = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <ListItemText primary="youremail@example.com" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          <ListItemText primary="+1234567890" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <LocationOn />
          </ListItemIcon>
          <ListItemText primary="Your City, Country" />
        </ListItem>
        <Divider />
        <ListItem button component="a" href="https://github.com/yourusername" target="_blank" rel="noopener">
          <ListItemIcon>
            <GitHub />
          </ListItemIcon>
          <ListItemText primary="GitHub Profile" />
        </ListItem>
        <Divider />
        <ListItem button component="a" href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener">
          <ListItemIcon>
            <LinkedIn />
          </ListItemIcon>
          <ListItemText primary="LinkedIn Profile" />
        </ListItem>
      </List>
    </Container>
  );
};

export default ContactMe;
