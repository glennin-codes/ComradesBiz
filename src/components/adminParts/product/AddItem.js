import {
  Button,
  Alert,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
  Paper,
} from "@mui/material";

import React, { useContext } from "react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Toast from "../assets/utils/Toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CSSTransition } from "react-transition-group";
import "../style/product.css";
import ImgComponent from "./ImgComponent";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Typewriter from "typewriter-effect";


export default function Products() {
  {
    /*states*/
  }
  const [values, setValues] = useState({});
  const [images, setImages] = useState([]);
  const [status, setStatus] = React.useState("");
  const [error, setError] = React.useState("");
  const [uploading, setIsUpLoading] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [selected, setIsSelected] = useState(0);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(localStorage.getItem("name") || "");

 
  const time = 1 * 60 * 1000; //waiting time to upload
  useEffect(() => {
    if (isSubmit) {
      window.scrollTo(0, 0);
    }
    if (uploading) {
      toast.loading(uploading);
      setIsUpLoading(null);
    }

    if (status) {
      toast.dismiss();
      toast.success(status);
      setStatus();
    }
    if (error) {
      toast.dismiss();
      setIsUpLoading(null);
      toast.error(error);
    }
  }, [isSubmit, uploading, error, status]);
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      let processedFiles = 0;
      const count = acceptedFiles.length;
      setIsSelected((prevCount) => prevCount + count);
      console.log(selected);
      if (selected > 6) {
        toast.error("Cannot accept more than 6 files.");
        return;
      }

      const numberOfAcceptedFiles = Math.min(
        acceptedFiles.length,
        6 - images.length
      );
      const EstablishedAcceptedFiles = acceptedFiles.slice(
        0,
        numberOfAcceptedFiles
      );

      EstablishedAcceptedFiles.forEach((file) => {
        if (processedFiles >= 6) {
          toast.error("Only 10 files can be processed at a time.");
          return;
        }
        processedFiles++;
        if (
          !file.type.startsWith("image/jpeg") &&
          !file.type.startsWith("image/webp") &&
          !file.type.startsWith("image/png") &&
          !file.type.startsWith("image/jpg")
        ) {
          toast.error(
            `File ${file.name} has an unsupported format and cannot be processed.`
          );
          return;
        }
        if (file.size > 5.5 * 1024 * 1024) {
          toast.error(
            `File ${file.name} is larger than 5.5 MB and cannot be processed.`
          );
          return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const binaryStr = reader.result;
          const imageObject = {
            data: binaryStr,
            color: "",
            // ref:React.createRef()
            // initialize the color as an empty string
          };
          setImages((prevState) => [...prevState, imageObject]);
        };
      });
    },
    [selected, images]
  );
 
  const handleColorChange = (index) => (event) => {
    const newImages = [...images];
    newImages[index].color = event.target.value;
    setImages(newImages);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const handleValueChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  //delete images
  const deleteImage = (index) => {
    setImages((prevState) => prevState.filter((_, i) => i !== index));
    setIsSelected((prevCount) => prevCount - 1);
  };
  console.log(images);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    setIsUpLoading("Uploading to database.. wait for about a minute please");

    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    

    const newProductInfo = { ...values, images,user:email };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post(
        "https://comradesbizapi.azurewebsites.net/api/addProduct",
        newProductInfo,
        config
      )
      .then(({ data }) => {
        if (data.code === 1) {
          setStatus(`product added succesfully`);

          setImages([]);

          setIsSubmit(false);
          event.target.reset();
        }
        setError("");
        //  throw new Error('Failed to upload to Cloudinary');
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError("Product not found");
        } else if (error.response.status === 401) {
          setError("You are not authorized to access this resource.");
        } else if (error.response.status === 403) {
          setError(
            "Access to this resource is forbidden. Please log in to continue."
          );
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else if (error.response.status === 500) {
          console.log(error.response.data);
          setError("Server error!");
        } else {
          setError("network error!,check your connections and try again");
        }

        setIsUpLoading("");
      });
  };
  return (
    <Box>
      <Toast time={time} />

      <Typography
        variant="h4"
        color="primary"
        sx={{ textAlign: "center" }}
        fontWeight="bold"
      >
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString(name ? `Welcome ${name}` : 'Welcome Comrade')
              .pauseFor(2500)
              .deleteAll()
              .typeString("Add A New Product In Shop")
              .pauseFor(2500)
              .deleteAll()
              .typeString("It will take just few minutes")
              .pauseFor(2500)
              .start();
          }}
        />
      </Typography>

      <Box maxWidth="sm" sx={{ my: 4, mx: "auto" }}>
        {/* product information form */}
        <form onSubmit={handleSubmit}>
          <Grid
            container
            rowSpacing={3.5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              {/* product name */}
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  label="Product Name"
                  variant="standard"
                  required
                  type="text"
                  onChange={handleValueChange("name")}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              {/*category*/}
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  label="Reviews"
                  variant="standard"
                  required
                  type="text"
                  onChange={handleValueChange("reviews")}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              {/* stock */}
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  label="Stock"
                  variant="standard"
                  required
                  type="text"
                  onChange={handleValueChange("stock")}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  label="Ratings"
                  variant="standard"
                  required
                  type="text"
                  onChange={handleValueChange("stars")}
                />
              </Box>
            </Grid>
            <Grid item xs={7} md={8}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  label="Category"
                  variant="standard"
                  required
                  text="text"
                  onChange={handleValueChange("category")}
                />
              </Box>
            </Grid>

            <Grid item xs={7} md={8}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  label="Company"
                  variant="standard"
                  required
                  text="text"
                  onChange={handleValueChange("campany")}
                />
              </Box>
            </Grid>

            <Grid item xs={7} md={8}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  label="Price"
                  variant="standard"
                  required
                  type="number"
                  onChange={handleValueChange("price")}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              {/* <Box sx={{ display: "flex", alignItems: "flex-end" }}> */}
              <Box>
                <Paper
                  style={{
                    cursor: "pointer",
                    background: "white",
                    color: "#bdbdbd",
                    border: "1px dashed #ccc",
                    "&:hover": { border: "1px solid magenta" },
                  }}
                  elevation={7}
                >
                  <div
                    style={{
                      padding: "16px",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p style={{ color: "green", fontWeight: "700" }}>
                        Drop the images here...
                      </p>
                    ) : (
                      <>
                        <p
                          style={{
                            marginBottom: "5px",
                            fontWeight: "700",
                            opacity: "none",
                          }}
                        >
                          Drag 'n' Drop some images here, or click to select
                          files
                        </p>
                        <em style={{ color: "#FFBF00", marginTop: "5px" }}>
                          Please select at least 5 images but a muximum of 10
                        </em>
                        <br />
                        <em
                          sx={{
                            color: "magenta",
                            marginTop: "5px",
                            size: "18px",
                          }}
                        >
                          Ensure that each image does not exceed 6.5MB in size
                        </em>
                        <br />
                        <em style={{}}>
                          (images with *.jpeg, *.png, *.jpg extension will be
                          accepted)
                        </em>
                      </>
                    )}
                  </div>
                </Paper>
              </Box>
            </Grid>

            {/*map images and color inputs */}
            <ImgComponent
              images={images}
              handleColorChange={handleColorChange}
              deleteImage={deleteImage}
            />
            <Grid item xs={12}>
              {/* product description textarea */}
              <TextField
                fullWidth
                multiline
                rows={4}
                sx={{ my: 2 }}
                label="Description"
                variant="outlined"
                type="text"
                required
                onChange={handleValueChange("description")}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "right" }}>
              <Button type="submit" variant="outlined">
                Add to Database
              </Button>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "right" }}>
              <Typography component={Link} to="/manage">
                Manage All Products
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "right" }}>
              <Typography component={Link} to="/userProfile">
                Profile Acount
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
