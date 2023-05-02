import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import styled from "styled-components";
const HeroSection = ({ myData }) => {
  // console.log(myData)
  const { name } = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>{name}</h1>
            <p>
              The ultimate student marketplace - the one-stop-shop for
              everything you need to ace your studies and enjoy campus life to
              the fullest! Our platform offers a wide range of brand new and
              gently used products, as well as unique and affordable services
              from your fellow students.
            </p>
            {/* <p>
              We understand being a student can be too expensive, but with
              comradeBiz, you don't have to break the bank to get what you need.
              Our platform offers a wide range of products, including shoes,
              clothing, bedding, electronics, furniture, and more, all at prices
              that are affordable for students like you. . Say goodbye to
              overpriced items and hello to budget-friendly options that won't
              leave you strapped for cash.
            </p> */}
            <p>
              It's not just about buying,you can easily sign up As a vendor
              and list your products for sale, whether they're brand new or
              gently used. From tech devices like smartphones and laptops to
              practical items like water dispensers and stylish furniture, our
              platform offers a wide range of products that your fellow students
              might be looking for. Connect with potential buyers and make some
              extra cash while helping out your peers at the same time!
            </p>
            <p>
              Our platform is also a hub for advertising your own services such
              as laundry, juice delivery, beauty and design, event planning,
              photography, and more! By uploading pictures of your work, we can
              beautifully showcase your services on our platform and connect
              with potential customers ASAP. It's the perfect way to connect
              with your fellow students and offer your unique skills to those in
              need.
            </p>
            <p>
              So why wait? Join our community of smart, savvy, and ambitious
              students today and take your academic and social life to the next
              level! Whether you're searching for the perfect product,
              advertising your own services, or selling items as a vendor, our
              platform is the ultimate destination for all your student needs.
            </p>

            <NavLink to="/products" style={{ marginRight: "4rem" }}>
              <Button>Shop Now</Button>
            </NavLink>
            <NavLink to="/login">
              <Button>SignUp as a Vender</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default HeroSection;
