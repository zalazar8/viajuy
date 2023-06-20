import React from 'react'
import test1 from '../images/robert.jpg'
import test2 from '../images/carolina.jpg'
import test3 from '../images/ronaldo.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='container'>
                <h1>Testimonios</h1>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={test1} alt='test1'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vel vitae, perspiciatis itaque modi, temporibus accusantium ipsam commodi quos pariatur reprehenderit aliquam recusandae rerum distinctio tempore nesciunt dolorum. Dolorem, iusto!</p>
                        <p><span>Robert Patrick</span></p>
                    </div>
                    <div className='card'>
                        <img src={test2} alt='test2'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vel vitae, perspiciatis itaque modi, temporibus accusantium ipsam commodi quos pariatur reprehenderit aliquam recusandae rerum distinctio tempore nesciunt dolorum. Dolorem, iusto!</p>
                        <p><span>Carolina Herrera</span></p>
                    </div>
                    <div className='card'>
                        <img src={test3} alt='test3'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vel vitae, perspiciatis itaque modi, temporibus accusantium ipsam commodi quos pariatur reprehenderit aliquam recusandae rerum distinctio tempore nesciunt dolorum. Dolorem, iusto!</p>
                        <p><span>Ronaldo Nazario</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
