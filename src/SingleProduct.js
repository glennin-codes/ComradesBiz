import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";
import FormatPrice from "./Helpers/FormatPrice";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./Container";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { Alert } from "@mui/material";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SingleProduct = () => {
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [userLoading, setUserLoading] = useState(false);

  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  console.log("SingleProduct: ", singleProduct);
  const { id } = useParams();
  console.log("id: ", id);

  const {
    image,
    name,
    company,
    description,
    category,
    stock,
    stars,
    reviews,
    price,
    user,
  } = singleProduct;
  const API = `https://comradesbizapi.azurewebsites.net/api/product/:`;
  console.log("user", user);
  
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (singleProduct && user) {
          setUserLoading(true);
          const response = await axios.get(
            `https://comradesbizapi.azurewebsites.net/api/user/${user}`
          );
          if (response) {
            setUserLoading(false);
            const { name, phone, location, school, email } = await response.data;

            setOwner(name);
            setPhone(phone);
            setLocation(location);
            setSchool(school);
            setEmail(email);
            setError("");
          }
        }
      } catch (error) {
        setUserLoading(false);
        console.error(error);
        if (error) {
          if (error.response && error.response.status === 404) {
            setError("User not found");
          } else if (error.response && error.response.status === 500) {
            console.log(error.response.data);
            setError("Server error!");
          } else {
            setError(
              "network error while trying to fetch!,check your connections and try again"
            );
          }
        }
      }
    };
    fetchData();
  }, [singleProduct, user]);

  



  if (isSingleLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10rem",
        }}
      >
        <ClipLoader
          color={"#36D7B7"}
          loading={isSingleLoading}
          css={override}
          size={150}
        />
      </div>
    );

    //  <div className="page_loading">Loading.....</div>
  }
  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* Product Image */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>
          {/* Product data */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p>{reviews} reviews</p>
            <p className="product-data-price ">
              KSH:
              <del>
                <FormatPrice price={price + 1999} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: KSH:
              <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>comradesBiz Store Delivered</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:{" "}
                <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>

              <p>
                Brand : <span> {company} </span>
              </p>
              {userLoading ?
                <ClipLoader
                color={"#36D7B7"}
                loading={userLoading}
                css={override}
                size={24}
              />:
              <>
              <p>
                {" "}
                
                Seller : <span> {owner}</span>
              </p>
              <p>
                {" "}
                Phone Number : <span> {phone}</span>
              </p>
              <p>
                {" "}
                Email Number : <span> {email}</span>
              </p>
              <p>
                {" "}
                School: <span> {school}</span>
              </p>
              <p>
                {" "}
                Location: <span> {location}</span>
              </p>
              </>
}
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
            {error && (
              <Alert severity="error" sx={{ width: "100%" }}>
                {error}
              </Alert>
            )}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
