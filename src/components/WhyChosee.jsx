import React from 'react'
import "../Css/WhyChoose.css"

import iconeLocalizacao from "../img/iconeLocalizacao.png"
import iconeServices from "../img/iconeServices.png"
import iconeProcess from "../img/iconeProcesso.png"
import iconeSuporte from "../img/iconeSuporte.png"



const WhyChosee = () => {
  return (
    <div className='escolhaDeCasa'>

                <h3 className='tituloWhyChose'>Why Choose Us</h3>
                <p className="conteudoChoose">Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service</p>


                <div className="flexbox">
                    <div className="divDaFlexBox">

                            <div className="movimentacaoDaImg">
                            <img src={iconeLocalizacao} alt="" />
                            <br /><br />

                            <h4 className="tituloWhyChoseeDivs">Expert Guidance</h4>
                            <p className="paragrafoWhyChooseUs">
                            Benefit from our team's seasoned expertise for a smooth buying experience
                            </p>
                            </div>



                    </div>

                    <div className="divDaFlexBox">

                            <div className="movimentacaoDaImg">
                            <img src={iconeServices} alt="" />
                            <br /><br />
                            <h4 className="tituloWhyChoseeDivs">Personalized Service</h4>
                            <p className="paragrafoWhyChooseUs">

                            </p>
                            </div>



                    </div>

                    <div className="divDaFlexBox">

                            <div className="movimentacaoDaImg">
                            <img src={iconeProcess} alt="" />
                            <br /><br />
                            <h4 className="tituloWhyChoseeDivs">Transparent Process</h4>
                            <p className="paragrafoWhyChooseUs">

                            </p>
                            </div>

                    </div>

                    <div className="divDaFlexBox">

                            <div className="movimentacaoDaImg">
                            <img src={iconeSuporte} alt="" />
                            <br /><br />
                            <h4 className="tituloWhyChoseeDivs">Exceptional Support</h4>
                            <p className="paragrafoWhyChooseUs">

                            </p>
                            </div>

                    </div>
                </div>

    </div>
  )
}

export default WhyChosee