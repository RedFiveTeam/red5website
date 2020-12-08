import React from 'react';
import content from '../../content/call-to-action.yaml';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export default () => {
  const { footer } = useSiteMetadata();
  return (
    <section id='call-to-action'>
      <div className='row'>
        <div className='two columns header-col'>
          <div className='columns'>
            <div className='footer-logo'>
              <AnchorLink to='/'>
                <img src={footer.logo} alt='' width='150px' height='150px' />
              </AnchorLink>
            </div>
          </div>
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
  )
};
