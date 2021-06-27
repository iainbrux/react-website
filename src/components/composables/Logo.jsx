import React from 'react'

const Logo = ({ inverseLogo, darkLogo, handleMouseOver, handleMouseOut, backToHome }) => {
  return (
    <div className="logo-wrapper">
      <img src={inverseLogo} alt="" className="logo bottom" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={backToHome} />
      <img src={darkLogo} alt="" className="logo top" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={backToHome} />
    </div>
  )
}

export default Logo