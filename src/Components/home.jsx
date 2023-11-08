import React from 'react';
import './combined.css';
import HeaderSect from './sections/HeaderSect';
import ProjectSectionTwo from './sections/ProjectTwoSect';
import SkillSectTwo from './sections/SkillsSectTwo';
import AboutMeSect from './sections/AboutMeSect';
import EducationSect from './sections/EducationSect';
import Divider from '@mui/joy/Divider';
import ColorInversionFooterTwo from './sections/FooterSect';

function MainPage() {

  return (
    <div>
      <div className='portfolio' >
        <section className='section'>
          <HeaderSect />
        </section>
        <Divider sx={{ my: 0.7 }} />
        <section className='section'>
          <AboutMeSect />
        </section>
        <Divider sx={{ my: 0.7 }} />
        <section className='section'>
          <SkillSectTwo />
        </section>
        <Divider sx={{ my: 0.7 }} />
        <section className='section'>
          <ProjectSectionTwo />
        </section>
        <Divider sx={{ my: 0.7 }} />
        <section className='section'>
          <EducationSect />
        </section>
        <Divider sx={{ my: 0.7 }} />
        <section>
          <ColorInversionFooterTwo />
        </section>
      </div>
    </div>
  )
}

export default MainPage;
