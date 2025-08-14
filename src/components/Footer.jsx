import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { Padding } from "@mui/icons-material";
import "./styles/footer.css";

const Footer = () => 
  (
  <Box className="footer" sx={{textAlign: "left", bgcolor: "#2b2b2b", color: "white", py: 3, marginTop: "1px"}}> 
  {// mt: 1
  }
      <div className="footertext">
        © 2025 EnergoSzok. Wszelkie prawa zastrzeżone.
      </div>
  </Box>
);

export default Footer;
