import { Card, CardContent, Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import './styles/product.css';

const styles = {
  unavailable: {
    box: {        
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      borderRadius: '8px',}
  },
  card: {
    contentBox: {
      display: 'flex',
      flexDirection: 'row', 
      gap: 2, 
      alignItems: 'flex-start', 
      // position: 'relative',
      // flexDirection: { xs: 'column', sm: 'row' }, 
      '@media (max-width:400px)': {
        flexDirection: 'column',  // na mniejszych ekranach pionowo
      },
      image: {
        maxHeight: '280px',
        maxWidth: '100%',
        width: '100%', // lub 'auto' – zależnie od potrzeb
        height: 'auto', // pozwala zachować proporcje
        borderRadius: '8px',
        transition: 'opacity 0.3s',
        objectFit: 'cover', // lub 'cover' w zależności od efektu
      }
    }
  }
}

const Produkt = ({ product }) => {
  const price = product.price.length < 1 ? null : product.price;
  const available = product.isAvailable

  const UnvailableProductCover = () => (
    <Box sx={styles.unavailable.box}>
      Niedostępny
    </Box>
  )

  return (
    <Card sx={{ width: 500, borderRadius: 2, boxShadow: 3, position: 'relative' }}>
      <CardContent>
        <Box sx={styles.card.contentBox} >
          <Box sx={{ position: 'relative' }}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              style={{
                ...styles.card.image,
                opacity: available ? 1 : 0.5,
              }}
            />
            {!available && <UnvailableProductCover />}
          </Box>

          <Box className="product-info" color={available ? "black": "gray"}>
            <Typography variant="h5" component="h2">
              {product.name}
            </Typography>

            {!!price && (
              <Typography variant="body1">
                {available && <strong>CENA: <span className="price">
                  {price}</span>{product.price2}
                </strong> }
                {!available && <strong>CENA: <span >{price} </span>
                </strong> }
              </Typography>
            )}
            <ul style={{ paddingLeft: '16px', margin: '8px 0' }}>
              {product.descr.map((item, index) => (
                <li key={index}>
                  <strong>{item.name}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Produkt;