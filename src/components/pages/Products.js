import React from 'react';
import "./Products.css";
import Footer from '../Footer';

const Product = ({ title, iconSrc, altText, description }) => {
  return (
    <div className='products-item'>
      <h2>{title}
        <img src={iconSrc} alt={altText} className='icons' />
      </h2>
      <p>{description}</p>
    </div>
  );
}

const Products = () => {
  return (
    <>
      <div className='products'>
        <h1>Lomat</h1>
        <div className='products-container'>
          <ul>
            <Product
              title="Kaupunkilomat"
              iconSrc="/images/icon-city.png"
              altText="City"
              description="Tarjoamme unohtumattomia kaupunkilomia Suomen kauneimmissa kaupungeissa."
            />
            <Product
              title="Rantalomat"
              iconSrc="/images/icon-lake.png"
              altText="Lake"
              description="Nauti aurinkoisista hiekkarannoista ja meren läheisyydestä Suomen rannikolla."
            />
          </ul>
          <ul>
            <Product
              title="Luontolomat"
              iconSrc="/images/icon-creek.png"
              altText="Creek"
              description="Tutustu Suomen upeaan luontoon ja villieläimiin unohtumattomalla luontolomalla."
            />
            <Product
              title="Hiihtolomat"
              iconSrc="/images/icon-ski.png"
              altText="Skiing"
              description="Koe unohtumaton hiihtoloma Suomen lumisissa maisemissa."
            />
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
      <Footer />
    </>
  );
}

export default Products;