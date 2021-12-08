import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import React from 'react';
import { IProduct } from '../../models/product';
import CartCardComponent from './cart-card.component';

describe('CartCardComponent', () => {
  const data: Pick<IProduct, 'img' | 'name' | 'price'> = {
    img: 'hej bild',
    name: 'Mattias',
    price: 666,
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
