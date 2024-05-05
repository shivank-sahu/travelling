import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import logo from '../../asset/airplanelogo3.png'
import { TiSocialFacebook } from 'react-icons/ti'
import { TiSocialTwitter } from 'react-icons/ti'
import { TiSocialLinkedin } from 'react-icons/ti'
import { TiSocialGithub } from 'react-icons/ti'

const Footer = () => {
   useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (

    <div className="footer">


      <div className="sectionContainer container grid">
        <div data-aos='fade-up' data-aos-duration='2500'className="gridOne">
          <div className="logoDiv">
            <img src={logo} alt="" className='logo' />
          </div>
          <p>Your mind should be stronger than your feelings ,fly!</p>
          <div className="socialIcon flex">
         
        
            <TiSocialFacebook className='icon' />
            <TiSocialTwitter className='icon' />
            
            <TiSocialLinkedin className='icon' />
            <TiSocialGithub className='icon' />
            
          </div>
        </div>
        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className='linkTitile'>Information</span>
          <li>
            <a href="" >Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            
           
          <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travele</a>
          </li>
          <li>
            <a href="">Check-In</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>

        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          
          
         <span className='linkTitile'>Quick Guide</span>
          <li>
          
          <a href="">our community</a>
          </li>
          <li>
            
          <a href="">FAQ</a>
          </li>
          <li>


            <a href="">how</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>

        </div>

        

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className='linkTitile'>Information</span>
          <li>
            <a href="">Chauffuer</a>
          </li>
          <li>
            <a href="">Our partemrs</a>
          </li>
          <li>


            <a href="">Destinations</a>
          </li>
          <li>
            <a href="">caree</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programe Rules</a>
          </li>

        </div>






      </div>

      
    </div>
  )
}

export default Footer