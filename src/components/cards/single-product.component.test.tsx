import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import React from 'react';
import { IProduct } from '../../models/product';
import SingleProductCardComponent from './single-product.component';
import CartContext, { Cart } from '../../context/cart.context';

describe('single-product.component.tsx', () => {
  const product: IProduct = {
    description: 'description',
    img: 'img',
    name: 'abc',
    price: 200,
    product_id: 'adadad',
    shortDescription: 'sdada',
  };
  describe('Smoke test', () => {
    it('should render single product card component', () => {
      render(<SingleProductCardComponent product={product} />);
    });
    it('should take a product as a prop', () => {
      const wrapper = mount(<SingleProductCardComponent product={product} />);
      expect(wrapper.props()).toStrictEqual({ product });
    });
  });
  describe('White box tests', () => {
    it('should add a product to cart when cart button is clicked', () => {
      const addCartItem = jest.fn();
      const wrapper = mount(
        <CartContext.Provider
          value={{
            addCartItem,
            cart: [],
            getCart: () => [],
            updateCartItem: () => {},
          }}
        >
          <SingleProductCardComponent product={product} />
        </CartContext.Provider>
      );

      expect(addCartItem).toBeCalledTimes(0);
      const cart = wrapper.find('[data-test="single-product-cart"]');
      expect(cart.exists()).toBe(true);

      cart.simulate('click'), expect(addCartItem).toBeCalledTimes(1);
    });
  });
});
