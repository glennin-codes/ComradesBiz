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
    // <>
    //   <div className='main_container_contact'>
    //     <div className='main_container_navbar'>
    //       <Navbar expand="lg" sticky="top" className="navbar">
    //         <Container>
    //           <Link to="/">
    //             <img src={Logo} alt="logo" width="130px" height="130px" className="nav-img" />
    //           </Link>

    //           <button onClick={handleShow} className="mobile__navbar"  >
    //             <HumBurgerIcon onClick={handleShow} className="me-2" />
    //           </button>

    //           <Navbar.Collapse id="basic-navbar-nav">
    //             <Nav className="me-auto NavLink-all">
    //               <Link to="home" className='NavLink' >Accessor's Home</Link>
    //               <Link to="property" className='NavLink'>Property Inspection</Link>
    //               <Link to="forms" className='NavLink'>Forms & Requests</Link>
    //               <Link to="accessor" className='NavLink'>Accessor's Tools</Link>
    //               <Link to="/" className='NavLink'>Contact Us</Link>

    //             </Nav>
    //           </Navbar.Collapse>
    //         </Container>
    //       </Navbar>
    //     </div>

        <div className='main_container_contact_content'>
          <div className='main_container_contact_content-subHeading'>
            <h3>CONTACT US</h3>
            <h1 style={{color:'white'}}>Talk To The<span className='main_container_contact_content-subHeading-span'>Advisory Product  Managers </span></h1>
          </div>
        </div>
      // </div>


    //   <Offcanvas show={show}
    //     onHide={handleClose}
    //     placement="end"
    //     name="end"
    //     className="mobile_version_offcanvas_nav"
    //   >
    //     <Offcanvas.Header closeButton>
    //       <Offcanvas.Title className="mobile_version_offcanvas_nav-title">Quincy</Offcanvas.Title>
    //     </Offcanvas.Header>
    //     <Offcanvas.Body>


    //       <div className='mobile_version_links'>
    //         <Link to="home" className='mobile_navlink' >Accessor's Home</Link>
    //         <Link to="property" className='mobile_navlink'>Property Inspection</Link>
    //         <Link to="forms" className='mobile_navlink'>Forms & Requests</Link>
    //         <Link to="accessor" className='mobile_navlink'>Accessor's Tools</Link>
    //         <Link to="/" className='mobile_navlink'>Contact Us</Link>
    //       </div>



    //     </Offcanvas.Body>
    //   </Offcanvas>
    // </>
  )
}

export default Header