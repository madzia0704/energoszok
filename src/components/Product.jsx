import { Card, CardContent, CardMedia, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import './styles/product.css';

const Produkt = ({product}) => {
  const price = product.price.length < 1 ? null : product.price;
  return (
  <Card sx={{ width: 500, borderRadius: 2, boxShadow: 3 }}>
    <CardContent>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <img 
          src={product.image}
          alt={product.name}
          className="product-image"
          height="280px"
        />
        <div className="product-info">
          <h2>{product.name}</h2>
          {!!price && <p><strong>CENA:</strong>{price}</p>}
          <ul>
              {product.descr.map((item, index) =>(<li key={index}><strong>{item.name}:</strong>{item.value}</li>))}
          </ul>
          </div>
      </div>
    </CardContent>
  </Card>);
};

export default Produkt;