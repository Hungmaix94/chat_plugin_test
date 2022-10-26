import React from 'react';
import { Modal, ModalHeader } from 'reactstrap';

export interface IBasicDialogProps {
  toggleClose: any;
  childrenHeader?: React.ReactNode;
  children: React.ReactNode;
  classNames?: string;
  headerClass?: any;
  style?: any;
  modalProps?: any;
  isOpen?: boolean;
}

export const BasicDialog: React.FC<IBasicDialogProps> = ({
  toggleClose,
  childrenHeader,
  children,
  classNames,
  headerClass,
  modalProps,
  isOpen = true,
}: IBasicDialogProps) => {
  return (
    <Modal centered isOpen={isOpen} toggle={toggleClose} className={classNames} wrapClassName="modal-center modal-wrapper" {...modalProps}>
      <ModalHeader className={headerClass}>{childrenHeader}</ModalHeader>
      {children}
    </Modal>
  );
};

export default BasicDialog;
