import { act, render } from '@testing-library/react';
import SearchBarComponent from './search-bar.component';
import SearchBarListComponent from './search-bar-list.component';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { IProduct } from '../../models/product';
import { BrowserRouter } from 'react-router-dom';

describe('search-bar.component.tsx', () => {
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
    it('Should render Search Bar component', () => {
      render(
        <BrowserRouter>
          <SearchBarComponent products={items} />
        </BrowserRouter>
      );
    });
    it('Should render SearchList Component', () => {
      const wrapper = mount(
        <BrowserRouter>
          <SearchBarComponent products={items} />
        </BrowserRouter>
      );

      const searchInput = wrapper.find('[data-test="search-input"]');
      searchInput.simulate('change', { target: { value: 'nam' } });
      const searchBarListComponent = wrapper.find(SearchBarListComponent);

      expect(searchBarListComponent.exists()).toBe(true);
    });
  });
  describe('Black box tests', () => {
    it('Should have a text input element for searching', () => {
      const wrapper = shallow(<SearchBarComponent products={items} />);
      const searchInput = wrapper.find('[data-test="search-input"]');
      expect(searchInput.exists()).toBe(true);
    });

    it('Should filter products prop array from search string', async () => {
      const newArr = [
        ...items,
        {
          description: 'hello2',
          img: 'img2',
          price: 23,
          name: 'grillkorv',
          product_id: '11',
          shortDescription: 'a short description',
        },
      ];
      const wrapper = mount(
        <BrowserRouter>
          <SearchBarComponent products={newArr} />
        </BrowserRouter>
      );
      const searchBarInput = wrapper.find('[data-test="search-input"]');
      searchBarInput.simulate('change', { target: { value: 'grill' } });
      const searchBarListComponent = wrapper.find(SearchBarListComponent);
      expect(searchBarListComponent.props()).toStrictEqual({ products: [{ ...newArr[1] }] });
    });
  });

  describe('White box tests', () => {
    it('Should receive products as a prop', () => {
      const wrapper = mount(
        <BrowserRouter>
          <SearchBarComponent products={items} />
        </BrowserRouter>
      );
      const searchBarComponent = wrapper.find(SearchBarComponent);
      expect(searchBarComponent.props()).toStrictEqual({ products: items });
    });
  });
});
