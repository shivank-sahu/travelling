import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import logo from "../../asset/airplanelogo3.png";

import { CgMenuGridO } from "react-icons/cg";
// import { Link } from "react-router-dom";


const Navbar = () => {
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };

   const [noBg, addBg] = useState("navBarTwo");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navBar_With_Bg");
    }
    else {
      addBg('navBarTwo')
    }
  };
  window.addEventListener('scroll',addBgColor)

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          
        <SiConsul  className="icon"/>
        </div>

        <div className=" none flex">
          <li className="flex">
            <BsPhoneVibrate  className="icon"/> Support
          </li>

          <li className="flex">
            <AiOutlineGlobal  className="icon" /> Language
          </li>
        </div>

        <div className="atb flex">
           <span>Sign In</span>

          <span>Sign Out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="Logo" alt="" />
        </div>

        <div className={active}>
    
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              Home
            </li>
            <li onClick={removeNavBar} className="listItem">
              about
            </li>
            <li onClick={removeNavBar} className="listItem">
               Offers
            </li>
            <li onClick={removeNavBar} className="listItem"> 
              seats
            </li>
            <li onClick={removeNavBar} className="listItem">
               Destinations
            </li>
            </ul>
        
          <button onClick={removeNavBar} className="btn flex btnOne">
     
          </button>
        </div>

        <button className="btn flex btnTwo">contact</button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
