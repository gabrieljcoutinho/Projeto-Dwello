import React from 'react'
import "../Css/header.css"

import imgLogo from "../img/logoPage.png"

import imgLupaHeader from "../img/imgLupa.png"
import imguserHeader from "../img/imgUser.png"


const Header = () => {
  return (
    <div className='header'>

              <div className="itensDoHeader">
              <img src={imgLogo} alt=""  className='imgLogoHeader'/>

<ul className="headerLista">
  <li className="listaHeader"><a href="" className="linkHeaderLista">Home</a></li>
  <li className="listaHeader"><a href="" className="linkHeaderLista">Services</a></li>
  <li className="listaHeader"><a href="" className="linkHeaderLista">Agents</a></li>
  <li className="listaHeader"><a href="" className="linkHeaderLista">Contact</a></li>
</ul>

<ul className="iconesHeader">
        <li className="iconesHeaderLista"><a href="" className="linkIconeHeader"><img src={imgLupaHeader} alt="" className="imgIconeHeader" /></a></li>
        <li className="iconesHeaderLista"><a href="" className="linkIconeHeader"><img src={imguserHeader} alt="" className="imgIconeHeader" /></a></li>
        <button>Sign Up</button>
  </ul>

              </div>
    </div>
  )
}

export default Header