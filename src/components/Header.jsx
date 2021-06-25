import React from 'react'
import '../styles/Header.css'

const Header = ({ setDisplay }) => {

  const handleClick = (e) => {
    e.preventDefault();
    setDisplay(e.target.innerText.toLowerCase());
  }

  return (
    <header>
      <h1><span className="pink">IAB</span>.dev</h1>
      <nav>
        <ul>
          <li><a href="/" onClick={handleClick}>HOME</a></li>
          <li><a href="/about" onClick={handleClick}>ABOUT</a></li>
          <li><a href="/contact" onClick={handleClick}>CONTACT</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header