import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from './pages/landing.page';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App.tsx', () => {
  describe('Smoke Test', () => {
    it('should render app.tsx', () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    });

    it('should render landing page', () => {
      const wrapper = mount(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const landingPage = wrapper.find(LandingPage);
      expect(landingPage.exists()).toBe(true);
    });
  });
});
