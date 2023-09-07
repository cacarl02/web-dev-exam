import React from 'react'
import '../assets/styles/home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <div className='home-container'>
        <div className='home-title'>
          Buy, trade, and hold assets with the best cryptocurrency exchange in the Philippines.
        </div>
        <Link className='btn-more' to='/register'>Sign Up Now!</Link>
      </div>
    </section>
  )
}

export default Home