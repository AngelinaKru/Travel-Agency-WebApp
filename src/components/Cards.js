import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Katso nämä MAHTAVAT kohteet!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src="images/city.jpg"
                text="Tutustu Suomen kaupunkiloman tarjontaan ja koe upeat kaupunkikohteet ympäri maata."
                label = "Kaupunkilomat"
                path = "/products"
                />
                <CardItem
                src="images/beach.jpg"
                text="Koe upeat hiekkarannat ja merellinen tunnelma Suomen rannikolla."
                label = "Rantalomat"
                path = "/products"
                />
                </ul>
                <ul className='cards__items'>
            <CardItem
              src='images/boat.jpg'
              text='Koe unohtumaton seikkailu Suomen järvillä ja vesillä aktiviteettien täyttämällä veneilylomalla.'
              label='Soutu'
              path='/products'
            />
             <CardItem
              src='images/skiing.jpg'
              text='Koe unohtumaton hiihtoloma Suomen lumisissa maisemissa.'
              label='Hiihtolomat'
              path='/products'
            />
            <CardItem
              src='images/bear.jpg'
              text='Tutustu Suomen upeaan luontoon ja villieläimiin unohtumattomalla luontolomalla.'
              label='Luontolomat'
              path='/products'
            />
          </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
