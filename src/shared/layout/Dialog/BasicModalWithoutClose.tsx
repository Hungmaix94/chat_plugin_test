import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import './BasicModalWithoutClose.scss';

interface IBasicModalWithoutCloseProps {
  isOpen?: boolean;
  focusAfterClose?: boolean;
  children?: React.ReactNode;
  toggleClose?: any;
}

export const BasicModalWithoutClose: React.FC<IBasicModalWithoutCloseProps> = ({
  isOpen,
  children,
  toggleClose,
}: IBasicModalWithoutCloseProps) => {
  return (
    <Modal isOpen={isOpen} toggle={toggleClose}>
      <ModalBody className="basic-modal-without-close">{children}</ModalBody>
    </Modal>
  );
};
