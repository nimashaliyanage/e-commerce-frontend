import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
        <input type="text" placeholder='Enter Your Name' />
        <input type="email" placeholder='Enter Your Email' />
        <input type="password" placeholder='Password' />
        </div>
        <button>Sign Up</button>
        <p className='loginsignup-login'>Already have an account? <span>Login</span> </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
