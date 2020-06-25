import React from 'react';
import service from './Service';
const Services = () => {
  return (
    <section className='section bg-grey'>
      <div className='section-title'>
        <h2>Services</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center services-center'>
        {service.map((service) => {
          const { id, icon, title, text } = service;

          return (
            <article key={id} className='service'>
              {icon}
              <h4>{title}</h4>
              <div className='underline'></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
