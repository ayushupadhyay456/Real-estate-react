import React from 'react'
import './Header.css'
import { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuopen,setMenuopen]=useState(false);

  const getMenuStyles=(menuopen)=>{
    if(document.documentElement.clientWidth<=800)
    {
      return {right:!menuopen && "-100%"}
    }
  }
  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img src="./logo.png" alt="logo" width={100}/>
        <OutsideClickHandler
        onOutsideClick={()=>{
          setMenuopen(false)
        }}
        >
        <div className='flexCenter h-menu' style={getMenuStyles(menuopen)}>
          <a href="">Residencies</a>
          <a href="">Our Website</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className='button'>
          <a href="">Contact</a>
          </button>
          
        </div>
        </OutsideClickHandler>
       
        <div className="menu-icon" onClick={()=>setMenuopen((e)=>!e)}>
        <BiMenuAltRight size={30}/>
      </div>
      </div>
     
    </section>
  )
}

export default Header