import React from 'react'
import './../CombinedCss.css';
function HeaderSect() {
  return (
    <div>
       <header className="header" >
          <div className="header-content">
            <h1 className="header-title">Rajesh Choudhary</h1>
            <p className="header-subtitle">Full Stack Web Developer</p>
            {/* <p className="header-description">Welcome to my portfolio. Explore my work and skills.</p> */}
          </div>
        </header>
    </div>
  )
}

export default HeaderSect;
