import { render } from '@testing-library/react';
import SearchBarComponent from './search-bar.component';
import SearchBarListComponent from './search-bar-list.component.tsx';
import React from 'react';
import { shallow } from 'enzyme';

describe("search-bar.component.tsx",() => {
  describe("Smoke tests",() => {
    it("Should render Search Bar component",() => {
      render(<SearchBarComponent/>)
    })
    it("Should render SearchList Component",() => {
      const wrapper = shallow(<SearchBarComponent />);
      const searchBarListComponent = wrapper.find(SearchBarListComponent);
      expect(searchBarListComponent.exists()).toBe(true);
    })
  })
})