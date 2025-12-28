import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">Hi, I'm</h1>
            <h1 className="hero-name">Gun Jain</h1>
            <h2 className="hero-title">3rd Year BTech Student | Full Stack Developer</h2>
            <p className="hero-description">
              Computer Science Engineering student at LNMIIT, Jaipur. Passionate about 
              building scalable web applications using MERN stack, TypeScript, and modern 
              cloud technologies. Experienced in full-stack development with focus on 
              security, performance, and user experience.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
            <div className="hero-social">
              <a
                href="https://github.com/Gunnjainn"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/gunjain"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:jainygunn16@gmail.com"
                className="social-icon"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Hero;

