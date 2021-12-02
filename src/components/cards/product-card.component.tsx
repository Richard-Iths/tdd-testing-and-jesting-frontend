import React from "react";
import { IProduct } from "../../models/product";
import { Link } from "react-router-dom";

const ProductCardComponent: React.FC<Partial<IProduct>> = ({
  img,
  product_id,
  price,
  name,
  shortDescription,
}) => {
  return (
    <article className="product-card">
      <div className="product-card__header" data-test="header-section">
        <i className="uil uil-shopping-cart"></i>
      </div>
      <div className="product-card__content" data-test="content-section">
        <h2 className="heading">{name}</h2>
        <p>{shortDescription}</p>
        <Link
          to={`/products/${product_id}`}
          className="product-card__cta"
          data-test="product-link"
        >
          SHOW ME
        </Link>
      </div>
      <div className="product-card__footer" data-test="footer-section">
        <span className="figure--circle">
          <i className="uil uil-tag"></i>
        </span>
        <h4>{price}</h4>
      </div>
    </article>
  );
};

export default ProductCardComponent;
