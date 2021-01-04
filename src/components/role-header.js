import React from 'react';
import content from '../../content/role-header.yaml';
import logo from "../../static/images/role-header-image.png";

export default () => (
  <section id='role-header'>
    <div className='row'>
      <div className='twelve columns'>
        <div className='role-header-image'>
          <img src={logo} alt='' className='animated fadeInUp' />
        </div>
        <div className='role-header-text'>
          <h1 className='responsive-headline'>{content.title}</h1>
          <p>{content.body}</p>
        </div>

      </div>
    </div>
  </section>
);
