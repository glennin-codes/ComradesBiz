import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap'

import Logo from '../../assets/images/logo.png'
import "./Header.css"
import { HumBurgerIcon } from '../Icon/Icon';


const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    z

        <div className='main_container_contact_content'>
          <div className='main_container_contact_content-subHeading'>
            <h3>CONTACT US</h3>
            <h1>Talk to the <span className='main_container_contact_content-subHeading-span'>Assessors' Office</span></h1>
          </div>
        </div>
      </div>


      <Offcanvas show={show}
        onHide={handleClose}
        placement="end"
        name="end"
        className="mobile_version_offcanvas_nav"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mobile_version_offcanvas_nav-title">Quincy</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>


          <div className='mobile_version_links'>
            <Link to="home" className='mobile_navlink' >Accessor's Home</Link>
            <Link to="property" className='mobile_navlink'>Property Inspection</Link>
            <Link to="forms" className='mobile_navlink'>Forms & Requests</Link>
            <Link to="accessor" className='mobile_navlink'>Accessor's Tools</Link>
            <Link to="/" className='mobile_navlink'>Contact Us</Link>
          </div>



        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header