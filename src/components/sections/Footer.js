import React from 'react';

import linkedIn from '../../assets/img/ic_linkedin.png'
import twitter from '../../assets/img/ic_twitter.png'
import fb from '../../assets/img/ic_fb.png'
import email from '../../assets/img/email.png'

const Footer = () => {
  return(
    <div className="footer">
      <p>&copy;	2020 Company. All Rights Reserved</p>
      <div className="footer__social">
        <span>Follow us on: </span>
        <a href="/#"><img alt="Facebook" src={fb} /></a>
        <a href="/#"><img alt="Linked In" src={linkedIn} /></a>
        <a href="/#"><img alt="Twitter" src={twitter} /></a>
        <a href="/#"><img alt="Email" src={email} /></a>
      </div>
    </div>
  );
}

export default Footer;