import React from 'react';
import './Services.css';
import Footer from '../Footer';

const Services = () => {
  return (
    <>
      <div className="service-content-2">
      <div className="overlay">
      <h1>Palvelut</h1>
        <p className='full-text'>
        Tarjoamme täysin suunniteltuja matkapaketteja Suomeen, jotka sisältävät 
        kuljetukset, majoituksen ja aktiviteetit, jotta voit nauttia matkastasi 
        täysillä. Olipa kyseessä kaupunkiloma, luontoretki, risteily tai 
        talviaktiviteetit, autamme sinua löytämään juuri sinulle sopivan paketin 
        ja teemme matkan suunnittelun vaivattomaksi. Varaa matkapakettisi Suomeen 
        ja nauti täysillä, oli se sitten kaupunkiloma, luontoretki, risteily tai talviaktiviteetti.
        </p>
        <p className='excerpt-text' display="none">
        Suunnitellut matkapaketit Suomeen, kuljetuksilla, majoituksilla ja aktiviteeteilla. Valitse 
        kaupunkiloma, luontoretki, risteily tai talviaktiviteetit helposti. Varaa matkasi nyt ja nauti täysillä!
        </p>
        </div>
        </div>
        <div className="service-item">
        <div className="vertical-line"></div>
        <p>Varaa matkapaketti Suomeen, jotta voit nauttia täysin siemauksin, 
          oli se sitten kaupunkiloma, luontoretki, risteily tai talviaktiviteetti</p>
      </div>
      <div className="service-table">
        <h2>Matkapaketit</h2>
        <table>
          <thead>
            <tr>
              <th>Paketti</th>
              <th>Kuvaus</th>
              <th>Hinta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paketti 1</td>
              <td>Täysi paketti kaupunkilomaan</td>
              <td>500€</td>
            </tr>
            <tr>
              <td>Paketti 2</td>
              <td>Loma luontoretkellä</td>
              <td>400€</td>
            </tr>
            <tr>
              <td>Paketti 3</td>
              <td>Romanttinen risteily</td>
              <td>600€</td>
            </tr>
            <tr>
              <td>Paketti 4</td>
              <td>Talven aktiviteetit</td>
              <td>450€</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Services;