import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          Portfolio
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="nav-item" onClick={() => scrollToSection('home')}>
            Home
          </div>
          <div className="nav-item" onClick={() => scrollToSection('about')}>
            About
          </div>
          <div className="nav-item" onClick={() => scrollToSection('skills')}>
            Skills
          </div>
          <div className="nav-item" onClick={() => scrollToSection('projects')}>
            Projects
          </div>
          <div className="nav-item" onClick={() => scrollToSection('education')}>
            Education
          </div>
          <div className="nav-item" onClick={() => scrollToSection('experience')}>
            Experience
          </div>
          <div className="nav-item" onClick={() => scrollToSection('contact')}>
            Contact
          </div>
        </div>
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

