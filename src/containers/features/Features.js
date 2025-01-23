import React from 'react'
import { Feature } from '../../components/export'

const features_data = [
  {
    title: 'Improving end distrusts instantly', 
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestib'
  },
  {
    title: 'Become the tended active', 
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestib'
  },
  {
    title: ' Message or am nothing', 
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestib'
  },
  {
    title: ' Really boy law county', 
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat.'
  }
]

const Features = () => {
  return (
    <div className='gpt5_features section_padding' id='features'>
      <div className='gpt5_features-heading'>
        <h1 className='gradient_text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen</h1>
        <p>Request Earley Access to Get Started</p>
      </div>
      <div className='gpt5_features-container'>
        {features_data.map((feature, index) => {
          return (
            <Feature addclass="row" key={index} title={feature.title} text={feature.text} />
          )
        })}
      </div>
    </div>
  )
}

export default Features