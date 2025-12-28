import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import apiClient from '../config/axios';
import './Projects.css';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      // Fallback projects data
      const fallbackProjects = [
        {
          _id: '1',
          title: 'PayFlow',
          description: 'Developed a full-stack web platform for secure and atomic money transfers between users, inspired by UPI architecture. Built a clean UI with real-time transaction tracking and integrated REST APIs for user auth, balance checks, and logs. Enhanced security by hashing, salting, and peppering sensitive data and leveraging AWS (S3/CDN) for media handling.',
            technologies: ['JavaScript', 'React', 'Express', 'MongoDB', 'REST APIs', 'TailwindCSS', 'AWS (S3/CDN)'],
            githubLink: 'https://github.com/Gunnjainn/PayFlow',
            liveLink: '',
            category: 'Web Development',
            featured: true
          },
          {
            _id: '2',
            title: 'GraphX Visualizer',
          description: 'Developed an interactive and visually intuitive graph algorithm simulator supporting DFS, BFS, and Dijkstra\'s Algorithm with real-time traversal feedback. Built using React Flow and TypeScript, allowing users to dynamically add/remove nodes and visualize directed graphs. Implemented step-by-step node highlighting, edge tracking, and animation with support for live performance metrics.',
            technologies: ['TypeScript', 'React', 'React Flow', 'TailwindCSS', 'Dijkstra', 'DFS', 'BFS'],
            githubLink: 'https://github.com/Gunnjainn/graphx-visualizer',
            liveLink: '',
            category: 'Web Development',
            featured: true
          },
          {
            _id: '3',
            title: 'Smart Energy Monitoring System',
          description: 'Developed an IoT-based solution using ESP32 nodes and a Raspberry Pi gateway to monitor and automate energy usage in homes. Implemented occupancy-based control using PIR sensors to auto-switch lights and fans, reducing power wastage. Used MQTT protocol for real-time communication between distributed sensor nodes and the central Raspberry Pi for visualization and logging.',
            technologies: ['ESP32', 'Raspberry Pi', 'MQTT', 'Python', 'C++', 'Sensors'],
            githubLink: 'https://github.com/Gunnjainn/IOT_PROJECT',
            liveLink: '',
            category: 'IoT',
          featured: true
        }
      ];

      try {
        const response = await apiClient.get('/api/projects');
        // Use API data if available, otherwise use fallback
        setProjects(response.data && response.data.length > 0 ? response.data : fallbackProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Use fallback projects if API fails
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="loading">Loading projects...</div>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="loading">No projects found</div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`projects ${inView ? 'fade-in-up' : ''}`}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project._id || index}
              className="project-card"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

