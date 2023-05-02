import { Box, IconButton, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { WhatsApp, Facebook, Instagram } from '@mui/icons-material';


export default function SocialFlow({infos}) {
  const {phone,name,price,image}=infos

const message = `Hi, I'm interested in your ${name} product that is priced at ${price}. Can you provide me with more information?<br>${image && image.length > 0 && <img src={image[0]?.url} alt={name} />}
`;

const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  const facebookLink = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)}`;
  const instagramLink = `https://www.instagram.com/sharer.php?u=${encodeURIComponent(window.location.href)}`;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <ListItem disablePadding>
          <ListItemIcon>
            <IconButton component={Link} href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsApp />
            </IconButton>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
          </ListItemIcon>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <IconButton component={Link} href={facebookLink} target="_blank" rel="noopener noreferrer">
              <Facebook />
            </IconButton>
          </ListItemIcon>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <IconButton component={Link} href={instagramLink} target="_blank" rel="noopener noreferrer">
              <Instagram />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
};
