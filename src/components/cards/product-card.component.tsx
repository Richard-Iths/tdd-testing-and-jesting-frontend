import React from 'react';
import { IProduct } from '../../models/product';
import { Link } from 'react-router-dom';
import './product-card.styles.scss';

export interface Props extends Pick<IProduct, 'img' | 'product_id' | 'price' | 'name' | 'shortDescription'> {}

const ProductCardComponent: React.FC<Props> = ({ img, product_id, price, name, shortDescription }) => {
  return (
    <article
      className="product-card"
      style={{
        backgroundImage: `linear-gradient(110deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
      }}
      data-test="product-card"
    >
      <div className="hide product-card__header" data-test="header-section">
        <span className="figure figure--circle">
          <i className="uil uil-shopping-cart icon--normal"></i>
        </span>
      </div>
      <div className="product-card__content" data-test="content-section">
        <h2 className="heading">{name}</h2>
        <p>{shortDescription}</p>
        <Link className="hide product-card__cta" to={`/products/${product_id}`} data-test="product-link">
          SHOW ME
        </Link>
      </div>
      <div className="hide product-card__footer" data-test="footer-section">
        <span className="figure figure--circle">
          <i className="uil uil-coins icon--normal"></i>
        </span>
        <h4>{price} :-</h4>
      </div>
    </article>
  );
};

export default ProductCardComponent;
