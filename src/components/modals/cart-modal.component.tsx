import React, { useContext, useEffect, useState } from 'react';
import BaseModal, { Props as IBaseModal } from './modalbase.component';
import CartContext, { Cart } from '../../context/cart.context';
import CartCardComponent from '../cards/cart-card.component';
import './cart-modal.styles.scss';

export interface Props extends IBaseModal {}

const CartModalComponent: React.FC<Props> = ({ visible, closeModal, name }) => {
  const cartContext = useContext(CartContext);
  const [cartProducts, setCartProducts] = useState<Cart[] | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  useEffect(() => {
    setCartProducts([...cartContext.getCart()]);
    const amount = cartContext.cart.reduce((acc, curr) => {
      acc += curr.amount * curr.price;
      return acc;
    }, 0);
    setTotalAmount(amount);
  }, [cartContext]);

  return (
    <BaseModal visible={visible} closeModal={closeModal} name={name}>
      <section className="cart-modal" data-test="cart-modal">
        <div className="cart-modal__header"></div>
        <div className="cart-modal__content">
          {cartProducts && cartProducts.length > 0 ? (
            cartProducts.map((cartItem) => <CartCardComponent product={cartItem} key={cartItem.product_id} />)
          ) : (
            <h2 className="cart-modal__empty-cart heading">
              It is empty in here, chop chop go to work <i className="uil uil-ninja icon--medium" />
            </h2>
          )}
        </div>
        <div className="cart-modal__footer" data-test="cart-amount">
          <h3 className="cart-modal__total" data-test="cart-total-amount">
            Total amount:{totalAmount}
          </h3>
          <button className="cart-modal__btn icon--scale" data-test="cart-checkout">
            Checkout
          </button>
        </div>
      </section>
    </BaseModal>
  );
};

export default CartModalComponent;
