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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
export default function ImgComponent({
  images,
  handleColorChange,
  deleteImage,
}) {
  return (
    <>
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
            <FormControl fullWidth variant="standard">
              <InputLabel>Image {index + 1} Color</InputLabel>
              <Select value={image.color} onChange={handleColorChange(index)}>
                <MenuItem value="red">Red</MenuItem>
                <MenuItem value="blue">Blue</MenuItem>
                <MenuItem value="green">Green</MenuItem>
                <MenuItem value="black">Black</MenuItem>
                <MenuItem value="white">White</MenuItem>
                <MenuItem value="pink">Pink</MenuItem>
                <MenuItem value="purple">Purple</MenuItem>
                <MenuItem value="silver">Silver</MenuItem>
                <MenuItem value="yellow">Yellow</MenuItem>
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
    </>
  );
}
