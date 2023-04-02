import React, { useState } from 'react';

import { Modal, Box, Typography, Button } from '@mui/material';
import Fade from '@mui/material/Fade';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxWidth: '90%',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const MyModal = ({ open, setOpen, confirmedFunction, products }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => setOpen(false);

  const confirmed = () => {
    const buyerInfo = { name, email, phone, message, products };
    confirmedFunction(buyerInfo);
    handleClose();
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (phone) => setPhone(phone);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <div>
  <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>


        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Notify Sellers
            </Typography>
            <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 2 }}>
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
                  name: 'phone',
                  required: true,
                }}
                country={'ke'}
                onlyCountries={['ke']}
                value={phone}
                onChange={handlePhoneChange}
                inputClass="w-full form-input rounded-md shadow-sm"
                dropdownClass="rounded-md shadow-lg"
                containerClass="relative"
                inputStyle={{ padding: '0.5rem 1rem' }}
                dropdownStyle={{ top: '70px' }}
                specialLabel="Phone"
                specialLabelClassName="text-gray-500"
                specialLabelStyle={{ marginBottom: '0.5rem' }}
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
            <Box sx={{ mt: 2 }}>
      <Button variant="contained" color="primary" type="submit">
        Notify Sellers
      </Button>
    </Box>
            </Box>
           </Fade>
            </Modal>

            </div>
)}
export default MyModal