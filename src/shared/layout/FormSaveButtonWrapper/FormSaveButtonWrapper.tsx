import { Button } from 'reactstrap';
import Translate from 'app/shared/layout/Translation/translate';
import ButtonLoading from 'app/shared/layout/ButtonLoading/ButtonLoading';
import React, { FC } from 'react';
import './FormSaveButtonWrapper.scss';

interface IFormSaveButtonWrapper {
  readOnly?: boolean;
  onClickCancel: () => void;
  updating?: boolean;
  id?: string | number;
  onClickEdit?: () => void;
  onlyOneSave?: boolean;
}

const FormSaveButtonWrapper: FC<IFormSaveButtonWrapper> = ({ readOnly, onClickCancel, onlyOneSave, id, updating, onClickEdit }) => {
  return (
    <div className="form-save-button-wrapper">
      {!readOnly && (
        <Button type="button" color="only-border" onClick={onClickCancel}>
          <Translate contentKey="entity.action.cancel" />
        </Button>
      )}
      {!id && !onlyOneSave && (
        <ButtonLoading updating={updating} disabled={updating} text="entity.action.saveAndContinue" id="saveAndContinue" />
      )}
      {!readOnly && <ButtonLoading updating={updating} disabled={updating} text="entity.action.save" id="save" />}
      {readOnly && (
        <Button type="button" className="ml-auto" color="only-border" onClick={onClickEdit}>
          <Translate contentKey="entity.action.edit" />
        </Button>
      )}
    </div>
  );
};

export default FormSaveButtonWrapper;
