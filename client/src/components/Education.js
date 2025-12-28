import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`education ${inView ? 'fade-in-up' : ''}`}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="education-card">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-details">
              <h3>Bachelor of Technology in Computer Science and Engineering</h3>
              <p className="institution">The LNM Institute of Information Technology, Jaipur</p>
              <p className="duration">August 2023 – Present | CGPA: 7.52 (Upto 4th Semester)</p>
              <p className="description">
                Currently in 3rd year pursuing BTech degree with focus on computer science 
                fundamentals, software engineering, and modern web technologies. Maintaining 
                strong academic performance while building practical projects.
              </p>
              <div className="education-highlights">
                <span className="highlight">Relevant Coursework:</span>
                <ul>
                  <li>Data Structures and Algorithm</li>
                  <li>Object Oriented Programming</li>
                  <li>Operating System</li>
                  <li>Database Management</li>
                  <li>Design and Analysis of Algorithms</li>
                  <li>Computer Networks</li>
                </ul>
              </div>
              <div className="education-highlights" style={{marginTop: '1.5rem'}}>
                <h4 style={{color: 'var(--light-text)', marginBottom: '0.75rem'}}>Previous Education:</h4>
                <p style={{color: 'var(--gray-text)'}}>
                  <strong>Skyland School, Muzaffarnagar</strong> - AISSCE (CBSE), Science (PCM) - 95%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

