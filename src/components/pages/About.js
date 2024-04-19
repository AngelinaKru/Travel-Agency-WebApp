import React from 'react';

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
            <p>Tervetuloa Matkailu Suomi -sivustolle! Olemme omistautuneita tarjoamaan sinulle parhaat vinkit ja suositukset Suomen matkailuun liittyen. Oli kyseessä sitten luontomatkailu, kaupunkiloma, seikkailumatka tai rentouttava rannikkoloma, meillä on tietoa ja inspiraatiota tarjota.</p>
            </div>
          </div>
          <div className='about-more-info'>
          <p>Matkailu Suomi -tiimimme koostuu asiantuntijoista, jotka rakastavat jakaa intohimonsa Suomen kauniisiin maisemiin ja kulttuuriin. Haluamme auttaa sinua suunnittelemaan unohtumattoman loman täällä Suomessa.</p>
          <div className="about-imgs">
            <img src="images/about-2.jpg" alt="Group of people" />
            <img src="images/about-3.jpg" alt="Group of people" />
            <img src="images/about-4.jpg" alt="Group of people" />
          </div>
            <p>Ota aikaa tutustua sivustoomme ja löydä inspiraatiota seuraavaa matkaasi varten. Jos sinulla on kysyttävää tai tarvitset apua, älä epäröi ottaa meihin yhteyttä. Hyvää matkaa!</p>
            </div> 
        
      </div>
    </>
  );
}

export default About;
