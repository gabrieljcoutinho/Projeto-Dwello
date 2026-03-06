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


        <div className="flexbox residenciasPopularesFlexBox">

            <div className="divFlexBoxDivCasasVendas">
                    <img src={img1} alt="" />

                    <ul className="listaIconeEnomeCidade">
                    <li><img src={imgMaps} alt="" /></li>
                        <li></li>
                    </ul>

            </div>

            <div className="divFlexBoxDivCasasVendas">
            <img src={img2} alt="" />

            <ul className="listaIconeEnomeCidade">
                        <li><img src={imgMaps} alt="" /></li>
                        <li></li>
                    </ul>

            </div>

            <div className="divFlexBoxDivCasasVendas">
            <img src={img3} alt="" />

            <ul className="listaIconeEnomeCidade">
            <li><img src={imgMaps} alt="" /></li>
                        <li></li>
                    </ul>

            </div>

        </div>

    </div>
  )
}

export default Popularresidences