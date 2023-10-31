import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Link } from '@material-ui/core';
import { Email, GitHub, LinkedIn, Phone, LocationOn } from '@material-ui/icons';

const Links = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Contact Information</Typography>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <GitHub />
          </ListItemIcon>
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener">
            <ListItemText primary="GitHub" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LinkedIn />
          </ListItemIcon>
          <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener">
            <ListItemText primary="LinkedIn" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <ListItemText primary="youremail@example.com" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          <ListItemText primary="+1234567890" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LocationOn />
          </ListItemIcon>
          <ListItemText primary="Your City, Country" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Links;
