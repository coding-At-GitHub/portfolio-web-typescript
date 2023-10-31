import React from 'react';
import { Grid, Typography, Chip } from '@material-ui/core';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa';
import './../CombinedCss.css';

const SkillSectTwo = () => {
    const skills = [
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3 /> },
        { name: 'Node.js', icon: <FaNode /> },
        { name: 'Database', icon: <FaDatabase /> },

    ];

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Skills
            </Typography>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
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

export default SkillSectTwo;
