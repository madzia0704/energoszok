import React from "react";
import { Container, Typography, Box } from "@mui/material";
import logo from "../assets/images/logo2.png";

const ContactSection = () => (
 <>
         <Box sx={{ mb: 2 }}>
           <img src={logo} alt="EnergoSzok" style={{ width: 150 }} />
         </Box>
         <Typography variant="h4" gutterBottom>
           Kontakt
         </Typography>
         <Typography variant="body1">
           Jeśli chcesz się z nami skontaktować śmiało pisz i dzwoń. Chętnie odpowiemy na wszystkie pytania!
         </Typography><br />
         <Typography variant="body1">
           📞 Tel: Tomasz Gościniak - +48 502 564 445
         </Typography><br />
         <Typography variant="body1">
           📍 Adres: Gorzysław 70, 72-320 Nowielice
         </Typography>
 </>
);

export default ContactSection;
