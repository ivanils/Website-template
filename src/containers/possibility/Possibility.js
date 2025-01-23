import React from 'react'
import possibility_img from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt5_possibility section_padding' id='possibility'>
      <div className='gpt5_possibility-img'>
        <img src={possibility_img} alt='possibility' />
      </div>
      <div className='gpt5_possibility-content'>
        <h4>Request early access to get started</h4>
        <h1 className='gradient_text'>The possibilities are beyond imagination</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility