import React, { useContext, useEffect } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Input,
  Button,
  FormHelperText,
  ListSubheader,
  TextField,
  OutlinedInput,
  Select,
  Grid,
  Checkbox,
  MenuItem,
  CircularProgress,
  ThemeProvider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import { useRef } from "react";
import axios from "axios";
import MuiTheme from "../utils/MuiTheme";
// import { AuthContext } from '../context/AuthContext';
const SignUp = () => {
  const navigate = useNavigate();
  //   const{setUser}=useContext(AuthContext)
  const [search, setSearch] = React.useState("");

  const [locationText, setLocationText] = React.useState("");
  const [privacyAlert, setPrivacyAlert] = React.useState("");
  const [placeData, setPlaceData] = React.useState([]);
  const [error, setError] = React.useState("");
  const [loading, setIsLoading] = React.useState(false);
  // const [user,setUser]=React.useState('');
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    showPassword: false,
    student: false,
    location: "",
    longitude: "",
    latitude: "",
  });
  const [checked, setChecked] = React.useState(false);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const locationRef = useRef();
  const access_token='pk.eyJ1IjoiZ2xlbm5pbiIsImEiOiJjbGZvbGUwZ2EwMDhnM3lwZmliMW5ldGp0In0.05klmls7gWBpEqsUVu9-YA'
  React.useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { data } = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?country=ke,ug&types=poi,address,neighborhood,locality,place,district,postcode&limit=100&access_token=${access_token}
          `
        );
        const { features } = data;
        setPlaceData(features); // an array
      } catch (error) {
        console.error(error);
        return;
      }
    };
    fetchLocation();
  }, [search]);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  console.log("location", locationText);
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password, confirmPassword, phone } = values;

    let err;

    if (email === "") {
      err = "Email is required";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      err = "Enter a valid email!";
    } else if (password !== confirmPassword) {
    } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(phone)) {
      err =
        "Your mobile number should have valid  include a country code! ..ie +2547123456789";
    } else if (password !== confirmPassword) {
      err = "Password provided didn't match!";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(password)
    ) {
      err =
        "Passwords should be a mixture of numbers, letters and at least a special character. It should also be a minimum of 8 characters and have at least a capital letter!";
    } else if (name === "") {
      err = "Name is required!";
    }

    if (err) {
      setError(err);
      return; // exit function early
    }
    const newValues = { ...values };
    delete newValues.confirmPassword;
    delete newValues.showPassword;
    setValues(newValues);

    setIsLoading(true);
    setError("");

    try {
      const datas = await axios.post(
        "https://comradesbizapi.azurewebsites.net/api/user/login",
        values
      );
      console.log("data", datas);
      if (datas) {
        const { data, status } = datas;
        // setUser(data);
        console.log("data", data);

        if (status === 201) {
          const { token, name, email, id } = data;
          //setting cookies
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("id", id);
          localStorage.setItem("token", token);

          setValues("");
          navigate(`/landingPage?name=${encodeURIComponent(name)}`); // Pass name as URL parameter
        } else {
          setError("Something went wrong, try again later");
        }
      }
      setIsLoading(false);
    } catch (error) {
      if (error.response && error.response.status) {
        const { status } = error.response;
        console.log("code ", status);
        if (status === 409) {
          setError("User already exists");
        } else if (status === 500) {
          setError("Something went wrong, try again later");
        } else {
          setError("An unexpected error occurred");
        }
      } else {
        setError("Network error, check your network connection and try again");
      }
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={MuiTheme}>
    <div className="signUp-container">
      <div className="form-container">
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Create an account")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Sign up")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Register New Account")
                .pauseFor(2500)
                .start();
            }}
          />
        </Typography>
        <form onSubmit={handleSubmit} style={{ margin: "20px 0 0" }}>
          <FormControl
            sx={{ m: 1 }}
            color="primary"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="signUp-name">Name</InputLabel>
            <Input
              id="signUp-name"
              type="text"
              defaultValue={values.name}
              required
              onChange={handleChange("name")}
            />
          </FormControl>
          <FormControl
            sx={{ m: 1 }}
            color="primary"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="signUp-email">Email</InputLabel>
            <Input
              id="signUp-email"
              type="email"
              defaultValue={values.email}
              required
              onChange={handleChange("email")}
            />
          </FormControl>
          <FormControl
            sx={{ m: 1 }}
            color="primary"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="signUp-passwordField">Password</InputLabel>
            <Input
              id="signUp-passwordField"
              type={values.showPassword ? "text" : "password"}
              defaultValue={values.password}
              required
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            sx={{ m: 1 }}
            color="primary"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="signUp-passwordField">
              Confirm Password
            </InputLabel>
            <Input
              id="signUp-passwordField2"
              type={values.showPassword ? "text" : "password"}
              defaultValue={values.confirmPassword}
              required
              onChange={handleChange("confirmPassword")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl
            sx={{ m: 1 }}
            color="primary"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="signUp-name">phone</InputLabel>
            <Input
              id="phone"
              type="text"
              defaultValue={values.phone}
              required
              onChange={handleChange("phone")}
              autoComplete="Enter your mobile number"
            />
          </FormControl>
          <Grid item xs={12} sx={{ m: 1 }}>
            <Typography sx={{fontSize:'16px'}}
             variant="standard"
             fullWidth 
            > Are you a Student?</Typography> 
            <Checkbox
              checked={values.student}
              onChange={(event) => {
                setValues({ ...values, student: event.target.checked });
              }}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
          </Grid>
          {values.student && 
        <FormControl
        sx={{ m: 1 }}
        color="primary"
        variant="standard"
        fullWidth
      >
        <InputLabel htmlFor="signUp-School">School</InputLabel>
        <Input
          id="School"
          type="text"
          defaultValue={values.school}
          onChange={(event) => {
            const additionalValues = { ...values };
            additionalValues.school = event.target.value;
            if (event.target.value !== '') {
              additionalValues.student = true;
            }
            setValues(additionalValues);
          }}
          autoComplete="Enter your School"
        />
      </FormControl>
      
          }
          <Grid item xs={12} sx={{ m: 1 }}>
            <InputLabel id="demo-multiple-name-label">location</InputLabel>
            <Select
              sx={{ width: "100%" }}
              MenuProps={{ autoFocus: false }}
              labelId="search-select-label"
              id="search-select"
              value={locationText}
              label="Search location"
              input={<OutlinedInput label="Location" />}
              onChange={(event) => {
                locationRef.current.value = event.target.value[0];
                setLocationText(locationRef.current.value);
                console.log("selected", event.target.value[1]);
                // setCenter(event.target.value[1]);

                setValues({
                  ...values,
                  location: event.target.value[0],
                  longitude: event.target.value[1][0].toString(),
                  latitude: event.target.value[1][1].toString(),
                });
              }}
              onClose={() => {
                setSearch("");
              }}
              renderValue={() => locationText}
            >
              <ListSubheader >
                <TextField
                sx={{marginTop:'5px'}}

                  size="small"
                  // Autofocus on textfield
                  autoFocus
                  required
                  fullWidth
                  name="location"
                  label="Search Location"
                  type="text"
                  id="location"
                  placeholder={locationText}
                  inputRef={locationRef}
                  autoComplete={locationText}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key !== "Escape") {
                      // Prevents autoselecting item while typing (default Select behaviour)
                      e.stopPropagation();
                    }
                  }}
                />
              </ListSubheader>
              {placeData.map(({ id, center, place_name, geometry }) => (
                <MenuItem key={center} value={[place_name, center]}
                style={{color:'black'}}
                >
                  {place_name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sx={{marginBottom:'10px'}}>
            <Typography 
            sx={{ m: 1,fontSize:'16px' }}
           
            variant="standard"
            fullWidth 
             >
                Before you signup, confirm that you have read, understood and agreed
            with our <a href="/terms"> Terms and conditions </a>
            And our <a href="/privacy">Privacy policy</a>
           

            </Typography>
           <Checkbox
              checked={checked}
              onChange={handleChecked}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
          </Grid>

          {error && (
            <FormHelperText
              sx={{
                color: "red",
                mx: 1,
                textTransform: "capitalize",
                height: "15px",
                marginBottom: "2rem",
              }}
            >
              {error}
            </FormHelperText>
          )}
          {/* <Box sx={{ height: '30px' }}>
                        {authLoading && <LoadingSpinner width="30px" height="30px" />}
                    </Box> */}

          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            sx={{ width: "100%", mt: 1.5, mb: 4 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Sign Up"}
          </Button>
        </form>

        <Box>
          <Typography sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <NavLink to="/login" style={{ color: "red" }}>
              Login
            </NavLink>
          </Typography>
        </Box>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default SignUp;
