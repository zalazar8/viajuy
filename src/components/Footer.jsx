import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Acerca De</h2>
                    <Link to='/'>Nosotros</Link>
                    <Link to='/'>Historia</Link>
                    <Link to='/'>Objetivos</Link>
                    <Link to='/'>Empresa</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contáctenos</h2>
                    <Link to='/'>Contacto</Link>
                    <Link to='/'>Soporte</Link>
                    <Link to='/'>Destinos</Link>
                    <Link to='/'>Representante</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Paisajes</Link>
                    <Link to='/'>Viajes</Link>
                    <Link to='/'>Agencia</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Síganos</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <hr />
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link className='social-logo'>
                        VIAJUY 
                    </Link>
                </div>
                
                <div className='social-icons'>
                    <Link className='social-icon-link' to='/'>
                        <i className='fab fa-facebook' />
                    </Link>
                    <Link className='social-icon-link' to='/'>
                        <i className='fab fa-instagram' />
                    </Link>
                    <Link className='social-icon-link' to='/'>
                        <i className='fab fa-youtube' />
                    </Link>
                    <Link className='social-icon-link' to='/'>
                        <i className='fab fa-twitter' />
                    </Link>
                    <Link className='social-icon-link' to='/'>
                        <i className='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;