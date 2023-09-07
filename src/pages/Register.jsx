import React from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa'

function Register() {

  const handleSubmit = (e) => {
    e.preventDefault();
}

  return (
    <section className='login-main'>
        <div className='login-container'>
            <h4>SIGNUP</h4>
            <form>
                <div className='input-container'>
                    <label className='input-label' htmlFor="">Full Name</label>
                    <input 
                        className='input-field'
                        type='text'
                        placeholder='e.g. John Doe'

                    />
                </div>
                <div className='input-container'>
                    <label className='input-label' htmlFor="">Email</label>
                    <input 
                        className='input-field'
                        type='email'
                        placeholder='johndoe@gmail.com'
                        
                    />
                </div>
                <div className='input-container'>
                    <label className='input-label' htmlFor="">Password</label>
                    <input 
                        className='input-field'
                        type='password'
                        placeholder='min of 8 characters'
                        
                    />
                </div>
                <div className='input-container'>
                    <label className='input-label' htmlFor="">Confirm Password</label>
                    <input 
                        className='input-field'
                        type='password'
                        placeholder='Confirm Password'
                        
                    />
                </div>
                <button onClick={handleSubmit} className='btn-login'>SIGNUP</button>
            </form>
            <Link className='btn-signup' to='/login'><FaLongArrowAltLeft /> Return to Login</Link>
        </div>
    </section>
  )
}

export default Register