import React from 'react';
import '../../App.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Palvelut</h1>
      <p>Tarjoamme sinulle mahdollisuuden varata kaiken valmiiksi suunniteltuna matkapakettina Suomeen. Toimistomme huolehtii mukavasta kuljetuksesta, majoituksen varaamisesta sekä erilaisten aktiviteettien järjestämisestä, jotta voit nauttia matkastasi täysin siemauksin.</p>
      <p>Olipa kyseessä sitten kaupunkiloma, luontoretki, risteily tai talviaktiviteetit, me autamme sinua löytämään juuri sinulle sopivan matkapaketin ja teemme matkasi suunnittelun mahdollisimman vaivattomaksi.</p>
      <img src="images/services.jpg" alt="Office Image" className="services-image"/>
    </div>
  );
}

export default Services;
