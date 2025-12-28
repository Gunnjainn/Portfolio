import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaUsers } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`experience ${inView ? 'fade-in-up' : ''}`}>
      <div className="container">
        <h2 className="section-title">Positions of Responsibility</h2>
        <div className="experience-content">
          <div className="experience-card">
            <div className="experience-icon">
              <FaUsers />
            </div>
            <div className="experience-details">
              <h3>Team Lead</h3>
              <p className="organization">NSS LNMIIT</p>
              <p className="duration">May 2024 – Present | Jaipur, Rajasthan</p>
              <p className="institution-name">The LNM Institute of Information Technology</p>
              <ul className="experience-description">
                <li>Led and coordinated a team of 20+ volunteers to organize impactful social initiatives</li>
                <li>Organized blood donation drives, cleanliness campaigns, and awareness workshops</li>
                <li>Collaborated with local bodies to extend NSS impact beyond campus boundaries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

