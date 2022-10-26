import React from 'react';
import { AvForm } from 'availity-reactstrap-validation';
import { Modal, ModalBody } from 'reactstrap';

export interface IBasicFormDialogProps {
  toggleClose: () => void;
  onValidSubmit: (event, values) => void;
  childrenHeader: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
}

export const BasicFormDialog: React.FC<IBasicFormDialogProps> = ({
  toggleClose,
  onValidSubmit,
  childrenHeader,
  children,
  isOpen = true
}: IBasicFormDialogProps) => {
  return (
    <Modal isOpen={isOpen} toggle={toggleClose} style={{ maxWidth: '800px', width: '100%' }} centered>
      <div className="modal-header">{childrenHeader}</div>
      <ModalBody className="p-0">
        <AvForm onValidSubmit={onValidSubmit}>{children}</AvForm>
      </ModalBody>
    </Modal>
  );
};

export default BasicFormDialog;
