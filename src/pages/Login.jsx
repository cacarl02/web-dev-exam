import React from 'react'
import '../assets/styles/login.css'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <section className='login-main'>
        <div className='login-container'>
            <h4>LOGIN</h4>
            <form>
                <div className='input-container'>
                    <label className='input-label' htmlFor="">Username</label>
                    <input 
                        className='input-field'
                        type='text'
                        placeholder='Username'

                    />
                </div>
                <div className='input-container'>
                    <label className='input-label' htmlFor="">Password</label>
                    <input 
                        className='input-field'
                        type='password'
                        placeholder='Password'
                        
                    />
                </div>
                <button onClick={handleSubmit} className='btn-login'>LOG IN</button>
            </form>
            <Link className='btn-signup' to='/register'>Create an Account here <FaLongArrowAltRight /></Link>
        </div>
    </section>
  )
}

export default Login