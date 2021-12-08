import React, { useEffect } from 'react';
import { Modal } from './modals.types';
import './modal-base.styles.scss';

export interface Props {
  visible: boolean;
  closeModal: (toggleModal: Modal) => void;
  name: Modal;
}

const ModalBaseComponent: React.FC<Props> = ({ children, visible, closeModal, name }) => {
  useEffect(() => {
    const bodyEl = document.querySelector<HTMLBodyElement>('body');
    bodyEl?.classList.toggle('no-scroll');
  }, [visible]);
  return (
    <>
      {visible && (
        <section className="modal" data-test="modal" onClick={() => closeModal(name)}>
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
