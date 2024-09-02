import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {

    const[sticky, setSticky] = useState(false);

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = ()=>{
        mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'teal-nav' : '' }`}>
            <img src={('assets/logo.png')} className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
            </ul>
            <img src={('assets/menu-icon.png')} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar
