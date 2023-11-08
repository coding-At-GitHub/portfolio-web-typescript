import React from 'react';
import { Grid, Typography, } from '@material-ui/core';
import './../combined.css';
import ProjectCard from './ProjectCard';
import SSmemoryGame from './../../assets/memoryGame.png';
import SSPortfolio from './../../assets/Portfolio.png';
import SSResumeCreator from './../../assets/ResumeCreator.png';
import SSAlgoSort from './../../assets/SortAlgo.png';


const projects = [
  {
    title: 'Portfolio',
    description: 'Description of Skills and Project.Easy to share Link instead of ',
    imageUrl: SSPortfolio,
    projectUrl: 'https://cggb6112.vercel.app/',
    sourceCodeUrl: 'https://github.com/coding-At-GitHub',
  },
  {
    title: 'Memory Game',
    description: 'Each card has a picture on one side and is duplicated. The game begins with all of the cards face down, and the player turns over two cards in turn. They keep the cards if they have the same image otherwise, they turn them face down again.',
    imageUrl: SSmemoryGame,
    projectUrl: 'https://flip-the-tile-game.netlify.app/',
    sourceCodeUrl: 'https://github.com/coding-At-GitHub',
  },
  {
    title: 'Resume Creator',
    description: 'This is a website that users can use to build their resumes. Description: Users have to fill in their details, choose a template   and download the final resume',
    imageUrl: SSResumeCreator,
    projectUrl: 'https://isrodesigns.netlify.app/',
    sourceCodeUrl: 'https://github.com/coding-At-GitHub',
  },
  {
    title: 'Visual Algo Sorting',
    description: 'This webpage helps a learner to under different sorting algorithms in visual manner and easy to understand. As sorting is basic and important feature used in almost all product based companies',
    imageUrl: SSAlgoSort,
    projectUrl: 'https://visual-algorithms-react.vercel.app/',
    sourceCodeUrl: 'https://github.com/coding-At-GitHub',
  },

];

const ProjectSectionTwo = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              sourceCodeUrl={project.sourceCodeUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectSectionTwo;
