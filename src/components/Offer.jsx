import React from 'react'
import premium from "../assets/images/products/premium.jpg";
import Produkt from './Product';
import "./styles/offer.css"
import { products } from '../services/mockedData';

const Offer = () => {
    const title = `Groszek PLUS\ndawniej EKOGROSZEK PREMIUM PLUS\nCENA 1619 ZŁ`;

  return (
        <section id="oferta">
        <div className="container">
            <div className="card-row">
                {  products.map((product, index) =>(<Produkt product={product} key={index}/>))}
            </div>
        </div>
    </section>
  )
}

export default Offer;