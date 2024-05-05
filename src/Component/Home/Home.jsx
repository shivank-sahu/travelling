
import React, {useEffect} from 'react'
import plane from '../../asset/plane2.png'
import video from '../../asset/video.mp4'





import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
 

Aos.init({duration:2000})
  },[])

  return (
    <div className='home flex container '>
       <div className="mainText">
        <h1 data-aos='fade-up'       data-aos-duration='2500'>
              Create Ever lasting memory with us
            </h1>
        </div>

      
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={plane} className='plane' alt="" />
      </div>
    </div>
  )
}

export default Home
