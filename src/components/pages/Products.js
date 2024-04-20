import React from 'react';
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className='products'>
        <h1>Lomat</h1>
        <div className='products-container'>
          <ul>
            <div className='products-item'>
              <h2>Kaupunkilomat 
                <img src='/images/icon-city.png' alt='City' className='icons'/>
              </h2>
              <p>Tarjoamme unohtumattomia kaupunkilomia Suomen kauneimmissa kaupungeissa.</p>
            </div>
            <div className='products-item'>
              <h2>Rantalomat
                <img src='/images/icon-lake.png' alt='Lake' className='icons'/>
              </h2>
              <p>Nauti aurinkoisista hiekkarannoista ja meren läheisyydestä Suomen rannikolla.</p>
            </div>
          </ul>
          <ul>
            <div className='products-item'>
              <h2>Luontolomat
                <img src='/images/icon-creek.png' alt='Creek' className='icons'/>
              </h2>
              <p>Tutustu Suomen upeaan luontoon ja villieläimiin unohtumattomalla luontolomalla.</p>
            </div>
            <div className='products-item'>
              <h2>Hiihtolomat
                <img src='/images/icon-ski.png' alt='Skiing' className='icons'/>
              </h2>
              <p>Koe unohtumaton hiihtoloma Suomen lumisissa maisemissa.</p>
            </div>
          </ul>
        </div>
      </div>
      <div className='image-row'>
        <img src='/images/boat.jpg' alt='Boat' className='wider-image' />
        <img src='/images/lomat-city-1.jpg' alt='City 1' className='narrow-image' />
      </div>
      <div className='image-row-2'>
        <img src='/images/lomat-ski.jpg' alt='Ski' className='narrow-image' />
        <img src='/images/lomat-city-2.jpg' alt='City 2' className='wider-image' />
      </div>
    </>
  );
}

export default Products;