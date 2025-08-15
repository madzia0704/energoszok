import { Box } from "@mui/material";
import "./styles/footer.css";

const Footer = () => (
  <Box
    className="footer"
    sx={{
      textAlign: "left",
      bgcolor: "#2b2b2b",
      color: "white",
      py: 3,
      mt: "1px",
    }}
  >
    <div className="footertext">
      © 2025 EnergoSzok. Wszelkie prawa zastrzeżone.
    </div>
  </Box>
);

export default Footer;
