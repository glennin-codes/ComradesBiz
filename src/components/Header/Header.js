import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";

// import Logo from '../../assets/images/logo.png'
import Logo from "../../ContactPage/assets/images/logo.png";
import "./Header.css";
import { HumBurgerIcon } from "./Icon/Icon";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../../context/cart_context";

const Header = () => {
  const { total_item } = useCartContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="main_container_contact">
        <div className="main_container_navbar">
          <Navbar expand="lg" sticky="top" className="navbar">
            <Container>
              <Link to="/">
                <img
                  src={Logo}
                  alt="logo"
             
                  
                  className="nav-img"
                />
              </Link>

              <button onClick={handleShow} className="mobile__navbar">
                <HumBurgerIcon onClick={handleShow} className="me-2" />
              </button>

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto NavLink-all">
                  <Link to="/" className="NavLink">
                    Home
                  </Link>
                  <Link to="/products" className="NavLink">
                    Products On Sale
                  </Link>
                  <Link to="/about" className="NavLink">
                    About Us{" "}
                  </Link>
                  <Link to="/contact" className="NavLink">
                    Contact Us
                  </Link>
                  <Link to="/login" className="NavLink">
                    Profile
                  </Link>

                  <NavLink
                    to="/cart"
                    className="NavLink "
                    style={{ position: "relative" }}
                  >
                    <FiShoppingCart
                      className="cart-trolley"
                      style={{ fontSize: "3.2rem" }}
                    />
                    <span className="cart-total--item"> {total_item} </span>
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        name="end"
        className="mobile_version_offcanvas_nav"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            className="mobile_version_offcanvas_nav-title"
            style={{ color: "white" }}
          >
            Comradesbiz
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mobile_version_links">
            <Link to="/" className="mobile_navlink" onClick={handleClose}>
              Home
            </Link>
            <Link
              to="/products"
              className="mobile_navlink"
              onClick={handleClose}
            >
              Product On Sale
            </Link>
            <Link to="/about" className="mobile_navlink" onClick={handleClose}>
              About Us
            </Link>
            <Link
              to="/contact"
              className="mobile_navlink"
              onClick={handleClose}
            >
              Contact Us
            </Link>
            <Link to="/login" className="mobile_navlink" onClick={handleClose}>
              Profile
            </Link>
            <NavLink
              to="/cart"
              className="mobile_navlink"
              onClick={handleClose}
            >
              <FiShoppingCart className="Mobile_cart-trolley" />
              <span className="Mobile_cart-total--item"> {total_item} </span>
            </NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import Nav from "./Nav";

// const Header = () => {
//   return (
//     <MainHeader>
//       <NavLink to="/">
//         <img src="./images/logo2.png" alt="my logo img" className="logo"/>
//       </NavLink>
//       <Nav />
//     </MainHeader>
//   );
// };

// const MainHeader = styled.header`
//   padding: 0 4.8rem;
//   height: 10rem;
//   background-color: ${({ theme }) => theme.colors.bg};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;

//   .logo {
//     height: 8rem;
//   }
// `;
// export default Header;
