import React from "react";
import { Box } from "@mui/material";
import ContactSection from "./ContactSection";
import ContactMapSection from "./ContactMapSection";

const styles = {
  container: {
    display: "flex",
    bgcolor: "#2b2b2b",
    color: "white",
    p: { xs: 2, sm: 3, md: 4 },
    gap: { xs: 2, sm: 3, md: 4 },
    flexWrap: "wrap",
  },
};

const Contact = () => {
  return (
    <Box id="kontakt" sx={styles.container}>
      {/* Lewa kolumna - informacje kontaktowe */}
      <Box sx={{ flex: 1, minWidth: 300 }}>
        <ContactSection />
      </Box>
      {/* Prawa kolumna - mapa */}
      <ContactMapSection />
    </Box>
  );
};

export default Contact;
