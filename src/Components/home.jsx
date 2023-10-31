import React from 'react';
import './combinedCss.css';
import HeaderSect from './sections/HeaderSect';
import ProjectSectionTwo from './sections/ProjectTwoSect';
import SkillSectTwo from './sections/SkillsSectTwo';
import ColorInversionFooterOne from './Sample/FooterOne';
import AboutMeSect from './sections/AboutMeSect';
import EducationSect from './sections/EducationSect';


function MainPage() {

  return (
    <div>
      <div className='container' >
        <section>
          <HeaderSect />
        </section>

        <section >
          <AboutMeSect />
        </section>

        <section>
          <SkillSectTwo />
        </section>

        <section>
          <ProjectSectionTwo />
        </section>

        <section >
          <EducationSect />
        </section>

        <section>
          <ColorInversionFooterOne />
        </section>
      </div>
    </div>
  )
}

export default MainPage;
