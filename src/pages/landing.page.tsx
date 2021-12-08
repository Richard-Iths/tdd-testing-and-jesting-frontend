import React, { useContext, useEffect } from 'react';
import ProductCardComponent from '../components/cards/product-card.component';
import CartContext from '../context/cart.context';
import { IProduct } from '../models/product';
import './landing.styles.scss';
interface Props {
  products: IProduct[];
}

const LandingPage: React.FC<Props> = ({ products }) => {
  const cartContext = useContext(CartContext);
  useEffect(() => {
    console.log(cartContext, 'context');
    cartContext.addProduct({
      description: 'ASDAD',
      img: 'SADA',
      name: 'ASDA',
      price: 123,
      product_id: 'ASDA',
      shortDescription: 'SADAD',
    });

    console.log(cartContext.getCart(), 'getCart');
  }, []);

  return (
    <section className="products-section">
      {products.length > 0 && products.map((product) => <ProductCardComponent key={product.product_id} {...product} />)}
    </section>
  );
};

export default LandingPage;
