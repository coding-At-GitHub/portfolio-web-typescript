import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Header from './Header';
import AboutMe from './AboutMe';
import WorkExperience from './Experience';
import Links from './Links';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <Container maxWidth="md">
        <section>
            <Header />
        </section>
        <section>
            <Links />
        </section>
        <section>
            <AboutMe />
        </section>
        <section>
            <Skills />
        </section>
        <section>
            <WorkExperience />
        </section>
        <section>
          <Projects />
        </section>
      <header>
        <Typography variant="h3">Full Stack Web Developer</Typography>
        <nav>
          {/* Navigation links */}
        </nav>
      </header>
      <section id="about">
        <Typography variant="h4">About Me</Typography>
        {/* Your about me content */}
      </section>
      <section id="skills">
        <Typography variant="h4">Skills</Typography>
        {/* Skills component or content */}
      </section>
      <section id="projects">
        <Typography variant="h4">Projects</Typography>
        {/* Projects component or content */}
      </section>
      <section id="contact">
        <Typography variant="h4">Contact Me</Typography>
        {/* Contact form or details */}
      </section>
      <footer>
        <Typography variant="subtitle1">© 2023 Full Stack Web Developer Portfolio</Typography>
      </footer>
    </Container>
  );
};

export default Home;
