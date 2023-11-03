import React from 'react';
import './combined.css';
import SkillSect from './sections/SkillsSect';
import ProjectSection from './sections/ProjectSect';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import the social icons you need
import ColorInversionFooterOne from './Sample/FooterOne';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa'; // Import icons
// import {
//     FaHtml5,
//     FaCss3,
//     FaJs,
//     FaReact,
//     FaNode,
//     FaDatabase,
//     FaAngular,
//     FaAngularjs,
//     FaBootstrap,
//     FaTypescript,
//     FaRedhat,
//     FaNpm,
//     FaMaterialUi,
//     FaReacteurope,
//     FaNodeJs,
//     FaReactos,
//     FaReactrouter,
//     FaReacteuropejs,
//     FaReactosjs,
//     FaReactnative,
//     FaReactrouterjs,
//   } from 'react-icons/fa';

function MainPageTwo() {


    // const dummyProject = ({ title, description, imageUrl, projectUrl, sourceCodeUrl }) => {
    //     return (
    //       <div className="project">
    //         <img src={imageUrl} alt={title} />
    //         <h3>{title}</h3>
    //         <p>{description}</p>
    //         <div className="project-links">
    //           <a href={projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
    //           <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
    //         </div>
    //       </div>
    //     );
    //   };

      const AllProjects = ( projects ) => {
        return (
          <section className="projects-section">
            <h2>Projects</h2>
            <div className="project-list">
              {projects.map((project, index) => (
                 <div className="project">
                 <img src={project.imageUrl} alt={project.title} />
                 <h3>{project.title}</h3>
                 <p>{project.description}</p>
                 <div className="project-links">
                   <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
                   <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
                 </div>
               </div>
                // {dummyProject(project)}
                // <dummyProject
                //   key={index}
                //   title={project.title}
                //   description={project.description}
                //   imageUrl={project.imageUrl}
                //   projectUrl={project.projectUrl}
                //   sourceCodeUrl={project.sourceCodeUrl}
                // />
              ))}
            </div>
          </section>
        );
      };

      const projectData = [
        {
          title: 'Portfolio',
          description: 'Description of Skills and Project.Easy to share Link instead of ',
          imageUrl: 'project1.jpg',
          projectUrl: 'https://rajesh02portfolio.vercel.app',
          sourceCodeUrl: 'https://github.com/yourusername/project1',
        },
        {
          title: 'Project 2',
          description: 'Description of Project 2',
          imageUrl: 'project2.jpg',
          projectUrl: 'https://example.com/project2',
          sourceCodeUrl: 'https://github.com/yourusername/project2',
        },
        {
          title: 'Project 1',
          description: 'Description of Project 1',
          imageUrl: 'project1.jpg',
          projectUrl: 'https://example.com/project1',
          sourceCodeUrl: 'https://github.com/yourusername/project1',
        },
        {
          title: 'Project 2',
          description: 'Description of Project 2',
          imageUrl: 'project2.jpg',
          projectUrl: 'https://example.com/project2',
          sourceCodeUrl: 'https://github.com/yourusername/project2',
        },
        {
          title: 'Project 1',
          description: 'Description of Project 1',
          imageUrl: 'project1.jpg',
          projectUrl: 'https://example.com/project1',
          sourceCodeUrl: 'https://github.com/yourusername/project1',
        },
        {
          title: 'Project 2',
          description: 'Description of Project 2',
          imageUrl: 'project2.jpg',
          projectUrl: 'https://example.com/project2',
          sourceCodeUrl: 'https://github.com/yourusername/project2',
        },

      ];


    const SkillSect = () => {
        const skills = [
          { name: 'HTML5', icon: <FaHtml5 /> },
          { name: 'CSS3', icon: <FaCss3 /> },
          { name: 'JavaScript', icon: <FaJs /> },
          { name: 'React', icon: <FaReact /> },
          { name: 'Node.js', icon: <FaNode /> },
          { name: 'Database', icon: <FaDatabase /> },
          // Add more skills here
        //   { name: 'HTML5', icon: <FaHtml5 /> },
        //   { name: 'CSS3', icon: <FaCss3 /> },
        //   { name: 'JavaScript', icon: <FaJs /> },
        //   { name: 'React', icon: <FaReact /> },
        //   { name: 'Redux', icon: <FaRedhat /> },
        //   { name: 'React-Redux', icon: <FaReacteurope /> },
        //   { name: 'Redux Toolkit', icon: <FaNpm /> },
        //   { name: 'Angular', icon: <FaAngular /> },
        //   { name: 'Angular Material', icon: <FaAngularjs /> },
        //   { name: 'TypeScript', icon: <FaTypescript /> },
        //   { name: 'Bootstrap', icon: <FaBootstrap /> },
        //   { name: 'Tailwind CSS', icon: <FaReactos /> },
        //   { name: 'Material UI', icon: <FaMaterialUi /> },
        //   { name: 'MongoDB', icon: <FaReactrouter /> },
        //   { name: 'MySQL', icon: <FaReacteuropejs /> },
        //   { name: 'Node.js', icon: <FaReactosjs /> },
        //   { name: 'Next.js', icon: <FaReactnative /> },
        //   { name: 'React Native', icon: <FaReactrouterjs /> },
        ];
      
        return (
          <section className="skill-section">
            <h2>Skills</h2>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </section>
        );
      };

    // const SocialIcons = () => {
    //     return (
    //         <div className="social-icons">
    //             <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
    //                 <FaTwitter />
    //             </a>
    //             <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
    //                 <FaLinkedin />
    //             </a>
    //             <a href="https://github.com/Coding-At-GitHub" target="_blank" rel="noopener noreferrer">
    //                 <FaGithub />
    //             </a>
    //             <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
    //                 <FaInstagram />
    //             </a>
    //             <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
    //                 <FaFacebook />
    //             </a>
    //         </div>
    //     );
    // };


    return (
        <div>
            <div className='container' >
         
              
                <header className="header" >
                    <div className="header-content">
                        <h1 className="header-title">Rajesh Choudhary</h1>
                        <p className="header-subtitle">MERN Full Stack Web Developer</p>
                        <p className="header-description">Welcome to my portfolio. Explore my work and skills.</p>
                    </div>
                </header>

                <section></section>
                
                <section >
                    <h2>About Me</h2>
                    <p>
                      Passionate Software Engineer with 1+ year of experience in web, frontend and backend development in both Angular And ReactJs in
frontend. Skilled at writing clear, concise code that is easy to maintain and troubleshoot. Experienced in working with both small and
large teams across multiple projects and companies. Able to work independently of remote locations or in office environments as
needed by the company. 
                    </p>
                   
                </section>

                <section>
                    {SkillSect()}
                    {/* <SkillSect /> */}
                </section>
                <section>
                  
                 <SkillSect />
                </section>
           
                <section>
              
<div>
    {/* {AllProjects(projectData)} */}
    <ProjectSection />
</div> 
      {/* <Projects projects={projectData} /> */}

                </section>


                {/* <section >
                    <h2>About Me</h2>
                    <p>
                        Welcome to my portfolio! I am a web developer with a passion for creating
                        beautiful and functional websites and web applications.
                    </p>
                    <p>
                        Hi, my name is Rajesh Choudhary
                        I'm a Software Developer who is transforming ideas into code and solutions into reality.
                    </p>
                    <p>
                        I am a full-stack developer with a Master's in Computer Science and a Bachelor's in Information Technology. I have experience developing microservices, implementing custom backend APIs, and building web applications using various programming languages and frameworks. I am also skilled in machine learning, natural language processing, computer vision and database management. With a strong focus on efficiency and quality, I am dedicated to creating innovative and effective solutions for complex problems.

                        When I'm not coding, I enjoy hiking, gaming, and cooking.
                    </p>
                </section> */}

                {/* <section>
                    <h2>Projects</h2>
                    <div >
                        <h3>Project 1</h3>
                        <p>Description of Project 1.</p>
                    </div>
                    <div >
                        <h3>Project 2</h3>
                        <p>Description of Project 2.</p>
                    </div>
               
                </section> */}

                {/* <section >
                    <h2>Contact Me</h2>
                    <p>
                        Feel free to reach out to me at yourname@example.com or connect with me
                        on LinkedIn, GitHub, and Twitter.
                    </p>
                </section>
                <section >
                    <footer className="footer">
                        <div className="footer-content">
                            <div>{SocialIcons()}</div>
                            <div>&copy; 2023 Your Name</div>
                        </div>
                    </footer>
                    <h2>Contact Me</h2>
                    <p>
                        Feel free to reach out to me at yourname@example.com or connect with me
                        on LinkedIn, GitHub, and Twitter.
                    </p>
                    <footer className="footer">
                        <div className="footer-content">
                            <div>{SocialIcons()}</div>
                            <p>&copy; 2023 Your Name</p>
                        </div>
                    </footer>
                    <h2>Contact Me</h2>
                    <p>
                        Feel free to reach out to me at yourname@example.com or connect with me
                        on LinkedIn, GitHub, and Twitter.
                    </p>
                    <footer className="footer">
                        <div className="footer-content">
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://twitter.com/yourname" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                            <p>&copy; 2023 - Developed by Rajesh Choudhary</p>
                            <p>Contact: yourname@example.com</p>
                            <p>{SocialIcons()}</p>
                        </div>
                    </footer>
                </section> */}
               
                <section>
                    <ColorInversionFooterOne />
                </section>
            </div>
        </div>
    )
}

export default MainPageTwo;
