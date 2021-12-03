import React, { useState } from 'react';
import CartModalComponent, { Props as ICartModal } from '../modals/cart-modal.component';
import UserModalComponent, { Props as IUserModal } from '../modals/user-modal.component';
import { Modal } from '../modals/modals.types';

const HeaderComponent: React.FC = () => {
  const [userModalVisibility, setUserModalVisibility] = useState<boolean>(false);
  const [cartModalVisibility, setCartModalVisibility] = useState<boolean>(false);

  const toggleModal = (toggleModal: Modal) => {
    switch (toggleModal) {
      case Modal.CART_MODAL:
        setCartModalVisibility(!cartModalVisibility);
        break;
      case Modal.USER_MODAL:
        setUserModalVisibility(!userModalVisibility);
        break;
      default:
    }
  };

  const CartModalState: ICartModal = {
    visible: cartModalVisibility,
    closeModal: toggleModal,
    name: Modal.CART_MODAL,
  };

  const UserModalState: IUserModal = {
    visible: userModalVisibility,
    closeModal: toggleModal,
    name: Modal.USER_MODAL,
  };

  return (
    <>
      <header className="app-header">
        <i className="uil uil-shopping-cart" data-test="cart-icon" onClick={() => toggleModal(Modal.CART_MODAL)}></i>
        <i className="uil uil-user" data-test="user-icon" onClick={() => toggleModal(Modal.USER_MODAL)}></i>
      </header>
      <CartModalComponent {...CartModalState} />
      <UserModalComponent {...UserModalState} />
    </>
  );
};

export default HeaderComponent;
