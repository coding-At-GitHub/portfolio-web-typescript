import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './ContactMe';

const MainPage = () => {
  return (
    <Router>
      {/* <Switch> */}
      <Routes>
      <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Routes>
       
      {/* </Switch> */}
    </Router>
  );
};

export default MainPage;
