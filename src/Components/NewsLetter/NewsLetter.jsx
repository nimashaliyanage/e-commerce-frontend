import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Offers On Your Email</h1>
      <p>Subscribe and Stay Updated</p>
      <div>
        <input type="email" placeholder='Enter your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
