import React from 'react';
import BaseModal, { Props as IBaseModal } from './modalbase.component';

export interface Props extends IBaseModal {}

const UserModalComponent: React.FC<Props> = ({ visible, closeModal, name }) => {
  return (
    <BaseModal visible={visible} closeModal={closeModal} name={name}>
      <section className="user-modal" data-test="user-modal"></section>
    </BaseModal>
  );
};

export default UserModalComponent;
