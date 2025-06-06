import React from 'react';

function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">AMRY <span>AHMATH</span></a>
      <i className='bx bx-menu' id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
