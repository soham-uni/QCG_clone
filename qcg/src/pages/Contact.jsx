import React from "react";
import "./Contact.css"; // Import the new CSS file

// Import icons for LinkedIn, Instagram, Twitter, and Gmail

import linkedInIcon from "../components/linkedin.jpg";  // Place your images in the src folder or import them
import instaIcon from "../components/instagram.jpg";
import twitterIcon from "../components/twitter.jpg";
import gmailIcon from "../components/gmail.jpg";

function Contact() {
  return (
    <div className="contact-page-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          If you have any queries or would like to collaborate for events, feel free to contact us by email, and we will get back to you as soon as possible.
        </p>

        <div className="contact-details">
          <div className="address">
            <h3>Address:</h3>
            <p>Room No. 109, Students Activity Centre, IIT Roorkee, India</p>
          </div>
          <div className="email">
            <h3>Email:</h3>
            <p><a href="mailto:qcg.acm@iitr.ac.in">qcg.acm@iitr.ac.in</a></p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <img src={instaIcon} alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="mailto:qcg.acm@iitr.ac.in" className="social-icon gmail">
            <img src={gmailIcon} alt="Gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
