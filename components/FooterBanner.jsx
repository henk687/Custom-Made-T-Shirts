import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { description, titleLeft, titlemiddle, titleright, email, image } }) => {
  return (
    <div className="banner-desc">
      <div className="row">
        <div className="col">
          <p>
            {description}
          </p>
        </div>
        <div className="col">
          <h3>{titleLeft} <div className='underline'><span></span></div></h3>
          <p className='email-id'><a href={`mailto: ${email}`}>{email}</a></p>
        </div>
        <div className="col">
          <h3>{titleright} <div className='underline'><span></span></div></h3>
          <img
            src={urlFor(image)} className="footer-banner-image"
          />
        </div>
      </div>
    </div>
  )
}

export default FooterBanner