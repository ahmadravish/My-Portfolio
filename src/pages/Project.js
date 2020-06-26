import React from 'react';
import Layout from '../components/Layout';
import AllProjects from '../components/AllProjects';

const Project = () => {
  return (
    <Layout>
      <section className='section projects'>
        <div className='section-title'>
          <h2>All Projects</h2>
          <div className='underline'></div>
        </div>
        <div className='section-center projects-center'>
          <AllProjects />
        </div>
      </section>
    </Layout>
  );
};

export default Project;
