import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import apiClient from '../config/axios';
import './Skills.css';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      // Fallback skills data
      const fallbackSkills = [
        { name: 'JavaScript', category: 'Languages' },
        { name: 'TypeScript', category: 'Languages' },
        { name: 'Python', category: 'Languages' },
        { name: 'C++', category: 'Languages' },
        { name: 'C', category: 'Languages' },
        { name: 'React.js', category: 'Frontend' },
        { name: 'Next.js', category: 'Frontend' },
        { name: 'Recoil', category: 'Frontend' },
        { name: 'Tailwind CSS', category: 'Frontend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express.js', category: 'Backend' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'Docker', category: 'Tools' },
        { name: 'AWS (EC2, S3, CDN)', category: 'Tools' },
        { name: 'Cloudflare Serverless', category: 'Tools' },
        { name: 'Git/Github', category: 'Tools' },
        { name: 'Linux', category: 'Tools' }
      ];

      try {
        const response = await apiClient.get('/api/skills');
        // Use API data if available, otherwise use fallback
        setSkills(response.data && response.data.length > 0 ? response.data : fallbackSkills);
      } catch (error) {
        console.error('Error fetching skills:', error);
        // Use fallback skills if API fails
        setSkills(fallbackSkills);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="loading">Loading skills...</div>
        </div>
      </div>
    );
  }

  if (skills.length === 0) {
    return (
      <div className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="loading">Loading skills...</div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`skills ${inView ? 'fade-in-up' : ''}`}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {categorySkills.map((skill) => (
                  <div key={skill._id || skill.name} className="skill-tag">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

