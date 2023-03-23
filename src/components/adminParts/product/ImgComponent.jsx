import React, { forwardRef, useRef } from "react";
import {useSpring, animated } from "react-spring";
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
import usePrevious from "../assets/hooks/usePrevious";
export default function ImgComponent({ images, handleColorChange, deleteImage }) {
  // const prevImages =usePrevious(images);
  const refs = useRef(images.map(() => React.createRef()));

  const ImageTransition = forwardRef((props, ref) => {
    const spring = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      config: { duration: 500 },
    });

    return (
      <animated.div ref={ref} style={spring} {...props} />
    );
  });

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
            <ImageTransition key={index}>
              <animated.img
                src={image.data}
                alt={`Image ${index + 1}`}
                width="100"
                height="100"
                // style={{
                //   opacity:
                //     prevImages &&
                //     prevImages[index] &&
                //     prevImages[index].data === image.data
                //       ? 1
                //       : 1,
                //   marginRight: "8px",
                // }}
                
              />
            </ImageTransition>
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
            <IconButton   onClick={() => deleteImage(index)}>
              {/* <ImageTransition
                key={index}
                timeout={500}
              > */}
                {/* <animated.div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "8px",
                    opacity: 1,
                    from: { opacity: 1 },
                  }}
                > */}
                  <DeleteIcon
                    sx={{
                      color: "rgb(255, 0, 0)",
                      "&:hover": {
                        color: "rgb(200, 0, 0)",
                        cursor: "pointer",
                      },
                    }}
                  
                  />
                {/* </animated.div> */}
              {/* </ImageTransition> */}
            </IconButton>
          </Box>
        ))}
      </Grid>
    </>
  );
}
