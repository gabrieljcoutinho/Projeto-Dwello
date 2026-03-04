import React from 'react'
import "../Css/header.css"

import imgLogo from "../img/logoPage.png"


const Header = () => {
  return (
    <div className='header'>

      <img src={imgLogo} alt=""  className='imgLogoHeader'/>

        <ul className="headerLista">
          <li className="listaHeader"><a href="" className="linkHeaderLista">Home</a></li>
          <li className="listaHeader"><a href="" className="linkHeaderLista">Services</a></li>
          <li className="listaHeader"><a href="" className="linkHeaderLista">Agents</a></li>
          <li className="listaHeader"><a href="" className="linkHeaderLista">Contact</a></li>
        </ul>

        <ul className="icones">
          
          </ul>Header

    </div>
  )
}

export default Header