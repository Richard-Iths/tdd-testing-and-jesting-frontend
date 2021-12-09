import React, { useContext } from 'react';
import BaseModal, { Props as IBaseModal } from './modalbase.component';
import CartContext from '../../context/cart.context';
import CartCardComponent from '../cards/cart-card.component';

export interface Props extends IBaseModal {}

const CartModalComponent: React.FC<Props> = ({ visible, closeModal, name }) => {
  const cartContext = useContext(CartContext);

  return (
    <BaseModal visible={visible} closeModal={closeModal} name={name}>
      <section className="cart-modal" data-test="cart-modal">
        <div className="cart-modal__header"></div>
        <div className="cart-modal__content">
          {cartContext.cart.map((cartItem) => (
            <CartCardComponent product={cartItem} key={cartItem.product_id} />
          ))}
        </div>
        <div className="cart-modal__footer" data-test="cart-amount"></div>
      </section>
    </BaseModal>
  );
};

export default CartModalComponent;
