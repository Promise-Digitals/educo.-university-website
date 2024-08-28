import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Providing Better <span>Education</span> for a better world.</h1>
                <p>Our Curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the complex and dynamic field of education.</p>
                <button className='btn'>Explore More <img src={'assets/dark-arrow.png'} /></button>
            </div>
        </div>
    )
}

export default Hero
