import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <section className='section projects'>
      <div className='section-title'>
        <h2>Featured Projects</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center projects-center'>
        <Project />
      </div>

      <Link to='/project' className='btn center-btn'>
        projects
      </Link>
    </section>
  );
};

export default Projects;
