import React from 'react';
import { Grid, Typography, Chip } from '@material-ui/core';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa';
import './../CombinedCss.css';
import ReduxIcon from './../../assets/Images/Icons/reduxIcon.png';
import NodeIcon from './../../assets/Images/Icons/nodeJsIcon.png';
import GitIcon from './../../assets/Images/Icons/gitIcon.png';
import ExpressIcon from './../../assets/Images/Icons/expressJsIcon.png';
import AngularIcon from './../../assets/Images/Icons/angularIcon.png';


const SkillSectTwo = () => {
    const iconRedux = <img src={ReduxIcon} alt="Redux Icon" />
    const iconNode = <img src={NodeIcon} alt="Node Icon" />
    const iconGit = <img src={GitIcon} alt="Git Icon" />
   
    const skills = [
        { name: 'React', icon: <FaReact /> },
        { name: 'redux', icon: iconRedux },
        { name: 'redux', icon: iconNode },
        { name: 'redux', icon: iconGit },
        // { name: 'redux', icon: <img src={ReduxIcon} alt="Redux Icon" /> },
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
        </div>
    );
};

export default SkillSectTwo;
