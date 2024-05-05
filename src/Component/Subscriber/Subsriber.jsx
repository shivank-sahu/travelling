import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Subsriber = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    
  
  
    <div className="subscriber section">
      <div data-aos='fade-up' data-aos-duration='2500'className="sectionContainer container">

        <h2>subscribe Newsletter & get Latest News</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder='Enter your Email address' />
          <button className='btn'>Subscribe</button>
        </div>
      </div>
  </div>
  
    )
}

export default Subsriber