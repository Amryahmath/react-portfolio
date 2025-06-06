import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form id="contactForm">
        <div className="input-group">
          <div className="input-box">
            <input type="text" id="fullName" placeholder="Full name" required />
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="tel" id="phoneNumber" placeholder="Phone Number" required />
            <input type="text" id="subject" placeholder="Subject" required />
          </div>
        </div>
        <div className="input-group-2">
          <textarea id="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
    </section>
  );
}

export default Contact;
