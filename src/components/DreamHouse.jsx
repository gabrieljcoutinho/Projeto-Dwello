import React from 'react'
import "../Css/houseDream.css"

import imgHouseDream from "../img/dreameHouse.png"

const DreamHouse = () => {
  return (
    <div className='dreamHouseDiv'>

                <div className="imgDreamHouse">
                    <img src={imgHouseDream} alt="" />
                </div>

                <div className="conteudoDreamHouse">
                        <h3>We Help You To Find <br />
                            Your Dream Home</h3>

                        <p className='paragrafoDreamHouse'>From cozy cottages to luxurious estates, our <br />
                            dedicated team guides you through every step of the<br />
                            journey, ensuring your dream home becomes a reality</p>

                            <ul className='avaliacaoCasaPrincipal'>

                                                    <li className='itemListaAvaliacaoCasa'>
                                                        <h4>8K+</h4>
                                                        <p>House Available</p>

                                                    </li>

                                                    <li className='itemListaAvaliacaoCasa'>
                                                        <h4>6K+</h4>
                                                        <p>House Sold</p>

                                                    </li>

                                                    <li>
                                                        <h4>2K+</h4>
                                                        <p>Trusted Agents</p>

                                                    </li>



                            </ul>
                </div>

    </div>
  )
}

export default DreamHouse