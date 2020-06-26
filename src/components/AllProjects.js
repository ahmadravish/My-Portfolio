import React, { Fragment } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.PNG';
import img3 from '../assets/img3.PNG';
import img4 from '../assets/img4.PNG';
import img5 from '../assets/img5.PNG';
import img6 from '../assets/img6.PNG';
import img7 from '../assets/img7.PNG';
import img8 from '../assets/img8.PNG';
import img9 from '../assets/img9.png';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';

const Project = () => {
  return (
    <Fragment>
      <article className='project'>
        <img src={img4} alt='img' className='project-img' />

        <div className='project-info'>
          <span className='project-number'>01.</span>
          <h3>Blockchain using Js</h3>
          <h3>Jun 2020</h3>
          <p className='project-desc'>
            Creating my own blockchain using javascript and interact it using
            APIs .Also developed an web application to explore the blockchain
            and its block using various parameters such as
            blockhash,transactionId and address
          </p>
          <div className='project-stack'>
            <span>CSS</span>
            <span>javascript</span>
            <span>React</span>
          </div>
          <div className='project-links'>
            <a href='https://github.com/ahmadravish/Blockchain'>
              <FaGithubSquare className='project-icon' />
            </a>
          </div>
        </div>
      </article>

      <article className='project'>
        <img src={img1} alt='img' className='project-img' />

        <div className='project-info'>
          <span className='project-number'>02.</span>
          <h3>Developer Connect</h3>
          <h3>Apr 2020 – Jun 2020</h3>
          <p className='project-desc'>
            An online social networking for developer to connect and show off
            their skills & git repos at one place, user can also post something
            and others can like & comment on his post .It is developed using
            MERN stack
          </p>
          <div className='project-stack'>
            <span>MongoDB</span>
            <span>Express</span>
            <span>React-Redux</span>
            <span>Node.js</span>
          </div>
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
          <span className='project-number'>03.</span>
          <h3>Tech Store</h3>
          <h3>Mar 2020 – Apr 2020</h3>
          <p className='project-desc'>
            Tech store Developed using react hooks and strapi services .Having
            all specifications from add to cart to checkout using different
            payment methods .All products can be sorted and filtered according
            to user's need .It is live and hosted through heroku and netlify
          </p>
          <div className='project-stack'>
            <span>MongoDB</span>
            <span>Express</span>
            <span>React-Redux</span>
            <span>Node.js</span>
          </div>
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
          <span className='project-number'>04.</span>
          <h3>Beach resort</h3>
          <h3>Jan 2020</h3>
          <p className='project-desc'>
            Web app to look different rooms and their specifications of a resort
            with different filters .Developed using React.js and contentful
            service is used for DataBase.It is live and hosted through netlify
          </p>
          <div className='project-stack'>
            <span>CSS</span>
            <span>React</span>
            <span>Strapi</span>
          </div>
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

      <article className='project'>
        <img src={img5} alt='img' className='project-img' />

        <div className='project-info'>
          <span className='project-number'>05.</span>
          <h3>Cocktail DB</h3>
          <h3>Feb 2020</h3>
          <p className='project-desc'>
            Web app based on API integration using React hooks .To search and
            view specification of particular cocktail .It is live and hosted
            through netlify
          </p>
          <div className='project-stack'>
            <span>CSS</span>
            <span>React</span>
            <span>APIs</span>
            <span>Strapi</span>
          </div>
          <div className='project-links'>
            <a href='https://github.com/ahmadravish/Cocktail-DB'>
              <FaGithubSquare className='project-icon' />
            </a>
            <a href='https://ahmad-cocktail-db.netlify.com/'>
              <FaShareSquare className='project-icon' />
            </a>
          </div>
        </div>
      </article>

      <article className='project'>
        <img src={img6} alt='img' className='project-img' />

        <div className='project-info'>
          <span className='project-number'>06.</span>
          <h3>Budget Calculator</h3>
          <h3>Jan 2020</h3>
          <p className='project-desc'>
            Simple calculator app to add and remove commodity and calculate the
            total budget over a time.Built using react.js and hosted on netlify
          </p>
          <div className='project-stack'>
            <span>React</span>
          </div>
          <div className='project-links'>
            <a href='https://github.com/ahmadravish/Budget_Calculator'>
              <FaGithubSquare className='project-icon' />
            </a>
            <a href='https://ahmad-budget-calculator.netlify.com/'>
              <FaShareSquare className='project-icon' />
            </a>
          </div>
        </div>
      </article>

      <article className='project'>
        <img src={img9} alt='img' className='project-img' />

        <div className='project-info'>
          <span className='project-number'>07.</span>
          <h3>User and Task APIs</h3>
          <h3>Nov 2019</h3>
          <p className='project-desc'>
            Apis with having all functionalites from login to insert media with
            full authentication and authorization
          </p>
          <div className='project-stack'>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>javascript</span>
          </div>
          <div className='project-links'>
            <a href='https://github.com/ahmadravish/task-manager-api'>
              <FaGithubSquare className='project-icon' />
            </a>
          </div>
        </div>
      </article>

      <article className='project'>
        <img src={img7} alt='img' className='project-img' />

        <div className='project-info'>
          <span className='project-number'>08.</span>
          <h3>Chat App</h3>
          <h3>Oct 2019</h3>
          <p className='project-desc'>
            Chat app to chat and make separate rooms.developed using socket.io
          </p>
          <div className='project-stack'>
            <span>Socket.io</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>
      </article>

      <article className='project'>
        <img src={img8} alt='img' className='project-img' />
        <div className='project-info'>
          <span className='project-number'>09.</span>
          <h3>Weather App</h3>
          <h3>Sep 2019</h3>
          <p className='project-desc'>
            Web app to check whether of any location.Built using api integration
            through node.js
          </p>
          <div className='project-stack'>
            <span>Node.js</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>javascript</span>
          </div>
          <div className='project-links'>
            <a href='https://github.com/ahmadravish/node-3-weather-web'>
              <FaGithubSquare className='project-icon' />
            </a>
            <a href='https://ravish-weather-app.herokuapp.com/'>
              <FaShareSquare className='project-icon' />
            </a>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default Project;
