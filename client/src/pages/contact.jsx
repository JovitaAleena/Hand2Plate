import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Hand2plate</h1>
      <p>Welcome to Hand2plate. Our project is dedicated to reducing food waste and helping those in need by connecting food donors with recipients.</p>
      
      <div className="social-media">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      <footer className="contact-footer">
        <p>Email: hand2plate@gmail.com</p>
        <p>Phone: 9876543218</p>
      </footer>
    </div>
  );
};

export default Contact;