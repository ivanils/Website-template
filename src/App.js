import React from 'react'
import { Article, Brand, Cta, Feature, Navbar } from './components/export'
import{Footer, Blog, Possibility, Features, WhatGPT5, Header} from './containers/export'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg section_padding'>
        <Navbar/>
        <Header/>
      </div>
      <Brand />
      <WhatGPT5 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App