import react from 'react';
import { render } from '@testing-library/react';
import CartModalComponent, { Props } from './cart-modal.component';
import CartCardComponent from '../cards/cart-card.component';
import { Modal } from './modals.types';

describe('cart-modal.component.tsx', () => {
  const props: Props = {
    closeModal: () => {},
    visible: false,
    name: Modal.CART_MODAL,
  };
  describe('Smoke tests', () => {
    it('should render cart-modal component', () => {
      render(<CartModalComponent {...props} />);
    });
    it('should render cart card component', () => {
      render(<CartCardComponent />);
    });
  });
  describe('Black box tests', () => {
    it('should ');
  });
});
