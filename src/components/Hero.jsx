import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
            <h1>JUJUY</h1>
            <p>¡Vení a disfrutar!</p>
            <div className='hero-btns'>
                <Button path='/vermas' title='VER MÁS' />
            </div>
        </div>
    );
}

export default Hero;