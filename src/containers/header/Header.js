import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gpt5_header ' id='home'>
      <div className='gpt5_header-content'>
        <h1 className='gradient_text'>Let's Build Something amazing with GPT-5 OPENAI</h1>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Purus conubia nam ut class maximus fringilla efficitur. Mauris libero porta; litora ridiculus penatibus aliquet. Lorem ipsum odor amet, consectetuer adipiscing elit. Purus conubia nam ut class maximus fringilla efficitur.</p>
        <div className='gpt5_header-content_input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt5_header-content_people'>
          <img src={people} alt='people' />
          <p>1600 people requested access a visit in last 24 hours.</p>
        </div>
      </div>
      <div className='gpt5_header-image'>
        <img src={ai} alt='ai' />
      </div>

    </div>
  )
}

export default Header