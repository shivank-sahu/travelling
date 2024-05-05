import React, { useEffect } from 'react'
import london from '../../asset/london.jpg'
import dubai from '../../asset/dubai.jpg'
import newyork from '../../asset/newyork.jpg'
import india from '../../asset/india.jpg'

import a1 from '../../asset/a1.jpeg'
import a2 from '../../asset/a2.jpeg'
import m1 from '../../asset/m1.jpeg'
import s1 from '../../asset/s1.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [{
  id: 0,

  destinationImages: london,
  travelerImage: a1,
  travelerName: ' adarsh',
  socialLink: '@adarsh'

},
  {
    id: 1,

    destinationImages: dubai,
    travelerImage: a2,
    travelerName: ' arun',
    socialLink: '@arun'

  },
  {
    id: 2,

    destinationImages: newyork,
    travelerImage: m1,
    travelerName: ' mahesh',
    socialLink: '@mahesh'

  },
  {
  id: 3,

  destinationImages: india,
  travelerImage: s1,
  travelerName: ' smodi',
  socialLink: '@smodi'

}

]

const Travelers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this month!
        </h2>
        {/* card */}
        <div className="travelersContainer grid">
          {
            travelers.map(({ id, destinationImages,travelerName,travelerImage,socialLink}) => {
            
              return (
                <div      data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                  <img src={destinationImages} alt="" className="destinationImages" />
                  <div  className="travelerDetails">
                    <div className="travelerPicture">
               
                      
                      <img src={travelerImage} alt="" className='travelerImage'/>
                    </div>

                    {/* <div data-aos='fade-down' data-aos-duration='2500'className="travelerName"> */}
                    
                    <div className='travelerName'>
                    <span>{travelerName}</span>

                      <p>{socialLink }</p>
                    </div>
                  </div>
                </div>
            )
            })
         }

        </div>

      </div>
    </div>
  )
}

export default Travelers