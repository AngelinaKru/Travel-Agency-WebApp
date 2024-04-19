import React from 'react';
import '../../App.css';

const Products = () => {
  return (
    <div className='products'>
      <h1>Lomat</h1>
      <div className='products-container'>
        <div className='products'>
          <h2>Kaupunkilomat</h2>
          <p>Tarjoamme unohtumattomia kaupunkilomia Suomen kauneimmissa kaupungeissa.</p>
        </div>
        <div className='products'>
          <h2>Rantalomat</h2>
          <p>Nauti aurinkoisista hiekkarannoista ja meren läheisyydestä Suomen rannikolla.</p>
        </div>
        <div className='products'>
          <h2>Luontolomat</h2>
          <p>Tutustu Suomen upeaan luontoon ja villieläimiin unohtumattomalla luontolomalla.</p>
        </div>
        <div className='products'>
          <h2>Hiihtolomat</h2>
          <p>Koe unohtumaton hiihtoloma Suomen lumisissa maisemissa.</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
