import React, { useEffect, useState } from "react";

import {
  Modal,
  Box,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import Fade from "@mui/material/Fade";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import PhoneInput from "react-phone-number-input";
  
import { fontFamily, fontSize, ThemeProvider } from "@mui/system";
import MuiTheme from "./components/adminParts/utils/MuiTheme";
import axios from "axios";
import Toast from "./components/adminParts/utils/Toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";


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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleClose = () => setOpen(false);
  // const confirm=()=>{

  //   confirmedFunction();

  // }

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (phone) => setPhone(phone);
  const handleMessageChange = (e) => setMessage(e.target.value);
  useEffect(() => {
    if (success) {
      toast.success(success);
      setName("");

      setEmail("");
      setPhone("");
      setMessage("");
      setSuccess();
    }
    if (error) {
      toast.error(error);
      setError();
    }
  }, [success, error]);
  // inside your handleSubmit function
  const handleSubmit = async (e) => {
    const buyer = { name, email, phone, message };
    const data = { buyer, products };
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "https://comradesbizapi.azurewebsites.net/api/notify/emails",
        data
      );
      if (res) {
        setLoading(false);
        handleClose();
        setSuccess(
          "Your request has been sent successfully and the process has been initiated.Please stay put, you will be contacted shortly."
        );
      }
    } catch (error) {
      handleClose();
      setLoading(false);

      if (error && error.response.status === 500) {
        setError("Oops! Something went wrong. Our team has been notified and is working to resolve the issue.");
      } else {
        setError(
          "An error occured might be a network issue or firewall restriction, please try again later"
        );
      }
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
        <Toast time={3000} />
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
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Notify Sellers
              </Typography>
              <Typography id="modal-title" sx={{ mt: 2 }} variant="body2">
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

        
                  defaultCountry="KE"
                  placeholder="Enter phone number"
                  style={{
                    fontSize: "16px",

                    border: "none",
                  }}
                  inputStyle={{
                   
                    fontSize: "16px",
                  
                    borderRadius: "2px",
                    outline: "none",
                    margin: "0",
                    padding: "10px",
                  }}
                  dropdownStyle={{
                    maxHeight:'100px',
                    overflow: "scroll",
                  }}
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </Box>
              <Box sx={{ mt: 2 }} style={{textTransform:'none'}}>
                <TextField
                style={{textTransform:'none'}}
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
                  {loading ? (
                    <CircularProgress size={24} />
                  ) : products && products.length > 1 ? (
                    `Notify 
        ${products.length} Sellers`
                  ) : (
                    "Notify The Seller"
                  )}
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </div>
    </ThemeProvider>
  );
};
export default MyModal;
