import React from 'react'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gpt5_blog-container_article'>
      <div className='gpt5_blog-container_article-image'>
        <img src={imgUrl} alt='blog'/>
      </div>
      <div className='gpt5_blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article