import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faCity, faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons';

export default () => {
  const { social, contacts, referrals } = useSiteMetadata();
  return (
    <footer>
      <div className='row'>
        <div className='twelve columns footer-connect'>
          <div className='row'>
            <div className='four columns footer-social'>
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
            <div className='four columns footer-contact'>
              <FontAwesomeIcon icon={faEnvelope} />
              <h3 className='contact'>Contact Red Five</h3>
              <ul>
                {contacts.map((contact, index) => (
                  <li key={index}>
                    <a href={contact.url}>{contact.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='four columns last footer-referral'>
              <FontAwesomeIcon icon={faCity} />
              <h3 className='referral'>Checkout more Air Force software factories</h3>
              <ul>
                {referrals.map((myReferral, index) => (
                  <li key={index}>
                    <a href={myReferral.url}>{myReferral.text}</a>
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
