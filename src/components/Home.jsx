import React from 'react'
import "../Css/home.css"

import imgHomeCasa from "../img/imgHome.png"

const Home = () => {
  return (
    <div className='Home'>

            <div className="conteudoEscrito">
                <h1 className="tituloPrincipal">Find Your <br />  Dream Home</h1>

                <br />

                <p className="paragrafoPrincipal">Explore our curated selection of exquisiter <br />
                   properties meticulously tailored to yourr <br />
                   unique dream home vision</p>

                   <br /><br />

                   <button className="btnHome">Sing Up</button>

            </div>

            <div className="conteudoImagem">
          <img src={imgHomeCasa} alt="" />
            </div>

        </div>
  )
}

export default Home