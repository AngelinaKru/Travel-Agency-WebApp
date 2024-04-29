import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Liity Seikkailu-uutiskirjeeseen saadaksesi parhaat loma-tarjouksemme.
                </p>
                <p className='footer-subscription-text'>
                    Voit peruuttaa tilauksen milloin tahansa.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Sähköposti' className='footer-input' />
                        <button buttonStyle='btn--outline'>Tilaa</button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2 href='/about'>Tietoa meistä</h2>
                        <a href='/services'>Miten se toimii</a>
                        <a href='/'>Testimonials</a>
                        <a href='/'>Käyttöehdot</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2 href='/contact'>Yhteystiedot</h2>
                        <a href='/contact'>Yhteystiedot</a>
                        <a href='/'>Tuki</a>
                        <a href='/'>Sponsori</a>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Video</h2>
                        <a href='https://youtu.be/jeF-vkqKXBE?si=gMysWrQiLXlmqATD'>Lähetä video</a>
                        <a href='/'>Ambassador</a>
                        <a href='/'>Agentit</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Sosiaalinen media</h2>
                        <a href='/'>Instagram</a>
                        <a href='/'>Facebook</a>
                        <a href='/'>Youtube</a>
                    </div>
                </div>
        </div>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='/images/logo-2.png' alt='logo' className='footer-logo'/>
            </Link>
          </div>
          <small class='website-rights'>MatkaSuomi © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Footer
