import React from 'react';
import Layout from '../components/Layout';
import UserImage from '../assets/hero-img.png';

const About = () => {
  return (
    <Layout>
      <section className='about-page'>
        <div className='section-center about-center'>
          <img src={UserImage} alt='#' className='about-img' />
          <article className='about-text'>
            <div className='section-title'>
              <h2>About Me</h2>
              <div className='underline'></div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              odit est temporibus natus repellendus, quibusdam pariatur eum
              nemo, exercitationem ad esse vel dignissimos quaerat commodi eaque
              ipsam alias unde incidunt.
            </p>
            <div className='about-stack'>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Redux</span>
              <span>Bootstrap</span>
              <span>SQL</span>
              <span>Blockchain</span>
              <span>C/C++</span>
              <span>DS and Algo</span>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;
