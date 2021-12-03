import React from 'react';
import { Modal } from './modals.types';

export interface Props {
  visible: boolean;
  closeModal: (toggleModal: Modal) => void;
  name: Modal;
}

const ModalBaseComponent: React.FC<Props> = ({ children, visible, closeModal, name }) => {
  return (
    <>
      {visible && (
        <section className="modal" data-test="modal">
          <div className="modal__cta">
            <i className="uil uil-times-square" onClick={() => closeModal(name)} />
          </div>
          {children}
        </section>
      )}
    </>
  );
};

export default ModalBaseComponent;
