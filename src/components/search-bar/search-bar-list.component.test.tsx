import React from 'react';
import { render } from '@testing-library/react';
import SearchBarListComponent from './search-bar-list.component';
import { mount, shallow } from 'enzyme';
import { IProduct } from '../../models/product';
import { BrowserRouter } from 'react-router-dom';

describe('search-bar-list.component.tsx', () => {
  const items: IProduct[] = [
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
    it('should render', () => {
      render(
        <BrowserRouter>
          <SearchBarListComponent products={items} />
        </BrowserRouter>
      );
    });
  });
  describe('Black box tests', () => {
    it('Should render list with products from prop', () => {
      const wrapper = mount(
        <BrowserRouter>
          <SearchBarListComponent products={items} />
        </BrowserRouter>
      );
      const searchList = wrapper.find(SearchBarListComponent)
      expect(searchList.props()).toStrictEqual({ products: items });
    });
    it('should have clickable list items', () => {
      const wrapper = shallow(<SearchBarListComponent products={items} />);
      const link = wrapper.find('[data-test="product-link"]');
      expect(link.exists()).toBe(true);
    });
  });
});
