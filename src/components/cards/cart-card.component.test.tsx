import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import React from 'react';
import { Cart } from '../../context/cart.context';
import CartCardComponent from './cart-card.component';

describe('CartCardComponent', () => {
  const data: Cart = {
    img: 'hej bild',
    name: 'Mattias',
    price: 666,
    amount: 2,
    description: 'DADA',
    product_id: '13131',
    shortDescription: 'A SHORT DESCRIPTION',
  };

  describe('Smoke tests', () => {
    it('Should render CartCardComponent', () => {
      render(<CartCardComponent product={data} />);
    });
  });
  describe('Black box tests', () => {
    it('Should receive product as a prop', () => {
      const wrapper = mount(<CartCardComponent product={data} />);
      expect(wrapper.props()).toStrictEqual({ product: data });
    });
  });
});
