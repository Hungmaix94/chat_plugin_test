import React, { FC } from 'react';
import { Col, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import Translate from 'app/shared/layout/Translation/translate';

export interface IDynamicColumnTableConfigDialogProps {
  onCheckboxValueChanged: (colId: string, value: number) => void;
  onClose: () => void;
  columnsVisibility: any;
  i18nGroupName: string;
  isOpen: boolean;
  i18nGroupPrefix?: string;
}

const DynamicColumnTableConfigDialog: FC<IDynamicColumnTableConfigDialogProps> = ({
  onClose,
  onCheckboxValueChanged,
  isOpen,
  columnsVisibility,
  i18nGroupPrefix,
  i18nGroupName,
}: IDynamicColumnTableConfigDialogProps) => {
  const translatePrefix = i18nGroupPrefix ? i18nGroupPrefix : `${i18nGroupName}`;

  const handleClose = (event: any) => {
    event.stopPropagation();
    onClose();
  };

  const onCheckboxChanged = (event: any) => {
    const name = event.target?.name;
    const value = event.target?.checked;
    onCheckboxValueChanged(name, value);
  };

  return (
    <Modal isOpen={isOpen} toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey={`entity.config.title`} />
      </ModalHeader>
      <ModalBody>
        <form>
          <Row
            style={{
              background: 'repeating-linear-gradient(180deg, #f8f9fa, #f8f9fa 24px, transparent 24px, transparent 48px)',
            }}
          >
            {Object.keys(columnsVisibility).map(
              key =>
                key && (
                  <Col xs={6} sm={4} key={key}>
                    <FormGroup check>
                      <Label check className="d-block text-truncate">
                        <Input
                          id={`${key}-table-config`}
                          type="checkbox"
                          name={key}
                          checked={columnsVisibility[key]}
                          onChange={onCheckboxChanged}
                        />
                        <Translate
                          contentKey={key === 'itemTranslation' ? 'translateDictItem.itemTranslation' : `${translatePrefix}.${key}`}
                        />
                      </Label>
                    </FormGroup>
                  </Col>
                )
            )}
          </Row>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default DynamicColumnTableConfigDialog;
