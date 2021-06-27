import React, { useState } from 'react'
import Nav from './composables/Nav'
import '../styles/Header.css'
import darkLogo from '../img/logo.png'
import inverseLogo from '../img/logo-inverse.png'

const Header = ({ setDisplay }) => {

  const [logo, setLogo] = useState(darkLogo)

  const removeClassName = () => {
    document.querySelector('.active').classList.remove('active');
  }

  const scrollToTop = () => {
    document.body.scrollTop = 0; //for Safari
    document.documentElement.scrollTop = 0; //for all others
  }

  const handleClick = (e) => {
    e.preventDefault();
    removeClassName();
    scrollToTop();
    e.target.classList.add('active')
    setDisplay(e.target.innerText.toLowerCase());
  }

  const backToHome = () => {
    setDisplay('home');
    removeClassName();
    document.querySelector('.home').classList.add('active');
  }

  const handleMouseOver = (e) => {
    setLogo(inverseLogo)
  }

  return (
    <header>
      <img src={logo} alt="iain.biz logo" className="logo" />
      <Nav handleClick={handleClick} backToHome={backToHome} />
    </header>
  )
}

export default Header