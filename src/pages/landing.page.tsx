import React from 'react';
import ProductCardComponent from '../components/cards/product-card.component';
import { IProduct } from '../models/product';
import './landing.styles.scss';
interface Props {
  products: IProduct[];
}

const LandingPage: React.FC<Props> = ({ products }) => {
  return (
    <section className="products-section">
      {products.length > 0 &&
        products.map((product) => <ProductCardComponent key={product.product_id} product={product} />)}
    </section>
  );
};

export default LandingPage;
