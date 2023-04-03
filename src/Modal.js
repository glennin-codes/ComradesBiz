import React, { useState } from "react";

import { Modal, Box, Typography, Button, CircularProgress } from "@mui/material";
import Fade from "@mui/material/Fade";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { fontFamily, fontSize, ThemeProvider } from "@mui/system";
import MuiTheme from "./components/adminParts/utils/MuiTheme";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxWidth: "90%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  fontFamily: "ubuntu",
  fontSize: "16px",
  color: "#06243F",
  fontWeight: "400",
};

const MyModal = ({ open, setOpen, confirmedFunction, products }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  
    // define state for snackbar
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleClose = () => setOpen(false);

  const confirmed = () => {
    
    confirmedFunction();
   
  
  };
 
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (phone) => setPhone(phone);
  const handleMessageChange = (e) => setMessage(e.target.value);

  
  // define the Snackbar Alert component
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };
 console.log(typeof products)
  // inside your handleSubmit function
  const handleSubmit = async (e) => {
    const buyer= { name, email, phone, message} 
    e.preventDefault();
    try {
      const res = await axios.post('https://comradesbizapi.azurewebsites.net/api/notify/emails',buyer,products );
      if (res && res.data.status === 200) {
        // show success snackbar
        setError("sent")
        setSnackbarOpen(true);
        setSnackbarSeverity('success');
        setSnackbarMessage('Your request has been sent successfully and the process has been initiated.Please stay put, you will be contacted shortly.');
         
        handleClose();
      }
    } catch (error) {
      // handle error and show error snackbar
      console.error(error);
      setError('')
      setSnackbarOpen(true);
      setSnackbarSeverity('error');
      setSnackbarMessage(error && error.response.message ? error.response.message : 'Network error, kindly check your network and try again.');
      handleClose();
    }

  

  
  // define snackbar onClose handler
 
  
  
  
  };

  return (
    <ThemeProvider theme={MuiTheme}>
    <div
      style={{
        fontFamily: "ubuntu",
        fontSize: "14px",
        color: "#06243F",
        fontWeight: "400",
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={open}>
          <Box component="form" onSubmit={handleSubmit} sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Notify Sellers
            </Typography>
            <Typography id="modal-title"  sx={{ mt: 2 }} variant="body2">
          Please enter your contact information
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }} variant="body2">
          We will use this information to contact you about your order.
        </Typography>
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={handleNameChange}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Email"
                fullWidth
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <PhoneInput
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                defaultCountry={"ke"}
                fullWidth
                
                value={phone}
                onChange={handlePhoneChange}
                inputClass="w-full form-input rounded-md shadow-sm"
                dropdownClass="rounded-md shadow-lg"
                containerClass="relative"
                inputStyle={{
                  padding: "0.5rem 1rem",
                  textIndent: "28px",
                  fontSize: "20px",
                }}
                dropdownStyle={{ top: "70px" }}
                specialLabel="Phone"
                specialLabelClassName="text-gray-500"
                specialLabelStyle={{ marginBottom: "0.5rem" }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                value={message}
                onChange={handleMessageChange}
              />
            </Box>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" color="secondary" type="submit">
             {loading?<CircularProgress size={24} /> : products && products.length > 1
                  ? `Notify 
        ${products.length} Sellers`
                  : "Notify The Seller"
            }
              </Button>
              {/* <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
    <Alert severity={snackbarSeverity} onClose={handleSnackbarClose}>
      {snackbarMessage}
    </Alert>
  </Snackbar> */}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
    </ThemeProvider>
  );
};
export default MyModal;
