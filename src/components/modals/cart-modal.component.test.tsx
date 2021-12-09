import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import CartModalComponent, { Props } from './cart-modal.component';
import CartCardComponent, { Props as CardProps } from '../cards/cart-card.component';
import { Modal } from './modals.types';
import { mount, shallow } from 'enzyme';
import CartContext, { Cart, CartContextProvider } from '../../context/cart.context';

describe('cart-modal.component.tsx', () => {
  const cartProps: Props = {
    closeModal: () => {},
    visible: false,
    name: Modal.CART_MODAL,
  };

  const cardProps: CardProps = {
    product: {
      name: 'Spongebob',
      img: 'facebook/1',
      price: 200,
      product_id: 'sdadoii',
      shortDescription: 'a short description',
      description: 'Ingen description',
      amount: 34345,
    },
  };

  describe('Smoke tests', () => {
    it('should render cart-modal component', () => {
      render(<CartModalComponent {...cartProps} />);
    });
    it('should render cart card component', () => {
      render(<CartCardComponent {...cardProps} />);
    });
  });
  describe('Black box tests', () => {
    it('should have a total amount', () => {
      const wrapper = shallow(<CartModalComponent {...cartProps} />);
      const amount = wrapper.find('[data-test="cart-amount"]');
      expect(amount.exists()).toBe(true);
    });

    it('should render cart items with total amount', () => {
      const mockedCart = CartContext.Provider as jest.Mocked<typeof CartContext.Provider>;
      mount(
        <CartContext.Provider
          value={{
            cart: mockedCart,
            getCart: () => [],
            addCartItem: (_) => {},
            updateCartItem: (_) => {},
          }}
        >
          <CartModalComponent {...cartProps} />
        </CartContext.Provider>
      );
      expect(contextSpy).toHaveBeenCalled();
    });
  });
});
