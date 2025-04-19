import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations, freelance projects, or just to connect!
      </p>
      <div className="contact-container">
        <div className="contact-item">
          <Mail className="contact-icon" />
          <a href="mailto:bijaytamrakar599@gmail.com" className="contact-link">
            bijaytamrakar599@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <Phone className="contact-icon" />
          <a href="tel:+9779768429556" className="contact-link">
            +977-9768429556
          </a>
        </div>
        <div className="contact-item">
          <Linkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/bijay-tamrakar-a59a47344/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
