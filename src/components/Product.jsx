// import { Card, CardContent, CardMedia, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
// import './styles/product.css';

// const Produkt = ({product}) => {
//   const price = product.price.length < 1 ? null : product.price;
//   return (
//   <Card sx={{ width: 500, borderRadius: 2, boxShadow: 3 }}>
//     <CardContent>
//       <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
//         <img 
//           src={product.image}
//           alt={product.name}
//           className="product-image"
//           height="280px"
//         />
//         <div className="product-info">
//           <h2>{product.name}</h2>
//           {!!price && <p><strong>CENA:</strong>{price}</p>}
//           <ul>
//               {product.descr.map((item, index) =>(<li key={index}><strong>{item.name}:</strong>{item.value}</li>))}
//           </ul>
//           </div>
//       </div>
//     </CardContent>
//   </Card>);
// };

// export default Produkt;


import { Card, CardContent, Box, Typography } from "@mui/material";

const Produkt = ({ product }) => {
  const price = product.price.length < 1 ? null : product.price;
  const available = product.isAvailable

  return (
    <Card sx={{ width: 500, borderRadius: 2, boxShadow: 3, position: 'relative' }}>
      <CardContent>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', position: 'relative' }}>
          <Box sx={{ position: 'relative' }}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              height="280px"
              style={{
                borderRadius: '8px',
                opacity: available ? 1 : 0.5,
                transition: 'opacity 0.3s',
              }}
            />

            {!available && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                }}
              >
                Niedostępny
              </Box>
            )}
          </Box>

          <Box className="product-info" color={available ? "black": "gray"}>
            <Typography variant="h5" component="h2">{product.name}</Typography>

            {!!price && (
              <Typography variant="body1">
                <strong>CENA:</strong> {price}
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
