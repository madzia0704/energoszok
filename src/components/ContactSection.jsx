import { Typography, Box } from "@mui/material";
import logo from "../assets/images/logo2.png";

const ContactSection = () => {
  const body = [
    "Jeśli chcesz się z nami skontaktować śmiało pisz i dzwoń. Chętnie odpowiemy na wszystkie pytania!",
    "📞 Tel: Tomasz Gościniak +48 502 564 445",
    "📍 Adres: Gorzysław 70, 72-320 Nowielice",
  ];

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <img src={logo} alt="EnergoSzok" style={{ width: 150 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Kontakt
      </Typography>
      {body.map((item, index) => (
        <Typography
          className="contact-body"
          key={index}
          variant="body1"
          style={{ marginBottom: "0.5rem" }}
        >
          {item}
        </Typography>
      ))}
    </>
  );
};

export default ContactSection;
