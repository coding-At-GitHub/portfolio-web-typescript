import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Header from './Header';
import AboutMe from './AboutMe';
import WorkExperience from './Experience';
import Links from './Links';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import ContactMe from './ContactMe';
import Footer from './Footer';

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
            <section>
                <Education />
            </section>
            <section>
                <ContactMe />
            </section>
            <section>
                <Footer />
            </section>

        </Container>
    );
};

export default Home;
