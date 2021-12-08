import React, { useContext } from 'react';
import { IProduct } from '../../models/product';
import CartContext, { Cart, UpdateType } from '../../context/cart.context';

interface Props {
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
          className="uil uil-angle-left-b"
          onClick={() => cartContext.updateCartItem(product.product_id, UpdateType.DECREMENT)}
        ></i>
        <span className="figure-block">{product.amount}</span>
        <i
          className="uil uil-angle-right-b"
          onClick={() => cartContext.updateCartItem(product.product_id, UpdateType.INCREMENT)}
        ></i>
      </div>
    </article>
  );
};

export default CartCardComponent;
