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

                        <p className='paragrafoDreamHouse'>From cozy cottages to luxurious estates, our
                            dedicated team guides you through every step of the
                            journey, ensuring your dream home becomes a reality</p>
                </div>

    </div>
  )
}

export default DreamHouse