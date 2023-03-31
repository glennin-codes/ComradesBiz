import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { Alert } from "@mui/material";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [verifying, setVerifying] = useState(true);
  const [success, setSucces] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    const email = searchParams.get("email");

    if (!code) {
      setError('invalid verification link')
      
      setTimeout(
        () => navigate("/auth/signup"),
        2000

      )
      return;
    }
    async function checkerApi() {
      try {
        const response = await axios.post(
          "https://comradesbizapi.azurewebsites.net/api/verifyCode",
          { code, email }
        );
        if (response) {
          console.log(response.data);
          const { data, status } = response;
          if (status === 200) {
            setVerifying(false);
            setSucces(data.message);
            setTimeout(() => navigate("/admin"), 2000);

          }
        }
      } catch (error) {
        if (error && error.response) {
          const { data, status } = error.response;
          if (status === 400) {
            setError(data.error, "kindly register");
            setTimeout(() => navigate("/auth/signup"), 2000)

            
          } else if (status === 500) {
            setError(data.error, "kindly try again later");
            setTimeout(() => navigate("/auth/signup"), 2000)
          } else {
            setError("Timeout,Something went wrong try again later");
          }
        } else {
          setError("network error check your connection and try again later");
        }
        setVerifying(false);
      }
    }
    checkerApi();
  }, [location.search]);

  // Call an API to check if the verification code is valid and mark the user's email as verified
  // This could be done using axios or fetch
  const handleRedirect = () => {
    if (!verifying) {
      navigate("/admin");
    }
  };

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10rem",
      }}
    >
        {error && <Alert severity="error" >{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      {verifying ? (
        <>
          <ClipLoader
            color={"#36D7B7"}
            loading={verifying}
            css={override}
            size={150}
          />
          <h2 css={{ marginTop: "2rem" }}   >Verifying email, please wait...</h2>
        </>
      ) : (
        <>
          <h2>Email verified! You will be redirected shortly.</h2>
          <p>
            If you are not automatically redirected, click{" "}
            <a href="/" onClick={handleRedirect}>
              here
            </a>
            .
          </p>
        </>
      )}
    
    </div>
  );
};

export default VerifyEmail;
