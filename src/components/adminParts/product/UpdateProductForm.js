
import React,{ useState } from "react";
import axios from "axios";
import {  Grid  , TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import { ThemeProvider } from "@material-ui/core/styles";
import MuiTheme from '../utils/MuiTheme';

export default function UpdateProductForm({product, onClose,setRefresh,}) {
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [company, setCompany] = useState(product.company);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [open, setOpen] = useState(false);
  const[success,setSuccess]=useState("");
  console.log(product);
  console.log(product._id)
  const cancle=()=>{
      setRefresh(prevState => prevState)
   
  }

  const handleSubmit = async (event) => {

    event.preventDefault();
    try {
    const res = await axios.patch(`https://shopifybackend.onrender.com/api/product/${product._id}`, {
        name,
        category,
        company,
        price,
        stock,
      });
      if (res.status === 200) {
        setSuccess("Product updated successfully");
           setRefresh(prevState => !prevState)
        setOpen(false);
        onClose();
        
      }
     
    } catch (error) {
     
      alert("There was an error");
      setOpen(false);
    }
  };

  return (

    <ThemeProvider theme={MuiTheme}>
    <div>
        {success && <Alert severity='success'>{success}</Alert>}
      <Button onClick={() => setOpen(true)}>Update Product</Button>
      <Button onClick={cancle()}>Cancle</Button>
    
      <Box maxWidth="sm" sx={{ my: 4, mx: "auto" }}>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent >

      
        <Grid  item  xs={6} md={4}>
        <Box sx={{ display: "flex", alignitems: "flex-end" }}>
            <TextField variant='standard' fullWidth  label="Name" value={name} onChange={(event) => setName(event.target.value)} />
           </Box>
              </Grid>
              <Grid  item xs={6} md={4}>
              <Box sx={{ display: "flex", alignitems: "flex-end" }}>
              <TextField label="Category" fullWidth variant='standard' value={category} onChange={(event) => setCategory(event.target.value)} />
            </Box>
              </Grid>
              <Grid  item xs={6} md={4}>
              <Box sx={{ display: "flex", alignitems: "flex-end" }}>
              <TextField label="Compony" fullWidth variant='standard' value={company} onChange={(event) => setCompany(event.target.value)} />
              </Box>
              </Grid>
                
                <Grid  item xs={6} md={4}>
                <Box sx={{ display: "flex", alignitems: "flex-end" }}>
                <TextField label="Price" fullWidth variant='standard' value={price} onChange={(event) => setPrice(event.target.value)} />
           
                </Box>
                </Grid>
                <Grid  item xs={6} md={4}>
                <Box sx={{ display: "flex", alignitems: "flex-end" }}>
                <TextField label="Stock"  fullWidth variant='standard' value={stock} onChange={(event) => setStock(event.target.value)} />
                </Box>
                </Grid>
            
          
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
        </Box>
    </div>
    </ThemeProvider>
  );
}
