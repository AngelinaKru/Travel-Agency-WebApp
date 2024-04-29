import React from 'react';
import "./About.css";
import Footer from '../Footer';

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1>Tietoa meistä</h1>
        <div className="about-content">
          <div className="about-img">
            <img src="images/about.jpg" alt="Group of people" />
          </div>
          <div className="about-text">
            <p>Tervetuloa Matkailu Suomi -sivustolle! Olemme omistautuneita tarjoamaan
              sinulle parhaat vinkit ja suositukset Suomen matkailuun liittyen. Oli
              kyseessä sitten luontomatkailu, kaupunkiloma, seikkailumatka tai rentouttava
              rannikkoloma, meillä on tietoa ja inspiraatiota tarjota.</p>
          </div>
        </div>
        <div className='about-more-info'>
          <p className='comp-content'>Matkailu Suomi -tiimimme koostuu asiantuntijoista, jotka rakastavat jakaa
            intohimonsa Suomen kauniisiin maisemiin ja kulttuuriin. Haluamme auttaa sinua
            suunnittelemaan unohtumattoman loman täällä Suomessa.</p>
          <div className="about-imgs">
            <img src="images/about-2.jpg" alt="Group of people" className='comp-content' />
            <img src="images/about-3.jpg" alt="Group of people" />
            <img src="images/about-4.jpg" alt="Group of people" className='comp-content' />
          </div>
          <p>Ota aikaa tutustua sivustoomme ja löydä inspiraatiota seuraavaa matkaasi varten. Jos sinulla on kysyttävää tai tarvitset apua, älä epäröi ottaa meihin yhteyttä. Hyvää matkaa!</p>
        </div>
      </div>
      <div className='why-choose-us'>
        <h2>Miksi Valita Meidät?</h2>
        <div className='advantages'>
          <div className='advantage'>
            <img src='/images/icon-group.png' alt='Etu 1' />
            <h3>Kokenut Ohjaus</h3>
            <p>Kokeneet matka-asiantuntijamme tarjoavat henkilökohtaista ohjausta luodakseen täydellisen matkan juuri sinulle.</p>
          </div>
          <div className='advantage'>
            <img src='/images/icon-wish.png' alt='Etu 2' />
            <h3>Räätälöidyt Paketit</h3>
            <p>Räätälöimme paketteja mieltymystesi mukaan, varmistaen että jokainen yksityiskohta sopii matkatoiveisiisi.</p>
          </div>
          <div className='advantage'>
            <img src='/images/icon-discount.png' alt='Etu 3' />
            <h3>"Exklusiiviset Tarjoukset"</h3>
            <p>Saat käyttöösi yksinoikeudellisia tarjouksia ja alennuksia lennoista, majoituksista ja aktiviteeteista.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;