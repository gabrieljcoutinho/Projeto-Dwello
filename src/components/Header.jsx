import React from 'react'
import "../Css/header.css"


const Header = () => {
  return (
    <div className='header'>

        <ul className="headerLista">
          <li className="listaHeader"><a href="" className="linkHeaderLista">Home</a></li>
          <li className="listaHeader"><a href="" className="linkHeaderLista">Services</a></li>
          <li className="listaHeader"><a href="" className="linkHeaderLista">Agents</a></li>
          <li className="listaHeader"><a href="" className="linkHeaderLista">Contact</a></li>
        </ul>

    </div>
  )
}

export default Header