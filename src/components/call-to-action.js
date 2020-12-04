import React from 'react';
import content from '../../content/call-to-action.yaml';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <section id='call-to-action'>
    <div className='row'>
      <div className='two columns header-col'>
        <h1>
          <FontAwesomeIcon icon={faQuestion} />
        </h1>
      </div>
      <div className='seven columns'>
        <h2>
          <a href={content.title.url}>{content.title.text}</a>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: content.body }} />
      </div>

      <div className='three columns action'>
        <a href={content.button.url} className='button'>
          {content.button.label}
        </a>
        <a href={content.button2.url} className='button apply'>
          {content.button2.label}
        </a>
      </div>
    </div>
  </section>
);
