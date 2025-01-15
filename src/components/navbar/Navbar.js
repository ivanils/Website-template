import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt5_navbar'>
      <div className='gpt5_navbar-links'>
        <div className='gpt5_navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='gpt5_navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wGPT5">What is GPT5</a></p>
          <p><a href="#possibility">OpenAI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className='gpt5_navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className='gpt5_navbar-menu'>
    {toggleMenu
    ?
    <RiCloseLine color ="#fff" size={27} onClick={()=>setToggleMenu(false)}/>
    :
    <RiMenu3Line color ="#fff" size={27} onClick={()=>setToggleMenu(true)}/>
    }
    {
      toggleMenu &&(
        <div></div>
      )
    }
      </div>
    </div>
  )
}

export default Navbar