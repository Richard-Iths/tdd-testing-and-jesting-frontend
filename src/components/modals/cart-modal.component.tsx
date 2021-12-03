import React from 'react';
import BaseModal, { Props as IBaseModal } from './modalbase.component';

export interface Props extends IBaseModal {}

const CartModalComponent: React.FC<Props> = ({ visible, closeModal, name }) => {
  return (
    <BaseModal visible={visible} closeModal={closeModal} name={name}>
      <section className="cart-modal" data-test="cart-modal"></section>
    </BaseModal>
  );
};

export default CartModalComponent;
