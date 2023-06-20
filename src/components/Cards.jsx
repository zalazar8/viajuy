import React from 'react';
import CardItem from './CardItem';
import lugar1 from '../images/capital.jpg'
import lugar2 from '../images/maymara.jpg'
import lugar3 from '../images/cuevas.jpg'
import lugar4 from '../images/salinas.jpg'
import lugar5 from '../images/vino.jpg'
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1>¡Mirá nuestros destinos!</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <CardItem 
                      src={lugar1}
                      text='Descubriendo Jujuy: Explora la riqueza cultural de su capital.'
                      path='/services'
                    />
                    <CardItem 
                      src={lugar2}
                      text='Maravillas en Maymara: Ascenso al cerro sagrado que cautiva los sentidos.'
                      path='/services'
                    />
                </ul>
                <ul className='cards-items'>
                    <CardItem 
                      src={lugar3}
                      text='Explorando las Cuevas del Inca: Tesoros ocultos en Humahuaca.'
                      path='/services'
                    />
                    <CardItem 
                      src={lugar4}
                      text='Entre cristales blancos: Un viaje único a las Salinas de Jujuy.'
                      path='/services'
                    />
                    <CardItem 
                      src={lugar5}
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