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
                            </div>



                    </div>

                    <div className="divDaFlexBox">

                            <div className="movimentacaoDaImg">
                            <img src={iconeServices} alt="" />
                            </div>



                    </div>

                    <div className="divDaFlexBox">

                            <div className="movimentacaoDaImg">

                            </div>


                    <img src={iconeProcess} alt="" />
                    </div>

                    <div className="divDaFlexBox">

                            <div className="movimentacaoDaImg">

                            </div>

                    <img src={iconeSuporte} alt="" />

                    </div>
                </div>

    </div>
  )
}

export default WhyChosee