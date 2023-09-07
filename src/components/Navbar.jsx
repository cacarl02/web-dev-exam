import React, { useRef } from 'react'
import '../assets/styles/navbar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { LiaTimesSolid } from 'react-icons/lia'
import brandlogo from '../assets/images/brandgif.gif'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('toggle')
    }

  return (
    <header>
        <img src={brandlogo} alt="logo" />
        <nav ref={navRef}>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <LiaTimesSolid />
            </button>
            <Link className='links' to='/'>Home</Link>
            <Link className='links' to='/login'>Login</Link>
            <Link className='links' to='/profile'>Profile</Link>
            <Link className='links' to='/register'>Register</Link>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
  )
}

export default Navbar