import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const[sticky, setSticky] = useState(false);

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        })
    }, [])


    return (
        <nav className={`container ${sticky ? 'teal-nav' : '' }`}>
            <img src={('assets/logo.png')} className='logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar
