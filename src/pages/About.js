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
              My Name is Ravish Ahmad.I am MERN stack developer and I started
              web development 3 years ago using simple html,css 7 js.I am
              student of engineering pursuing my b.tech in CSE . I m good in
              React.js and Api development and want to contribute my skills
              which will helps me to learn new things and develop myself. I am
              also good in competitive programming which shows my good command
              on DS & Algo.I love to learn new technologies .Recently I started
              learning about blockchain and also developed a project on it
            </p>
            <br />
            <br />
            <div className='section-title'>
              <h3>My Skills</h3>
              <div className='underline'></div>
            </div>
            <div className='about-stack'>
              <span>HTML</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '70%' }}>
                  80%
                </div>
              </div>
              <br />
              <span>CSS</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '70%' }}>
                  70%
                </div>
              </div>
              <br />
              <span>JavaScript</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '80%' }}>
                  80%
                </div>
              </div>
              <br />
              <span>React.js</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '70%' }}>
                  70%
                </div>
              </div>
              <br />
              <span>Node.js</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '70%' }}>
                  70%
                </div>
              </div>
              <br />
              <span>Express.js</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '80%' }}>
                  80%
                </div>
              </div>
              <br />
              <span>MongoDB</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '60%' }}>
                  60%
                </div>
              </div>
              <br />
              <span>Redux</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '60%' }}>
                  60%
                </div>
              </div>
              <br />
              <span>Bootstrap</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '80%' }}>
                  80%
                </div>
              </div>
              <br />
              <span>SQL</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '60%' }}>
                  60%
                </div>
              </div>
              <br />
              <span>Blockchain</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '100%' }}>
                  Beginner
                </div>
              </div>
              <br />
              <span>C/C++</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '90%' }}>
                  90%
                </div>
              </div>
              <br />
              <span>DS and Algo</span>
              <br />
              <div class='progress'>
                <div class='progress-bar bg-info' style={{ width: '90%' }}>
                  90%
                </div>
              </div>
              <br />
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;
