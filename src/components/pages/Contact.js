import React from 'react';
import './Contact.css';
import Footer from '../Footer';
import { Button } from '../Button';

const Contacts = () => {
  return (
    <>
      <div className="contacts-container">
        <h1>Yhteystiedot</h1>
        <p>Ota meihin yhteyttä alla olevilla yhteystiedoilla:</p>
        <div className="contact-info">
          <div>
            <h3>Sähköposti:</h3>
            <p>info@matkailusuomi.fi</p>
            <p>varaukset@matkailusuomi.fi</p>
          </div>
          <div>
            <h3>Puhelinnumero:</h3>
            <p>+358 123 456 789</p>
            <p>+358 987 654 321</p>
          </div>
        </div>
      </div>
      <section className='contact-subscription'>
        <p className='contact-subscription-heading'>
          Liity Seikkailu-uutiskirjeeseen saadaksesi parhaat loma-tarjouksemme.
        </p>
        <p className='contact-subscription-text'>
          Voit peruuttaa tilauksen milloin tahansa.
        </p>
        <div className='input-areas'>
          <form>
            <input type='email' name='email' placeholder='Sähköposti' className='footer-input' />
            <Button buttonStyle='btn--blue'>Tilaa</Button>
          </form>
        </div> 
        <div className="contact-image-container">
        <img src="/images/reindeer.jpg" alt="Reindeer" className="contact-image" />
      </div>
      </section>
      <Footer />
    </>

  );
}

export default Contacts;