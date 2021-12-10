import React, { useContext, useEffect, useState } from 'react';
import CartModalComponent, { Props as ICartModal } from '../modals/cart-modal.component';
import UserModalComponent, { Props as IUserModal } from '../modals/user-modal.component';
import SearchBarComponent from '../search-bar/search-bar.component';
import { Modal } from '../modals/modals.types';
import { ReactComponent as ExploreImg } from '../../assets/images/explore.svg';
import { IProduct } from '../../models/product';
import CartContext from '../../context/cart.context';

import './header.styles.scss';

interface Props {
  products: IProduct[];
}

const HeaderComponent: React.FC<Props> = ({ products }) => {
  const [userModalVisibility, setUserModalVisibility] = useState<boolean>(false);
  const [cartModalVisibility, setCartModalVisibility] = useState<boolean>(false);
  const [itemsInCart, setItemsInCart] = useState<number>(0);
  const { getCart } = useContext(CartContext);
  useEffect(() => {
    const cartItems = getCart().reduce((acc, curr) => {
      acc += curr.amount;
      return acc;
    }, 0);
    setItemsInCart(cartItems);
  }, [getCart]);

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
          <nav className="app-header__nav" data-test="app-header-navigation">
            <ul className="app-header__nav__menu">
              <li className="app-header__nav__menu__link">Home</li>
              <li className="app-header__nav__menu__link">About</li>
            </ul>
            <span className="figure figure--circle figure--primary">
              {' '}
              <i
                className="uil uil-shopping-cart icon--medium"
                data-test="cart-icon"
                onClick={() => toggleModal(Modal.CART_MODAL)}
              ></i>
              <span className="figure figure--circle figure--accent figure--abs app-header__items-in-cart">
                {itemsInCart}
              </span>
            </span>
            <span className="figure figure--circle figure--accent">
              <i
                className="uil uil-user icon--medium"
                data-test="user-icon"
                onClick={() => toggleModal(Modal.USER_MODAL)}
              ></i>
            </span>
          </nav>
        </div>

        <div className="app-header__hero">
          <h1 className="heading--extra-large">
            START EXPLORING <br /> YOUR NEW <br /> STUFF TODAY
          </h1>
          <div className="app-header__search">
            <ExploreImg />
            <SearchBarComponent products={products} />
          </div>
        </div>
      </header>
      <CartModalComponent {...CartModalState} />
      <UserModalComponent {...UserModalState} />
    </>
  );
};

export default HeaderComponent;
