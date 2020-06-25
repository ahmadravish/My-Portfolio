import React, { Fragment } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.PNG';
import img3 from '../assets/img3.PNG';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';

const Project = () => {
  return (
    <Fragment>
      <article className='project'>
        <img src={img1} alt='img' className='project-img' />

        <div className='project-info'>
          <span className='project-number'>01.</span>
          <h3>Developer Connect</h3>
          <p className='project-desc'>
            An online social networking for developer to connect and show off
            their skills & git repos at one place, user can also post something
            and others can like & comment on his post .It is developed using
            MERN stack
          </p>

          <div className='project-links'>
            <a href='https://github.com/ahmadravish/DevConnect-MERN'>
              <FaGithubSquare className='project-icon' />
            </a>
            <a href='https://secure-garden-22895.herokuapp.com/'>
              <FaShareSquare className='project-icon' />
            </a>
          </div>
        </div>
      </article>

      <article className='project'>
        <img src={img2} alt='img' className='project-img' />

        <div className='project-info'>
          <span className='project-number'>02.</span>
          <h3>Tech Store</h3>
          <p className='project-desc'>
            Tech store Developed using react hooks and strapi services .Having
            all specifications from add to cart to checkout using different
            payment methods .All products can be sorted and filtered according
            to user's need .It is live and hosted through heroku and netlify
          </p>

          <div className='project-links'>
            <a href='https://github.com/ahmadravish/vintage-tech-store'>
              <FaGithubSquare className='project-icon' />
            </a>
            <a href='https://vintage-technologies.netlify.app/'>
              <FaShareSquare className='project-icon' />
            </a>
          </div>
        </div>
      </article>

      <article className='project'>
        <img src={img3} alt='img' className='project-img' />

        <div className='project-info'>
          <span className='project-number'>03.</span>
          <h3>Beach resort</h3>
          <p className='project-desc'>
            Web app to look different rooms and their specifications of a resort
            with different filters .Developed using React.js and contentful
            service is used for DataBase.It is live and hosted through netlify
          </p>

          <div className='project-links'>
            <a href='https://github.com/ahmadravish/beach-resort'>
              <FaGithubSquare className='project-icon' />
            </a>
            <a href='https://beach-resort-ravish-ahmad.netlify.com/'>
              <FaShareSquare className='project-icon' />
            </a>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default Project;
