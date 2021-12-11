import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import react from 'react';
import { IProduct } from '../../models/product';
import SingleProductCardComponent from '../cards/single-product.component';
import SingleProductComponent from './single-product.component';

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
    it('should render single product component', () => {
      render(<SingleProductComponent product={product} />);
    });
    it('should render single product card component', () => {
      render(<SingleProductCardComponent product={product} />);
    });
  });

  describe('Black box tests', () => {
    it('should take product as a prop', () => {
      const wrapper = mount(<SingleProductComponent product={product} />);
      expect(wrapper.props()).toStrictEqual({ product });
    });
  });
});
