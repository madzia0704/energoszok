import { Card, CardContent, CardMedia, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import './styles/product.css';

const Produkt = ({product}) => {
const ArtCard = () => (
  <Card sx={{ width: 500, borderRadius: 2, boxShadow: 3 }}>
    <CardContent>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <img 
          src={product.image}
          alt="Brykiet drzewny RUF" 
          className="brykiet-image"
          height="280px"
        />
        <div className="brykiet-info">
          <h2>{product.name}</h2>
          <p><strong>CENA:</strong>{product.price}</p>
          <ul>
              {product.descr.map((item, index) =>(<li key={index}><strong>{item.name}:</strong>{item.value}</li>))}
          </ul>
          </div>
      </div>
    </CardContent>
  </Card>
);

  // return (<ProductCard product={product}/>);
  return (<ArtCard product={product}/>);
};

export default Produkt;

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ width: 250, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <div>
          <img 
            src={product.image}
            alt={product.name} 
            className="brykiet-image"
            height="180px"
            style={{ width: '100%', objectFit: 'cover', borderRadius: '4px' }}
          />
          <div className="brykiet-info" style={{ marginTop: '10px' }}>
            <Typography variant="h6" component="div">
              {product.name}
            </Typography>
            {product.price && (
              <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '5px' }}>
                CENA: {product.price}
              </Typography>
            )}
            <ul style={{ paddingLeft: '16px', marginTop: '10px' }}>
              {product.descr.map((item, index) => (
                <li key={index}>
                  <strong>{item.name}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// export default ProductCard;

