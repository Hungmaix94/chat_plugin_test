import { Modal, ModalBody } from 'reactstrap';
import Translate from 'app/shared/layout/Translation/translate';
import React from 'react';

interface IModalTooBigPhoto {
  toggleClose: () => void;
  isOpen?: boolean;
  max?: string | number;
}

const ModalTooBigPhoto: React.FC<IModalTooBigPhoto> = ({ toggleClose, isOpen, max }: IModalTooBigPhoto) => {
  const handleToggleClose = () => {
    toggleClose && toggleClose();
  };

  return (
    <Modal isOpen={!!isOpen} toggle={handleToggleClose} centered style={{ maxWidth: '800px', width: '100%' }}>
      <div className="modal-header">
        <Translate contentKey="modalTooBigPhoto.title" />
      </div>
      <ModalBody className="p-0">
        <Translate contentKey="global.messages.validate.tooBigImage" interpolate={{ max }} />
      </ModalBody>
    </Modal>
  );
};

export default ModalTooBigPhoto;
