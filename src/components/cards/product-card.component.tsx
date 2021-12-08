import React, { useContext } from 'react';
import { IProduct } from '../../models/product';
import { Link } from 'react-router-dom';
import './product-card.styles.scss';
import CartContext from '../../context/cart.context';

export interface Props {
  product: IProduct;
}

const ProductCardComponent: React.FC<Props> = ({ product }) => {
  const cartContext = useContext(CartContext);

  return (
    <article
      className="product-card"
      style={{
        backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${product.img})`,
      }}
      data-test="product-card"
    >
      <div className="hide product-card__header" data-test="header-section">
        <span className="figure figure--circle">
          <i className="uil uil-shopping-cart icon--normal" onClick={() => cartContext.addCartItem(product)}></i>
        </span>
      </div>
      <div className="product-card__content" data-test="content-section">
        <h2 className="heading">{product.name}</h2>
        <p>{product.shortDescription}</p>
        <Link className="hide product-card__cta" to={`/products/${product.product_id}`} data-test="product-link">
          SHOW ME
        </Link>
      </div>
      <div className="hide product-card__footer" data-test="footer-section">
        <span className="figure figure--circle">
          <i className="uil uil-coins icon--normal"></i>
        </span>
        <h4>{product.price} :-</h4>
      </div>
    </article>
  );
};

export default ProductCardComponent;
