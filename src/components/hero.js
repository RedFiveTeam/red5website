import React from 'react';
import content from '../../content/hero.yaml';

export default () => (
  <section id='hero'>
    <div className='row'>
      <div className='twelve columns'>
        <div className='hero-image'>
          <img src={content.image} alt='' className='animated fadeInUpBig' />
        </div>
        <div className='hero-text'>
          <h1 className='responsive-headline'>{content.headline}</h1>
          <p>{content.body}</p>
        </div>

      </div>
    </div>
  </section>
);
