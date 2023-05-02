import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { WhatsApp, Facebook, Instagram } from "@mui/icons-material";

export default function SocialFlow({ infos }) {
  const { phone, name, price, image } = infos;

  const message = `Hi, I'm interested in your ${name} product that is priced at ${price}. Can you provide me with more information?<br>${
    image && image.length > 0 && <img src={image[0]?.url} alt={name} />
  }
`;

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;
  const facebookLink = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
    window.location.href
  )}`;
  const instagramLink = `https://www.instagram.com/sharer.php?u=${encodeURIComponent(
    window.location.href
  )}`;

  return (
    <Box
      sx={{
        // position: 'fixed',
        bottom: "50px",
        right: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          transition: "all .3s linear",
          "& > *:hover": {
            transform: "scale(1.2)",
          },
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography variant="subtitle1" sx={{ color: "#666" }}>
          Notify seller
        </Typography>
        <ListItem disablePadding>
          <ListItemIcon>
            <IconButton
              component={Link}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp
                fontSize="large"
                sx={{
                  color: '#fff !important',
                  borderRadius:'10px',
                  width: "32px",
                  height: "32px",
                  background: "#075e54",
                }}
              />
            </IconButton>
          </ListItemIcon>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <IconButton
              component={Link}
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                fontSize="large"
                sx={{
                  color: '#fff !important',
                  borderRadius:'10px',
                  width: "32px",
                  height: "32px",
                  background: "#4267B2",
                }}
              />
            </IconButton>
          </ListItemIcon>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <IconButton
              component={Link}
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                fontSize="large"
                sx={{
                  color: '#fff !important',
                  borderRadius:'10px',
                  width: "32px",
                  height: "32px",
                  background: "#f09433",
                  background:
                    "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  background:
                    "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                  background:
                    " linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                  // filter:'progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )',
                }}
              />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
}
