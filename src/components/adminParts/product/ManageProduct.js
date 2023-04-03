import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Grid, ThemeProvider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UpdateProductForm from "./UpdateProductForm.js";
import MuiTheme from "../utils/MuiTheme.js";

export default function Manageproducts() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [success, setSuccess] = React.useState("");
  const [refresh, setRefresh] = useState(false);
  const email= localStorage.get('email');
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
  useEffect(() => {
    const fetchproducts = async () => {
      try{
      const { data } = await axios.get(
        `https://comradesbizapi.azurewebsites.net/user/products/${email}`
      );
      if (data) {
        setProducts(data);
      
      }
     
      }catch(error){
        console.log(error)
        setSnackbarOpen(true);
        setSnackbarSeverity('error');
        setSnackbarMessage(error && error.response.message ? error.response.message : 'Network error, kindly check your network and try again.');

      }
    };
    fetchproducts();
  }, [refresh]);
  const handleEditClick = (productId) => {
    const product = products.find((p) => p._id === productId);
    setSelectedProduct(product);
    
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    window.location.href = '/';
  };
  const deleteProduct = async (_id) => {
    try {
      setSuccess("");
   
      setSnackbarOpen(true);
      setSnackbarSeverity('warning');
      setSnackbarMessage(`Are you sure you want to delete product with ${_id} id? This action is irreversible!`);
      
      const token=localStorage.getItem('token'); // Get token from local storage
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const res = await axios.delete(
        `https://comradesbizapi.azurewebsites.net/api/product/${_id}`,
        config
      );
      if (res.status === 200) {
        setSuccess("");
 
        setRefresh((prevState) => !prevState);
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
    
        setSnackbarOpen(true);
        setSnackbarSeverity('error');
        setSnackbarMessage('Product not found');
        
        
      } else if (error.response.status === 401) {
       
        setSnackbarOpen(true);
        setSnackbarSeverity('error');
        setSnackbarMessage('You are not authorized to access this resource!');
        
      } else if (error.response.status === 403) {
      
        setSnackbarOpen(true);
        setSnackbarSeverity('error');
        setSnackbarMessage('Access to this resource is forbidden. Please log in to continue.');
        
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else if (error.response.status === 500) {
        console.log(error.response.data);
        setSnackbarOpen(true);
        setSnackbarSeverity('error');
        setSnackbarMessage('There was an Error,engineers have been reported');
        
        
      } else {
        alert("network error!,check your network and try again");
        setSnackbarOpen(true);
        setSnackbarSeverity('error');
        setSnackbarMessage('Network error!,check your network connection and try again');
        
      }
    }
  };

  return (
    <>
     <ThemeProvider theme={MuiTheme}>
      {selectedProduct && (
        <UpdateProductForm
          product={selectedProduct}
          onClose={() => {
            setSelectedProduct(null);
           
          }}
          setRefresh={setRefresh}
        />
      )}

      <TableContainer component={Paper} sx={{top:'20%'}}>
        {success && <Alert severity="success">{success}</Alert>}
        <Table
          sx={{
            width: "100vw",
            maxWidth: "100vw",
            overflowX: "auto",
            "&::-webkit-scrollbar": { height: 8 },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
          }}
          aria-label="simple table"
        >
          <TableHead sx={{ width: "100vw" }}>
            <TableRow>
              <TableCell sx={{ width: "8vw" }}>Product Name</TableCell>
              <TableCell sx={{ width: "8vw" }}>Image</TableCell>
              <TableCell sx={{ width: "8vw" }}>Category</TableCell>
              <TableCell sx={{ width: "8vw" }}>Company</TableCell>
              <TableCell sx={{ width: "8vw" }}>Stock</TableCell>
              <TableCell sx={{ width: "8vw" }}>Price</TableCell>
              <TableCell sx={{ width: "8vw" }}>Update</TableCell>
              <TableCell sx={{ width: "8vw" }}>Trash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => {
              const {
                name,
                _id,
                image,
                category,
                price,
                color,
                company,
                stock,
              } = product;

              return (
                <TableRow
                  key={_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ width: "8vw" }} component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell sx={{ width: "8vw" }} component="th" scope="row">
                    <img
                      src={image[0]?.url}
                      alt={""}
                      style={{ height: "100px", width: "100px" }}
                    />
                  </TableCell>
                  <TableCell sx={{ width: "8vw" }}>{category}</TableCell>

                  <TableCell sx={{ width: "8vw" }}>{company}</TableCell>

                  <TableCell sx={{ width: "8vw" }}>{stock}</TableCell>

                  <TableCell sx={{ width: "8vw" }}>{price}</TableCell>
                  <TableCell>
                    <Typography
                      component={Button}
                      aria-label="edit"
                      color="primary"
                      size="small"
                      onClick={() => handleEditClick(product._id)}
                    >
                      Edit
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ width: "8vw" }}>
                    <Typography
                      component={Button}
                      color="error"
                      // disabled={currentUser?.email!=='milesmotorssocialmedia@gmail.com'}
                      onClick={() => deleteProduct(_id)}
                    >
                      Delete
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
    <Alert severity={snackbarSeverity} onClose={handleSnackbarClose}>
      {snackbarMessage}
    </Alert>
  </Snackbar>
      <Grid
        item
        xs={12}
        sx={{ textAlign: "right", color: "magenta", fontSize: "2.5rem" }}
      >
        <Typography component={Link} to="/admin" color='magenta' style={{fontSize
        :'19px'}}>
          add more products to database
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'right' }}>
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
      </ThemeProvider>
    </>
    
  );
}
