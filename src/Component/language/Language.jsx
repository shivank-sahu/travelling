import React, { useEffect } from 'react'
import imageGrid from '../../asset/imgo.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Language = () => {

useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="language  container section">
      <div className="sectionContainer grid">
        <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
          <img src={imageGrid} alt="" />
        </div>


        <div className="textDiv">
          <h2 data-aos='fade-down' data-aos-duration='2500'>Lorem ipsum dolor sit amet </h2>
        </div>

        <div className="grids grid">
          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
              Help through THe airpot
            </span>
            <p>You can also call airline from your phone and book a fkight ticket
              to one of your favorite destinations
            </p>
          </div>

          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
             Priority Boarding
            </span>
            <p>You can also call airline from your phone and book a fkight ticket
              to one of your favorite destinations
            </p>
          </div>

          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
              Care on the flight
            </span>
            <p>You can also call airline from your phone and book a fkight ticket
              to one of your favorite destinations
            </p>
          </div>
        </div>



        
      </div>
    </div>
  )
}

export default Language