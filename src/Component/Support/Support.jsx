import React , { useEffect } from 'react'
import grid from '../../asset/grid2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {

useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titileDiv">
          <small>travel support</small>
          <h2>Plan your travel with confiedence</h2>
          <p>Find help with booking and travel plans, see what
            to except along the
            journey!
          </p>
        </div>

        <div className="infoDiv grid">


          <div className="textDiv grid">
            <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">

              <span className="number"> 01</span>
              <h4>Travel requirments gor Dubai</h4>

              <p>Find help with booking and travel plans,see what
                to except along the
                journey! to your favourtie destinations!</p>
            </div>


            <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo ">

              <span className="number colorOne">02</span>
              <h4>Chauffer services at your arrival</h4>

              <p>Find help with booking and travel plans,see what
                to except along the
                journey! to your favourtie destinations!</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">

              <span className="number colorTwo">03</span>
              <h4>Multi-risk travel insuranse</h4>

              <p>Find help with booking and travel plans,see what
                to except along the
                journey! to your favourtie destinations!</p>
            </div>

          </div>

          <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
            <img src={grid} alt="" />
         </div>
        </div>
      </div>
    </div>
  )
}

export default Support