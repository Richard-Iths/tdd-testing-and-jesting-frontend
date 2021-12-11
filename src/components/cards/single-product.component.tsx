import React, { useContext } from 'react';
import CartContext from '../../context/cart.context';
import { IProduct } from '../../models/product';
export interface Props {
  product: IProduct;
}
const SingleProductCardComponent: React.FC<Props> = ({ product }) => {
  const cartContext = useContext(CartContext);
  return (
    <article className="single-product-card">
      <div className="single-product-card__header">
        <div className="single-product-card__header__content">
          <img src={product.img} alt={product.name} />
          <h2 className="single-product-card__title">{product.name}</h2>
        </div>
        <h4>In stock 4</h4>
      </div>
      <div className="single-product-card__content">
        <p className="single-product-card__description">{product.description}</p>
      </div>
      <div className="single-product-card__footer">
        <div className="single-product-card__footer__price">
          <span className="figure figure--circle">
            <i className="uil uil-coins icon--normal"></i>
          </span>
          <h4>{product.price} :-</h4>
        </div>
        <span className="figure figure--circle icon--cta">
          <i
            className="uil uil-shopping-cart icon--normal"
            data-test="single-product-cart"
            onClick={() => cartContext.addCartItem(product)}
          ></i>
        </span>
      </div>
    </article>
  );
};

export default SingleProductCardComponent;
