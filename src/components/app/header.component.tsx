import React, { useState } from 'react';
import CartModalComponent, { Props as ICartModal } from '../modals/cart-modal.component';
import UserModalComponent, { Props as IUserModal } from '../modals/user-modal.component';
import SearchBarComponent from '../search-bar/search-bar.component';
import { Modal } from '../modals/modals.types';
import { ReactComponent as ExploreImg } from '../../assets/images/explore.svg';

import './header.styles.scss';
import { IProduct } from '../../models/product';

interface Props {
  products: IProduct[];
}

const HeaderComponent: React.FC<Props> = ({ products }) => {
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
        <div className="app-header__top">
          <h2 className="heading">T&amp;J AB</h2>
          <nav className="app-header__nav">
            <i
              className="uil uil-shopping-cart"
              data-test="cart-icon"
              onClick={() => toggleModal(Modal.CART_MODAL)}
            ></i>
            <i className="uil uil-user" data-test="user-icon" onClick={() => toggleModal(Modal.USER_MODAL)}></i>
          </nav>
        </div>
        <div className="app-header__hero">
          <h1 className="heading--large">
            START EXPLORING <br /> YOUR NEW <br /> STUFF TODAY
          </h1>
          <ExploreImg />
          <SearchBarComponent products={products} />
        </div>
      </header>
      <CartModalComponent {...CartModalState} />
      <UserModalComponent {...UserModalState} />
    </>
  );
};

export default HeaderComponent;
