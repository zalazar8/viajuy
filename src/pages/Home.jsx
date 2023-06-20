import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Testimonials from '../components/Testimonials';
import Spot from '../components/Spot';
import Footer from '../components/Footer';

function Home () {
    return (
        <>
            <Hero />
            <Cards />
            <Testimonials />
            <Spot />
            <Footer />
        </>
    )
}

export default Home;