import React, { useContext } from 'react';
import CartContext, { Cart, UpdateType } from '../../context/cart.context';
import "./cart-card.styles.scss";

export interface Props {
  product: Cart;
}

const CartCardComponent: React.FC<Props> = ({ product }) => {
  const cartContext = useContext(CartContext);
  return (
    <article className="cart-card">
      <div className="cart-card__img" data-test="cart-card--img">
        <img src={`${product.img}`} alt={`${product.name}`} />
      </div>
      <div className="cart-card__title" data-test="cart-card--title">
        <h3>{product.name}</h3>
      </div>
      <div className="cart-card__amount" data-test="cart-card--amount">
        <i
          className="uil uil-angle-left-b icon--cta"
          onClick={() => cartContext.updateCartItem(product.product_id, UpdateType.DECREMENT)}
        ></i>
        <h5><span className="figure-block">{product.amount}</span></h5>
        <i
          className="uil uil-angle-right-b icon--cta"
          onClick={() => cartContext.updateCartItem(product.product_id, UpdateType.INCREMENT)}
        ></i>

      </div>
        <h5>Amount { product.amount * product.price}</h5>
    </article>
  );
};

export default CartCardComponent;
