import React from 'react';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';
import UserImage from '../assets/hero-img.png';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

const Hero = () => {
  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div>
            <div className='underline'></div>
            <h1>i'm Ravish Ahmad</h1>
            <h4>Web Developer</h4>
            <Link to='/contact' class='btn btn-primary'>
              Contact Me
            </Link>
            <ul className='social-links'>
              <li>
                <a
                  href='https://www.facebook.com/ravish.ahmad.7'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-link'
                >
                  <FaFacebookSquare className='social-icon'></FaFacebookSquare>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/ahmadravish'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-link'
                >
                  <FaLinkedin className='social-icon'></FaLinkedin>
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/ahmadravish'
                  className='social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithubSquare className='social-icon' />
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/ahmad_ravish7'
                  className='social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaTwitterSquare className='social-icon'></FaTwitterSquare>
                </a>
              </li>
            </ul>
          </div>
        </article>
        <Img src={UserImage} className='hero-img' />
      </div>
    </header>
  );
};

export default Hero;
