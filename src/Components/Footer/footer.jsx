import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section brand">
          <h2>SparkproDetails</h2>
        
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/appointment">Appointment</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact us</h4>
          <p><a href="tel:+923105555027">Phone: +92 (310)5555-027</a></p>

        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
          <a href="https://www.instagram.com/sparkpro.details/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61556978987668" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573928611105" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/@Sparkprodetails/shorts" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sparkpro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
