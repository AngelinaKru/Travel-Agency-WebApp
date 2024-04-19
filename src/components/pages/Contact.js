import React from 'react';
import '../../App.css';

const Contacts = () => {
  return (
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
  );
}

export default Contacts;