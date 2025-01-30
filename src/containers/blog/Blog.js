import React from 'react'
import { Article } from '../../components/export'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt5_blog section_padding' id='blog'>
      <div className='gpt5_blog-heading'>
        <h2 className='gradient_text'>A lot is happening, We are blogging about it.</h2>
      </div>
      <div className='gpt5_blog-container'>
        <div className='gpt5_blog-container_groupA'>
          <Article imgUrl={blog01} date="30/01/2025" title="GPT5 and OpenAI is the future. Let us explore how it is?"/>
        </div>
        <div className='gpt5_blog-container_groupB'>
          <Article imgUrl={blog02} date="30/01/2025" title="GPT5 and OpenAI is the future. Let us explore how it is?" />
          <Article imgUrl={blog03} date="30/01/2025" title="GPT5 and OpenAI is the future. Let us explore how it is?" />
          <Article imgUrl={blog04} date="30/01/2025" title="GPT5 and OpenAI is the future. Let us explore how it is?" />
          <Article imgUrl={blog05} date="30/01/2025" title="GPT5 and OpenAI is the future. Let us explore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog