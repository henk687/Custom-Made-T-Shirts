import React from 'react';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="hero-banner-top">
        <div className="hero-banner-top-content">
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>
        </div>
      </div>

      <div className="hero-banner-bottom">
        <div className="hero-banner-middle">
          <h3>{heroBanner.slogan}</h3>
        </div>

        <div className="hero-banner-bottom-content">
          <h3>{heroBanner.desc}</h3>
          <p className="beats-solo">{heroBanner.smallText}</p>
        </div>
        <div className="hero-banner-middle-image">
        </div>
      </div>
    </div >

  )
}

export default HeroBanner