import React from 'react';
import './Header.css'; // Import your CSS file

const Header = () => {
  return (
    <div className="header">
      <h1>Your Name</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
