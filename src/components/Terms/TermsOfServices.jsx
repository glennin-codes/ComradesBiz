import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/material/styles";

const useStyles = {
  header: {
    backgroundColor: "#f5f5f5",
    color: "#333",
    padding: "16px",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "24px",
  },
  
  warning: {
    color: "#f44336",
    fontWeight: "bold",
    marginTop: "24px",
    marginBottom: "16px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
 

};
const TermsOfServices = () => {
  return (
    <Container
    maxWidth="md"
    sx={{
      display: 'flex',
      justifyContent:'center',
      flexDirection:'column',
    
      fontSize: {
        xs: '1rem',
        sm: '1.1rem',
        md: '1.2rem',
        lg: '1.2rem',
        xl: '1.2rem',
      },
    }}
  >
      <Typography variant="h4" style={useStyles.header} gutterBottom>
        Terms and Conditions
      </Typography>

      <Typography variant="subtitle1" style={useStyles.warning} gutterBottom>
        Attention! By using this platform, you agree to the following terms and
        conditions. Failure to comply may result in immediate termination of
        your account.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Prohibited Items
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="The following items are strictly prohibited on ComradeBiz Marketplace:" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Illegal items" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Drugs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Weapons" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Any items that promote or glorify violence or hatred" />
        </ListItem>
      </List>
      <Typography variant="h6" gutterBottom>
        Prohibited Conduct
      </Typography>
      <Typography variant="body1" gutterBottom>
        Any behavior that is deemed harmful or offensive to other users,
        including but not limited to harassment, hate speech, discrimination, or
        the promotion of illegal activities, is strictly prohibited. ComradeBiz
        Marketplace is a community of students who respect each other and uphold
        the values of inclusivity, diversity, and mutual respect.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Product Listings
      </Typography>
      <Typography variant="body1" gutterBottom>
        All products listed on ComradeBiz Marketplace must be accurately
        described and priced fairly. Users are prohibited from listing items
        that they do not have in their possession or are not authorized to sell.
        Any misrepresentation of products or services is strictly prohibited and
        can lead to the user being banned from the platform.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Services Listings
      </Typography>
      <Typography variant="body1" gutterBottom>
        All services listed on ComradeBiz Marketplace must be accurately
        described and priced fairly. Users are prohibited from offering services
        that they are not qualified to provide or that violate any laws or
        regulations. Any misrepresentation of services is strictly prohibited
        and can lead to the user being banned from the platform.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Payment
      </Typography>
      <Typography variant="body1" gutterBottom>
        ComradeBiz Marketplace does not handle any payments for goods or
        services. Users are responsible for arranging their own payment and
        shipping methods. Any transaction disputes should be resolved directly
        between the buyer and the seller.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Subscription Features
      </Typography>
      <Typography variant="body1" gutterBottom>
        Some features on ComradeBiz Marketplace may require a subscription fee.
        By subscribing to these features, users agree to pay the subscription
        fee and understand that they will have access to the features for the
        duration of their subscription. Users can cancel their subscription at
        any time, but subscription fees are non-refundable.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Privacy
      </Typography>
      <Typography variant="body1" gutterBottom>
        ComradeBiz Marketplace respects the privacy of its users and takes
        appropriate measures to protect their personal information. User
        information will not be shared with any third parties without the user's
        explicit consent.
      </Typography>
    </Container>
  );
};
export default TermsOfServices;
