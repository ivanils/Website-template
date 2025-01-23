import React from 'react'

const Feature = ({title, text, addclass}) => {
  return (
    <div className={addclass === 'row' ? 'gpt5_features-container_feature row' : 'gpt5_features-container_feature'}>
      <div className="gpt5_features-container_feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className='gpt5_features-container_feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature