import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material";
import MuiTheme from "../adminParts/utils/MuiTheme";

const PrivacyPolicy = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Privacy Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        At ComradeBiz, we collect and use certain information to enable
        communication between buyers and sellers. This information includes
        names, emails, phone numbers, and locations provided during
        registration. Valid contact details are required to notify sellers and
        fulfill orders. We take the security of this information seriously and
        have put in place encryption, firewalls, and employee training to
        protect it.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We also believe in the right to privacy and allow users to delete or
        update their own data. We do not share user information with third
        parties without explicit consent.
      </Typography>
    </Container>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
