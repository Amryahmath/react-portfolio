import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://www.linkedin.com/in/amry-ahmath/"><i className='bx bxl-linkedin'></i></a>
        <a href="https://github.com/Amryahmath"><i className='bx bxl-github'></i></a>
        <a href="https://www.instagram.com/mm_amry/"><i className='bx bxl-instagram'></i></a>
      </div>
      <ul className="list">
        <li><a href="#contact">FAQ</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#home">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p className="copyright">
        © Amry Ahmath | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
