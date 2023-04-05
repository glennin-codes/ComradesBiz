import React from "react";
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
  ThemeProvider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import MuiTheme from "../utils/MuiTheme";
export default function ImgComponent({
  images,
  handleColorChange,
  deleteImage,
}) {
  return (
    <>
    <ThemeProvider theme={MuiTheme}>
      <Grid item xs={12}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}
            className="image-wrapper"
          >
            {/* image display */}
            <div key={index}>
              <img
                src={image.data}
                alt={`Image ${index + 1}`}
                width="100"
                height="100"
              />
            </div>
            {/* color input */}
            <FormControl fullWidth variant="standard" style={{color: 'black'}}>
              <InputLabel>Image {index + 1} Color</InputLabel>
              <Select style={{color: 'black'}} value={image.color} onChange={handleColorChange(index)}>
                <MenuItem  style={{color: 'black'}}  value="red">Red</MenuItem>
                <MenuItem   style={{color: 'black'}}   value="blue">Blue</MenuItem>
                <MenuItem   style={{color: 'black'}}   value="green">Green</MenuItem>
                <MenuItem   style={{color: 'black'}}   value="black">Black</MenuItem>
                <MenuItem   style={{color: 'black'}}   value="white">White</MenuItem>
                <MenuItem   style={{color: 'black'}}   value="pink">Pink</MenuItem>
                <MenuItem   style={{color: 'black'}}   value="purple">Purple</MenuItem>
                <MenuItem   style={{color: 'black'}}   value="silver">Silver</MenuItem>
                <MenuItem   style={{color: 'black'}}   value="yellow">Yellow</MenuItem>
              </Select>
            </FormControl>
            <IconButton onClick={() => deleteImage(index)}>
              <DeleteIcon
                sx={{
                  color: "rgb(255, 0, 0)",
                  "&:hover": {
                    color: "rgb(200, 0, 0)",
                    cursor: "pointer",
                  },
                }}
              />
            </IconButton>
          </Box>
        ))}
      </Grid>
      </ThemeProvider>
    </>
  );
}
