import React from 'react'
import "../Css/PopularResidence.css"

import img1 from "../img/casaVenda1.png"
import img2 from "../img/casaVenda2.png"
import img3 from "../img/casaVenda3.png"

import imgMaps from "../img/iconeMaps.png"

const Popularresidences = () => {
  return (
    <div>

        <h4 className="tituloResidenciasPopulares">Our Populares residences</h4>


        <div className="flexbox">

            <div className="divFlexBoxDivCasasVendas">
                    <img src={img1} alt="" />

                    <ul className="listaIconeEnomeCidade">
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>

            </div>

            <div className="divFlexBoxDivCasasVendas">
            <img src={img2} alt="" />
            </div>

            <div className="divFlexBoxDivCasasVendas">
            <img src={img3} alt="" />
            </div>

        </div>

    </div>
  )
}

export default Popularresidences