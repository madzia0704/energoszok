import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => 
  (
  <Box sx={{ py: 3, mt: 4 }}>
  {/* <Box sx={{ bgcolor: "primary.main", color: "white", py: 3, mt: 4 }}> */}
    <Container sx={{ bgcolor: "#2b2b2b", color: "white", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
      <Typography variant="body1">
        © 2025 EnergoSzok. Wszelkie prawa zastrzeżone.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
