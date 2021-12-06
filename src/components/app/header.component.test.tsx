import { render } from '@testing-library/react';
import HeaderComponent from './header.component';
import React from 'react';
import { shallow } from 'enzyme';
import CartModalComponent from '../modals/cart-modal.component';
import UserModalComponent from '../modals/user-modal.component';
import SearchBarComponent from '../search-bar/search-bar.component';
import { IProduct } from '../../models/product';

describe('header.component.tsx', () => {
  const products: IProduct[] = [
    {
      description: 'hello',
      img: 'img2',
      price: 23,
      name: 'name',
      product_id: '13131',
      shortDescription: 'a short description',
    },
  ];
  describe('Smoke tests', () => {
    it('Should render header component', () => {
      render(<HeaderComponent products={products} />);
    });

    it('Should render cart modal', () => {
      const wrapper = shallow(<HeaderComponent products={products} />);
      const cartModal = wrapper.find(CartModalComponent);
      expect(cartModal.exists()).toBe(true);
    });
    it('Should render user modal', () => {
      const wrapper = shallow(<HeaderComponent products={products} />);
      const userModal = wrapper.find(UserModalComponent);
      expect(userModal.exists()).toBe(true);
    });
    it('Should render a search bar component', () => {
      const wrapper = shallow(<HeaderComponent products={products} />);
      const searchBar = wrapper.find(SearchBarComponent);
      expect(searchBar.exists()).toBe(true);
    });
  });
  describe('White box tests', () => {
    it('Should toggle cart modal on cart icon click', () => {
      const wrapper = shallow(<HeaderComponent products={products} />);
      expect(wrapper.html().includes('data-test="cart-modal"')).toBe(false);
      const cartIcon = wrapper.find('[data-test="cart-icon"]');
      expect(cartIcon.exists()).toBe(true);
      cartIcon.simulate('click');
      expect(wrapper.html().includes('data-test="cart-modal"')).toBe(true);
    });
    it('Should toggle user modal on user icon click', () => {
      const wrapper = shallow(<HeaderComponent products={products} />);
      expect(wrapper.html().includes('data-test="user-modal"')).toBe(false);
      const userIcon = wrapper.find('[data-test="user-icon"]');
      expect(userIcon.exists()).toBe(true);
      userIcon.simulate('click');
      expect(wrapper.html().includes('data-test="user-modal"')).toBe(true);
    });
  });
});
