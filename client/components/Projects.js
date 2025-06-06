import React from 'react';

function Projects() {
  return (
    <section className="services" id="projects">
      <h2 className="heading">Projects</h2>
      <div className="services-container">
        <div className="service-box">
          <div className="service-info">
            <h4>library Management System 📊⏳</h4>
            <p>This program is designed using <a href="https://www.python.org/"><span style={{color: 'rgba(0, 26, 255, 0.655)', fontWeight: 800}}>Python</span></a>. The system is designed to assist library staff in managing and tracking the borrowing and return of library materials. It utilizes user input to record details about borrowed items, due dates, and returns. The system determines the availability status of each item and calculates any applicable late fees, ensuring efficient oversight of library resources and user activity.</p>
            <p><a href="https://github.com/Amryahmath/library-management-system" style={{fontSize: 'small', textDecoration: 'underline'}}>Open Project</a></p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-info">
            <h4>Pharmacy Management System 🩺💙</h4>
            <p>A web-based Pharmacy Management System built with a frontend using HTML, CSS, and JavaScript, and a backend powered by Python and MySQL. This system helps manage the operations of a pharmacy, including inventory management, sales tracking, customer management, and more.<a href="https://en.wikipedia.org/wiki/JavaScript"><span style={{color: 'rgb(60, 129, 0)', fontWeight: 800}}>JavaScript</span></a> ensuring a responsive and dynamic user experience.</p>
            <p><a href="https://github.com/Amryahmath/Pharmacy-management-system-" style={{fontSize: 'small', textDecoration: 'underline'}}>Open Project</a></p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-info">
            <h4>Online Voting System 🗳️</h4>
            <p>Voting system is a <a href="https://www.php.net/"><strong style={{color: 'rgb(255, 0, 0)', fontWeight: 800}}>PHP</strong></a> based application centralized hub containing the source code, resources, and documentation needed to develop, deploy, and maintain a secure and efficient digital voting platform. This repository serves as a foundation for conducting elections or polls electronically, ensuring transparency, accuracy, and accessibility.</p>
            <p><a href="https://github.com/Amryahmath/Online-Voting-System-" style={{fontSize: 'small', textDecoration: 'underline'}}>Open Project</a></p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-info">
            <h4>Employee Management System💼🌍</h4>
            <p>This <a href="https://www.java.com/en/"><strong style={{color: 'rgb(130, 0, 124)', fontWeight: 800}}>Java</strong></a> based application leverages Object-Oriented Programming (OOP) principles to efficiently handles employee data, including adding, updating, deleting, and retrieving records. Features include role assignment, attendance tracking, payroll processing, and secure database integration.</p>
            <p><a href="https://github.com/Amryahmath/Employee-Management-System" style={{fontSize: 'small', textDecoration: 'underline'}}>Open Project</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
