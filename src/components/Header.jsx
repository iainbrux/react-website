import React from 'react'
import '../styles/Header.css'

const Header = ({ setDisplay }) => {

  const removeClassName = () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
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

  return (
    <header>
      <h1><span className="pink">iain</span>.biz</h1>
      <nav>
        <ul>
          <li><a href="/" onClick={handleClick} className="active">HOME</a></li>
          <li><a href="/about" onClick={handleClick}>ABOUT</a></li>
          <li><a href="/contact" onClick={handleClick}>CONTACT</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header