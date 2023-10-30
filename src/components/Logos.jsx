import React from 'react'
import imgReact from "../img/react.png"
import "../style/logo.css"

const Logos = () => {
  return (
    <div className='contenedorLogo'>
      <img src={imgReact} className='logo' alt="LogoReact" />
    </div>
  )
}

export default Logos
