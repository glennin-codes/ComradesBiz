import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap'

import Logo from '../../assets/images/logo.png'
import "./Header.css"
import { HumBurgerIcon } from '../Icon/Icon';


const Header = () => {
 

  return (
     <>

<div className='main' style={{top:0,background:'none'}}>
       
        <div className='main_content' style={{display: 'flex',
                    
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '40px',
                    color:'#01010133'}}>
          <div className='main_content-subHeading'>
            <h3>CONTACT US</h3>
            <h1 >Talk To The <span className='main_content-subHeading-span'>Advisory Product  Managers </span></h1>
          </div>
        </div>
        </div>
      
</>
     
  )
}

export default Header