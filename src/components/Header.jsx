import React from 'react'
import "../Css/header.css"

import imgLogo from "../img/logoPage.png"

import imgLupaHeader from "../img/imgLupa.png"


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
                <li className="iconesHeader"><a href="" className="linkIconeHeader"><img src="" alt="" className="imgIconeHeader" /></a></li>
                <li className="iconesHeader"><a href="" className="linkIconeHeader"><img src="" alt="" className="imgIconeHeader" /></a></li>
          </ul>

    </div>
  )
}

export default Header