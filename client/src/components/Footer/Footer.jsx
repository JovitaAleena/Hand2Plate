import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="heading-footer">Hand2Plate <span>Food Donation</span></h2>
        <p className="footer-p">Reducing food waste and helping those in need.</p>
      </div>
      <div className="footer-section">
        <h4 className="footer-h4">Contact Us</h4>
        <p className="footer-p">Email: hand2plate@gmail.com</p>
        <p className="footer-p">Phone: 9876543218</p>
      </div>
      <div className="footer-section">
        <h4 className="footer-h4">Follow Us</h4>
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Hand2Plate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
