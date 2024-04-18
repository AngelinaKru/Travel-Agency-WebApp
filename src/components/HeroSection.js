import React from 'react'
import { Button } from './Button'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src="https://www.youtube.com/watch?v=jeF-vkqKXBE" autoPlay loop muted />
        <h1>SEIKKAILU ODOTTAA</h1>
        <p>Matkusta tänään</p>
        <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline'
          buttonSize='btn--large'>ALOITA MATKASI</Button>
          </div>
    </div>
  )
}

export default HeroSection
