import React from 'react'
import './whatGPT5.scss'
import { Feature } from '../../components/export'

const WhatGPT5 = () => {
  return (
    <div className='gpt5_what section_margin' id='wGPT5'>
      <div className='gpt5_what-feature'>
        <Feature/>
      </div>
      <div className='gpt5_what-heading'>
        <h1 className='gradient-text'>
          The possibilites are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt5_what-container'>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default WhatGPT5