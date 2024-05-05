import React, { useEffect } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { RxCalendar } from 'react-icons/rx'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
   
    
    <div className="search container section">
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">

          
            <span>Economy</span>

          </div>

          <div className="singleBtn">
          <span>Business class</span>
          </div>

          <div className="singleBtn">
          <span>first Class</span>
          </div>

        </div>
      
        
        <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">

          <div className="singleInput flex">
            <div className="iconDiv">
             
          < HiOutlineLocationMarker className='icon'/>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Wherer do you want to go'/>
            </div>
          </div>

           <div className="singleInput flex">
            <div className="iconDiv">
             
          < RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Travel</h4>
              <input type="text" placeholder='Add guests'/>
            </div>
          </div>

           <div className="singleInput flex">
            <div className="iconDiv">
             
          < RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>check in</h4>
              <input type="text" placeholder='Add date'/>
            </div>
          </div>


           <div className="singleInput flex">
            <div className="iconDiv">
             
          < RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>check out</h4>
              <input type="text" placeholder='Add date'/>
            </div>
          </div>

          


          



        <button className='btn btnBlock flex'>Search Flight</button>
        
        </div>
        
        


      </div>


    </div>
  )
}

export default Search