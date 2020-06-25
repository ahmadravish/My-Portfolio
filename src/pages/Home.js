import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects title='featured projects' />
    </Layout>
  );
};

export default Home;
