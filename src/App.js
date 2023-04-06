import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./ContactUs/ContactUs";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import Error from "./Error";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Manageproducts from "./components/adminParts/product/ManageProduct";
import SignUp from "./components/adminParts/Auth/SignUp";
import VerifyEmail from "./components/adminParts/Auth/VerifiCation";
import LandingPage from "./components/adminParts/Auth/LandingPage";
import UserProfile from "./components/adminParts/Auth/UserProfile";
import Login from "./components/adminParts/Auth/Login";
import AddItem from "./components/adminParts/product/AddItem";
import PrivateRoutes from "./privateRoute/PrivateRoute";
import MaintenanceNotice from "./components/adminParts/utils/Maintanance/Maintanance";
const App = () => {
  const theme = {
    font: {
      main: "'Poppins', sans-serif",
    },
    font_size: {
      h1: "3rem",
      h2: "2.5rem",
      h3: "2rem",
      h4: "1.5rem",
      h5: "2rem",
      h6: "2rem",
      p: "2rem",
      small: "1rem",
    },
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#dee5f3",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return <>{children}</>;
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
       
        <Header />
        <MaintenanceNotice />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />

            <Route
              path="/admin"
              element={
                <PrivateRoutes>
                  <AddItem />
                </PrivateRoutes>
              }
            />

            <Route
              path="/manage"
              element={
                <PrivateRoutes>
                  <Manageproducts />
                </PrivateRoutes>
              }
            />

            <Route
              path="/verifycode"
              element={
                <PrivateRoutes>
                  <VerifyEmail />
                </PrivateRoutes>
              }
            />

            <Route
              path="/landingPage"
              element={
                <PrivateRoutes>
                  <LandingPage />
                </PrivateRoutes>
              }
            />
            <Route
              path="/userprofile"
              element={
                <PrivateRoutes>
                  <UserProfile />
                </PrivateRoutes>
              }
            />

            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
