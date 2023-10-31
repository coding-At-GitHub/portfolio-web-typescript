import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';

const Footer = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '2em', padding: '1em 0', borderTop: '1px solid #ccc' }}>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Your Name | Full Stack MERN Web Developer
      </Typography>
      <Typography variant="body2" align="center">
        <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms & Conditions</Link>
      </Typography>
    </Container>
  );
};

export default Footer;
