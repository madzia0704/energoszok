
import { Box } from "@mui/material";
// import PhoneIcon from '@mui/icons-material/Phone';

const ContactMapSection = () => {
  return (
      <Box sx={{ flex: 2, minWidth: 200, height: 300 }}>
        <iframe
          title="EnergoSzok Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen=""
          // aria-hidden="false" 
          // tabindex="0"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18728.796820025458!2d15.257131!3d54.071977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4b9b2ac14bfe43b3!2sENERGOSZOK.PL!5e0!3m2!1spl!2spl!4v1587304834912!5m2!1spl!2spl"
        />
      </Box>
  );
};

export default ContactMapSection;
