import React from 'react';

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="heading" id="heading">Education</h2>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2021</div>
          <div className="timeline-content">
            <h3>High School</h3>
            <p>T/ Trincomalee zahira college - Graduated in GCE Advanced Level in physical Sciences.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2023</div>
          <div className="timeline-content">
            <h3>University</h3>
            <p>Started Diploma in English Language and Literature at Aquinas College, Sri Lanka.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <h3>University</h3>
            <p>Information Technology undergraduate at the University of Moratuwa, Sri Lanka.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
