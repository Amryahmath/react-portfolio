import React from 'react';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 id="bar">Hi, It's <span>AMRY</span></h1>
        <h3 className="text-animation">I'm a <span></span></h3>
        <p>I am an Information Technology undergraduate at the University of Moratuwa, passionate about artificial intelligence, data science, and machine learning. From a young age, I’ve been fascinated by technology’s potential to solve real-world problems, driving me to focus on programming, algorithms, and data-driven solutions. As I advance in my studies, I aim to refine my skills and explore new AI and machine learning frontiers. Additionally, I am pursuing an undergraduate diploma in English Language and Literature at Aquinas College, which enhances my communication and critical thinking, complementing my technical expertise.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/amry-ahmath/"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/Amryahmath"><i className='bx bxl-github'></i></a>
          <a href="https://www.instagram.com/mm_amry/"><i className='bx bxl-instagram'></i></a>
        </div>
        <div className="btn-group">
          <a href="#" className="btn">Hire</a>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>
      <div className="home-img">
        <img src="dp.jpg" alt="dp" />
      </div>
    </section>
  );
}

export default Home;
