import React from 'react';
import { Grid, Typography, Chip } from '@material-ui/core';
import { 
  React as ReactIcon,
  Redux as ReduxIcon,
  Extension as MaterialUIIcon,
  Web as BootstrapIcon,
  Extension as TailwindCSSIcon,
  Extension as Html5Icon,
  Extension as Css3Icon,
  Extension as NextJSIcon,
  Extension as NodeJSIcon,
  Extension as AngularIcon,
  Extension as MysqlIcon,
  Extension as MongodbIcon
} from '@material-ui/icons';

const SkillSect = () => {
  const skills = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Redux Toolkit', icon: <ReduxIcon /> },
    { name: 'Material-UI', icon: <MaterialUIIcon /> },
    { name: 'Bootstrap', icon: <BootstrapIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindCSSIcon /> },
    { name: 'HTML5', icon: <Html5Icon /> },
    { name: 'CSS3', icon: <Css3Icon /> },
    { name: 'Next.js', icon: <NextJSIcon /> },
    { name: 'Node', icon: <NodeJSIcon /> },
    { name: 'Angular', icon: <AngularIcon /> },
    { name: 'MySQL', icon: <MysqlIcon /> },
    { name: 'MongoDB', icon: <MongodbIcon /> },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={1}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              icon={skill.icon}
              label={skill.name}
              variant="outlined"
              color="primary"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SkillSect;
