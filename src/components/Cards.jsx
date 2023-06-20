import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1>¡Mirá nuestros destinos!</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <CardItem 
                      src='./src/images/capital.jpg'
                      text='Descubriendo Jujuy: Explora la riqueza cultural de su capital.'
                      path='/services'
                    />
                    <CardItem 
                      src='./src/images/maymara.jpg'
                      text='Maravillas en Maymara: Ascenso al cerro sagrado que cautiva los sentidos.'
                      path='/services'
                    />
                </ul>
                <ul className='cards-items'>
                    <CardItem 
                      src='./src/images/cuevas.jpg'
                      text='Explorando las Cuevas del Inca: Tesoros ocultos en Humahuaca.'
                      path='/services'
                    />
                    <CardItem 
                      src='./src/images/salinas.jpg'
                      text='Entre cristales blancos: Un viaje único a las Salinas de Jujuy.'
                      path='/services'
                    />
                    <CardItem 
                      src='./src/images/vino.jpg'
                      text='El sabor del encanto: Degusta los secretos de Bodega La Selestina.'
                      path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards