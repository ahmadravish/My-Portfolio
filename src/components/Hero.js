import React from 'react';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';
import UserImage from '../assets/hero-img.png';

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
          </div>
        </article>
        <Img src={UserImage} className='hero-img' />
      </div>
    </header>
  );
};

export default Hero;
