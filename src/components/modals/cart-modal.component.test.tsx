import React from 'react';
import { render } from '@testing-library/react';
import CartModalComponent, { Props } from './cart-modal.component';
import CartCardComponent, { Props as CardProps } from '../cards/cart-card.component';
import { Modal } from './modals.types';
import { mount, shallow } from 'enzyme';
import CartContext from '../../context/cart.context';

describe('cart-modal.component.tsx', () => {
  const cartProps: Props = {
    closeModal: () => {},
    visible: true,
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
      const wrapper = mount(
        <CartContext.Provider
          value={{
            cart: [{ ...cardProps.product }],
            getCart: () => [{ ...cardProps.product }],
            addCartItem: (_) => {},
            updateCartItem: (_) => {},
          }}
        >
          <CartModalComponent {...cartProps} />
        </CartContext.Provider>
      );
      const amount = wrapper.find('[data-test="cart-total-amount"]');
      expect(amount.text()).toBe(`Total amount:${cardProps.product.price * cardProps.product.amount}`);
    });

    it('should have a checkout button', () => {
      const wrapper = shallow(<CartModalComponent {...cartProps} />);
      const button = wrapper.find('[data-test="cart-checkout"]');
      expect(button.exists()).toBe(true);
    });
  });
});
