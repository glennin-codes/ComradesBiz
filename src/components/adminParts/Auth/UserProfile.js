import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import {
  Alert,
  CircularProgress,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MuiTheme from "../utils/MuiTheme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

// const UserProfileButton = styled(Button)`
//   margin-top: 20px;
//   background-color: #6c63ff;
//   color: #fff;
//   &:hover {
//     background-color: #514ec2;
//   }
// `;

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [school, setSchool] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  console.log("id", id);

  useEffect(() => {
    // Fetch user data from API
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://comradesbizapi.azurewebsites.net/api/user/${id}`
        );
        if (response) {
          const { name, phone, location, school } = await response.data;
          setUser(response.data);
          setName(name);
          setPhone(phone);
          setLocation(location);
          setSchool(school);
          setError("");
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);

        if (error && error.response.status === 404) {
          setError("User not found");
        } else if (error && error.response.status === 500) {
          console.log(error.response.data);
          setError(
            "Oops! Something went wrong. Our team has been notified and is working to resolve the issue."
          );
        } else {
          setError(
            "We're having trouble accessing the network. Please check your internet connection and try again later."
          );
        }
      }
    };
    fetchData();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    window.location.href = "/";
  };

  const handleUpdate = async () => {
    setSending(true);
    if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(phone)) {
      setError(
        "Your mobile number should have valid  include a country code! ..ie +2547123456789"
      );
    }
    try {
      // PUT updated user data to API

      const response = await axios.put(
        `https://comradesbizapi.azurewebsites.net/api/user/${id}`,
        {
          name,
          phone,
          location,
          school,
        },
        config
      );
      if (response) {
        setSending(false);
        setSuccess("update was a success!");
        setUser(response.data);
        setName(response.data.name);
        setPhone(response.data.phone);
        setLocation(response.data.location);
        setSchool(response.data.school);
      }
    } catch (error) {
      console.error(error);
      setSending(false);
      if (error && error.response.status === 404) {
        setError("User not found");
      } else if (error && error.response.status === 401) {
        setError("You are not authorized to access this resource.");
      } else if (error && error.response.status === 403) {
        setError(
          "Access to this resource is forbidden. Please log in to continue."
        );
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else if (error && error.response.status === 500) {
        console.log(error.response.data);
        setError(
          "Oops! Something went wrong. Our team has been notified and is working to resolve the issue."
        );
      } else {
        setError(
          "We're having trouble accessing the network. Please check your internet connection and try again later."
        );
      }
    }
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <Container>
        {error && <Alert severity="error">{error}</Alert>}

        {loading ? (
          <>
            <ClipLoader
              color={"#36D7B7"}
              loading={loading}
              css={override}
              size={150}
            />
            <Heading>fetching user profile ,please wait ....</Heading>
          </>
        ) : (
          user && (
            <>
              <Heading>{name} Profile</Heading>
              <InputContainer>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </InputContainer>
              <InputContainer>
                {/* <TextField
              label="Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            /> */}
              </InputContainer>
              <InputContainer>
                <TextField
                  label="Phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  label="Location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  label="School"
                  value={school}
                  onChange={(event) => setSchool(event.target.value)}
                />
              </InputContainer>
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button
                  position="right"
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={handleUpdate}
                  sx={{ width: "100%", mt: 1.5, mb: 4 }}
                  disabled={sending}
                >
                  {sending ? <CircularProgress size={24} /> : "Update"}
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Typography component={Link} to="/manage">
                  Manage All Products
                </Typography>
                
              </Grid>
            
                <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Typography component={Link} to="/admin">
                  Upload new Product
                </Typography>
                </Grid>
              <Grid item xs={12} sx={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleLogout}
                  aria-label="Logout"
                  title="Click here to log out"
                >
                  Logout
                </Button>
              </Grid>

              {success && (
                <Alert severity="success" position="right">
                  {success}
                </Alert>
              )}
            </>
          )
        )}
      </Container>
    </ThemeProvider>
  );
};

export default UserProfile;
