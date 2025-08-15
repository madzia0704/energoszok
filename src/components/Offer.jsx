import Produkt from "./Product";
import "./styles/offer.css";
import { products } from "../services/mockedData";

const Offer = () => {
  return (
    <section id="oferta">
      <div className="card-row">
        {products.map((product, index) => (
          <Produkt product={product} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Offer;
