import React, { useContext } from 'react';
import BaseModal, { Props as IBaseModal } from './modalbase.component';
import CartContext from '../../context/cart.context';
import CartCardComponent from '../cards/cart-card.component';

export interface Props extends IBaseModal {}

const CartModalComponent: React.FC<Props> = ({ visible, closeModal, name }) => {
  const cartContext = useContext(CartContext);

  const calcTotalAmount = () =>
    cartContext.cart.reduce((acc, curr) => {
      acc += curr.amount * curr.price;
      return acc;
    }, 0);

  return (
    <BaseModal visible={visible} closeModal={closeModal} name={name}>
      <section className="cart-modal" data-test="cart-modal">
        <div className="cart-modal__header"></div>
        <div className="cart-modal__content">
          {cartContext.cart.map((cartItem) => (
            <CartCardComponent product={cartItem} key={cartItem.product_id} />
          ))}
        </div>
        <div className="cart-modal__footer" data-test="cart-amount">
          <h3 className="cart-modal__total" data-test="cart-total-amount">
            Total amount:{calcTotalAmount()}
          </h3>
          <button className="cart-modal__btn" data-test="cart-checkout">
            Checkout
          </button>
        </div>
      </section>
    </BaseModal>
  );
};

export default CartModalComponent;
