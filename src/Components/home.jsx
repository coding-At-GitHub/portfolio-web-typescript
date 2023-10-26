import React from 'react';
import './combinedCss.css';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import the social icons you need
import ColorInversionFooterOne from './Sample/FooterOne';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa'; // Import icons

function MainPage() {


    const SkillSect = () => {
        const skills = [
          { name: 'HTML5', icon: <FaHtml5 /> },
          { name: 'CSS3', icon: <FaCss3 /> },
          { name: 'JavaScript', icon: <FaJs /> },
          { name: 'React', icon: <FaReact /> },
          { name: 'Node.js', icon: <FaNode /> },
          { name: 'Database', icon: <FaDatabase /> },
          // Add more skills here
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
                        <p className="header-subtitle">Full Stack Web Developer</p>
                        <p className="header-description">Welcome to my portfolio. Explore my work and skills.</p>
                    </div>
                </header>

                <section></section>
                
                <section >
                    <h2>About Me</h2>
                    <p>
                      1+ Year Exprience in frontend Reactjs 
                    </p>
                   
                </section>

                <section>
                    {SkillSect()}
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

                <section>
                    <h2>Projects</h2>
                    <div >
                        <h3>Project 1</h3>
                        <p>Description of Project 1.</p>
                    </div>
                    <div >
                        <h3>Project 2</h3>
                        <p>Description of Project 2.</p>
                    </div>
                    {/* Add more projects here */}
                </section>

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

export default MainPage;
