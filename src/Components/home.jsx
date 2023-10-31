import React from 'react';
import './combinedCss.css';
import ProjectSection from './sections/ProjectSect';
import SkillSectTwo from './sections/SkillsSectTwo';
import ColorInversionFooterOne from './Sample/FooterOne';


function MainPage() {

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
          <SkillSectTwo />
        </section>
        <section>
          <ProjectSection />
        </section>
        <section>
          <ColorInversionFooterOne />
        </section>
      </div>
    </div>
  )
}

export default MainPage;
