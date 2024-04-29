import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='video.mp4' autoPlay loop muted />
      <h1>SEIKKAILU ODOTTAA</h1>
      <p>Mitä odotat?</p>
      <div className='hero-btns'>
        <Button
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path={{ path: '/products' }}
        >
          VALITSE LOMA
        </Button>
        <Button
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path={{ path: '/services' }}
        >
          KATSO PAKETIT
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;