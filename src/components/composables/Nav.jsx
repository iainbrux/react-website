import React from 'react'

const Nav = ({backToHome, handleClick}) => {
  return (
    <div className="header-container">
      <h1 onClick={backToHome}><span className="green">iain</span><span className="pink">.biz</span></h1>
       <nav>
        <ul>
          <li><a href="/" onClick={handleClick} className="home">home</a></li>
          <li><a href="/portfolio" onClick={handleClick} className="portfolio active">portfolio</a></li>
          <li><a href="/about" onClick={handleClick} className="about">about</a></li>
          <li><a href="/contact" onClick={handleClick} className="contact">contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;