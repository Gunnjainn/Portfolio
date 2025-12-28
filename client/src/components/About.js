import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`about ${inView ? 'fade-in-up' : ''}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Gun Jain, a 3rd year Computer Science Engineering student at 
              The LNM Institute of Information Technology, Jaipur, currently maintaining 
              a CGPA of 7.52. I'm passionate about full-stack web development with 
              expertise in MERN stack, TypeScript, and cloud technologies like AWS.
            </p>
            <p>
              My journey involves building scalable applications with a focus on security 
              and performance. I've developed projects like PayFlow (UPI-inspired payment 
              platform), GraphX Visualizer (interactive graph algorithm simulator), and 
              Smart Energy Monitoring System (IoT-based solution).
            </p>
            <p>
              Beyond coding, I serve as Team Lead at NSS LNMIIT, coordinating 20+ volunteers 
              for social initiatives. I'm always exploring new technologies and contributing 
              to innovative solutions that solve real-world problems.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>3+</h3>
                <p>Major Projects</p>
              </div>
              <div className="stat-item">
                <h3>18+</h3>
                <p>Technologies</p>
              </div>
              <div className="stat-item">
                <h3>7.52</h3>
                <p>CGPA (Upto 4th Sem)</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Team Members Led</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

