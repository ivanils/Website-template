import React from 'react'
import './whatGPT5.scss'
import { Feature } from '../../components/export'

const WhatGPT5 = () => {
  return (
    <div className='gpt5_what section_margin' id='wGPT5'>
      <div className='gpt5_what-feature'>
        <Feature title="What is GPT5" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </div>
      <div className='gpt5_what-heading'>
        <h1 className='gradient_text'>
          The possibilites are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt5_what-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        <Feature title="Knwoledgebase" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        <Feature title="Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </div>
    </div>
  )
}

export default WhatGPT5