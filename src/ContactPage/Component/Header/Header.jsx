import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap'

import Logo from '../../assets/images/logo.png'
import "./Header.css"
import { HumBurgerIcon } from '../Icon/Icon';


const Header = () => {
 

  return (
     <>

<div className='main_container_contact'>
        <div className='main_container_navbar'>
        <div className='main_container_contact_content'>
          <div className='main_container_contact_content-subHeading'>
            <h3>CONTACT US</h3>
            <h1 style={{color:'white'}}>Talk To The<span className='main_container_contact_content-subHeading-span'>Advisory Product  Managers </span></h1>
          </div>
        </div>
        </div>
      </div>
</>
     
  )
}

export default Header