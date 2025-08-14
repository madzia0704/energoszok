import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const products = [
  { name: 'Groszek PLUS', price: '1619 ZŁ', description: 'Wartość opałowa: 23-27 MJ/kg' },
  { name: 'Orzech PREMIUM PLUS', price: '1619 ZŁ', description: 'Wartość opałowa: 30 MJ/kg' },
  // Dodaj inne produkty...
];

const MainSection = () => (
  <div>
    <Typography variant="h4" gutterBottom>
      SKŁAD OPAŁU
    </Typography>
    <Typography variant="h6" paragraph>
      Posiadamy najlepszy opał w najniższych cenach!
    </Typography>
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.price}</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default MainSection;
