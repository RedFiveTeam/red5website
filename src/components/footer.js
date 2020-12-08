import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons';

export default () => {
  const { social, contacts } = useSiteMetadata();
  return (
    <footer>
      <div className='row'>
        {/*<div className='four columns info'>*/}
        {/*  <div className='footer-logo'>*/}
        {/*      <img src={footer.logo} alt='' width='130px' height='145px' />*/}
        {/*  </div>*/}

        {/*  <p>{footer.text}</p>*/}
        {/*</div>*/}

        <div className='four columns'>
          <div className='row'>

            <div className='two columns'>
              <FontAwesomeIcon icon={faUsers} />
              <h3 className='social'>socialize</h3>
              <ul>
                {social.map((mySocial, index) => (
                  <li key={index}>
                    <a href={mySocial.url}>{mySocial.service}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='two columns last'>
              <FontAwesomeIcon icon={faEnvelope} />
              <h3 className='contact'>Contact Us</h3>
              <ul>
                {contacts.map((contact, index) => (
                  <li key={index}>
                    <a href={contact.url}>{contact.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


         <p className="copyright">&copy; 2020 Red 5, All rights reserved</p>

        <div id='go-top'>
          <button title='Back to Top' onClick={() => scrollTo('#top')}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
      </div>
    </footer>
  );
};
