import React from 'react'
import './Spot.css'
import { Button } from './Button'

const Spot = () => {
    return (
        <div className='demo'>
            <div className='container'>
                <div className='col-1'>
                    <h2>Spot Publicitario</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quis voluptate deleniti, fugiat quisquam doloremque provident, dolorem nulla natus fuga distinctio quibusdam quia alias earum eaque maxime hic quas commodi magnam cum! Nesciunt, voluptates molestiae consectetur natus sequi architecto quos.</p>
                    <input type="text" placeholder='Email' />
                    <Button title='SUSCRIBIRSE' />
                </div>
                <div className='col-2'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/h6iLJE6KpRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Spot
