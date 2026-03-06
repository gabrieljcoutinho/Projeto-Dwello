import React from 'react'
import "../Css/PopularResidence.css"

import img1 from "../img/casaVenda1.png"
import img2 from "../img/casaVenda2.png"
import img3 from "../img/casaVenda3.png"

import imgMaps from "../img/iconeMaps.png"

import imgQuarto from "../img/iconeQuarto.png"
import imgLargura from "../img/iconeLargura.png"

const Popularresidences = () => {
  return (
    <div>

        <h4 className="tituloResidenciasPopulares">Our Populares residences</h4>


        <div className="flexbox residenciasPopularesFlexBox">

            <div className="divFlexBoxDivCasasVendas">
                    <img src={img1} className='imgDaCasaNaVendaOurPopularesResidences' alt=""/>

                    <ul className="listaIconeEnomeCidade">
                    <li><img src={imgMaps} alt="" /></li>
                        <li className='itemListaCidade'>San Francisco, California</li>
                    </ul>

                    <ul className="tamanhoDaCasa">
                      <li className='listaUlTamnhoDaCasa'><img src={imgQuarto} alt="" className='imgListaUlTamnhoDaCasa' /> <p>4 rooms</p> </li>
                      <li className='listaUlTamnhoDaCasa'><img src={imgLargura} alt="" className='imgListaUlTamnhoDaCasa' /><p>3,500 sq ft</p></li>
                    </ul>


                    <ul className="compraEpreco">
                      <li className='listaBtnComprar'><button className='btnComprarCasa'>Buy Now</button></li>
                      <li className='listaBtnComprar'><p>$2,500,000</p></li>
                    </ul>

            </div>

            <div className="divFlexBoxDivCasasVendas">
            <img src={img2} className='imgDaCasaNaVendaOurPopularesResidences' alt="" />

            <ul className="listaIconeEnomeCidade">
                        <li><img src={imgMaps} alt="" /></li>
                        <li className='itemListaCidade' >Bervely Hills, California</li>
                    </ul>

                    <ul className="tamanhoDaCasa">
                      <li className='listaUlTamnhoDaCasa'><img src={imgQuarto} alt="" className='imgListaUlTamnhoDaCasa' /> <p>3 rooms</p></li>
                      <li className='listaUlTamnhoDaCasa'><img src={imgLargura} alt="" className='imgListaUlTamnhoDaCasa' /><p>1,500 sq ft</p></li>
                    </ul>


                    <ul className="compraEpreco">
                      <li className='listaBtnComprar'><button className='btnComprarCasa'>Buy Now</button></li>
                      <li className='listaBtnComprar'><p>$850,000</p></li>
                    </ul>

            </div>

            <div className="divFlexBoxDivCasasVendas">
            <img src={img3} className='imgDaCasaNaVendaOurPopularesResidences' alt=""  />

            <ul className="listaIconeEnomeCidade">
            <li><img src={imgMaps} alt="" /></li>
                        <li className='itemListaCidade'>Palo Alto, California</li>
                    </ul>

                    <ul className="tamanhoDaCasa">
                      <li className='listaUlTamnhoDaCasa'><img src={imgQuarto} alt="" className='imgListaUlTamnhoDaCasa' /><p>6 rooms</p></li>
                      <li className='listaUlTamnhoDaCasa'><img src={imgLargura} alt="" className='imgListaUlTamnhoDaCasa' /><p>4,000 sq ft</p></li>
                    </ul>

                    <ul className="compraEpreco">
                      <li className='listaBtnComprar'><button className='btnComprarCasa'>Buy Now</button></li>
                      <li className='listaBtnComprar'><p>$3,700,000</p></li>
                    </ul>

            </div>

        </div>

    </div>
  )
}

export default Popularresidences