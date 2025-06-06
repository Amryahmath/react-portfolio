import React from 'react';

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">Services</h2>
      <div className="services-container">
        <div className="service-box">
          <div className="service-info">
            <h4>UI Design</h4>
            <p><strong>Tools:</strong> Figma, Adobe XD <br />
              <strong>&emsp;</strong> Crafting visually appealing and user-friendly interfaces to provide an optimal user experience. Skilled in wireframing, prototyping, and creating high-fidelity mockups to bring ideas to life.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-info">
            <h4>Frontend Development</h4>
            <p><strong>Technologies:</strong> React, HTML, CSS, JavaScript <br />
              <strong>&emsp;</strong> Building responsive and interactive web applications using modern JavaScript frameworks and libraries. Expertise in creating component-based architectures and ensuring cross-browser compatibility.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-info">
            <h4>Backend Development</h4>
            <p><strong>Technologies:</strong> Node.js, Java, Python Django & Open CV, PHP <br />
              <strong>&emsp;</strong> Developing robust and scalable server-side applications. Proficient in RESTful API design, database management, and integrating backend services with frontend applications to deliver seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
