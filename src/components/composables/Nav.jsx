import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ handleClick, backToHome }) => {
  return (
    <div className="header-container">
      <Link exact to="/">
        <h1 onClick={backToHome}>
          <span className="green">iain</span><span className="pink">.biz</span>
        </h1>
      </Link>
       <nav>
        <ul>
          <Link exact to="/">
            <li className="home active" onClick={handleClick}>home</li>
          </Link>
          <Link to="/portfolio">
            <li className="portfolio" onClick={handleClick}>portfolio</li>
          </Link>
          <Link to="/about">
            <li className="about" onClick={handleClick}>about</li>
          </Link>
          <Link to="contact">
            <li className="contact" onClick={handleClick}>contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;