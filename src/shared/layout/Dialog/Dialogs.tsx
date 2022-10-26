import React, { FC } from 'react';
import BasicFormDialog from 'app/shared/layout/Dialog/BasicFormDialog';
import Translate, { translate } from 'app/shared/layout/Translation/translate';
import { Button, Label } from 'reactstrap';
import { AvField, AvGroup } from 'availity-reactstrap-validation';
import DatePickerWithMobile from 'app/shared/layout/DatePickerWithMobile/DatePickerWithMobile';
import { APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export const buttonGroup = (toggleClose, buttonCancelColor, buttonTranslate, buttonColor) => (
  <div className="mt-4 d-flex justify-content-center flex-gap-1">
    <Button id="dialog-cancel-button" color={buttonCancelColor} onClick={toggleClose} className="btn-default-size">
      <Translate contentKey="entity.action.cancel">Cancel</Translate>
    </Button>
    <Button id="dialog-submit-button" color={buttonColor} type="submit" className="btn-default-size">
      <Translate contentKey={buttonTranslate} />
    </Button>
  </div>
);

export const buttonGroupEnd = (toggleClose, buttonCancelColor, buttonTranslate, buttonColor) => (
  <div className="mt-4 d-flex justify-content-center flex-gap-1">
    <Button id="dialog-cancel-button" color={buttonCancelColor} onClick={toggleClose} className="btn-default-size">
      <Translate contentKey="entity.action.cancel">Cancel</Translate>
    </Button>
    <Button id="dialog-submit-button" color={buttonColor} type="submit" className="btn-default-size">
      <Translate contentKey={buttonTranslate} />
    </Button>
  </div>
);

export const renderDatePickerDialog = (
  translateTitleDialog,
  paramsTitleDialog,
  toggleClose,
  onValidSubmit,
  selected,
  onChangeDate,
  format,
  labelTranslate
) => (
  <BasicFormDialog
    toggleClose={toggleClose}
    onValidSubmit={onValidSubmit}
    childrenHeader={<Translate contentKey={translateTitleDialog} interpolate={paramsTitleDialog} />}
  >
    <DatePickerWithMobile
      name="paidDate"
      selected={selected}
      onChange={onChangeDate}
      dateFormat={format || APP_LOCAL_DATE_FORMAT}
      isClearable
      labelTranslate={labelTranslate}
      isRequired
      validate={{
        required: { value: true, errorMessage: translate('entity.validation.required') },
      }}
    />
    {buttonGroup(toggleClose, 'outline-dark', 'entity.action.accept', 'primary')}
  </BasicFormDialog>
);

export const renderAcceptDialog = (translateTitleDialog, paramsTitleDialog, toggleClose, onValidSubmit) => (
  <BasicFormDialog
    toggleClose={toggleClose}
    onValidSubmit={onValidSubmit}
    childrenHeader={<Translate contentKey={translateTitleDialog} interpolate={paramsTitleDialog} />}
  >
    {buttonGroup(toggleClose, 'outline-dark', 'entity.action.accept', 'primary')}
  </BasicFormDialog>
);

export const renderConfirmDialog = (translateQuestion, paramsDialog, toggleClose, onValidSubmit, translateTitle, buttonTranslateTitle) => (
  <BasicFormDialog toggleClose={toggleClose} onValidSubmit={onValidSubmit} childrenHeader={<Translate contentKey={translateTitle} />}>
    <Translate contentKey={translateQuestion} interpolate={paramsDialog} />
    {buttonGroup(toggleClose, 'second-type', buttonTranslateTitle, 'first-type')}
  </BasicFormDialog>
);

export const renderRejectDialog = (translateQuestionDialog, paramsQuestionDialog, toggleClose, onValidSubmit) => (
  <BasicFormDialog toggleClose={toggleClose} onValidSubmit={onValidSubmit} childrenHeader={<Translate contentKey={'entity.delete.title'} />}>
    <Translate contentKey={translateQuestionDialog} interpolate={paramsQuestionDialog} />
    {buttonGroup(toggleClose, 'primary', 'entity.action.delete', 'outline-danger')}
  </BasicFormDialog>
);

/**
 *
 * @param translateDeleteQuestion is string, dont forget it :D
 * @param paramsDeleteDialog
 * @param toggleClose
 * @param onValidSubmit
 */
export const renderConfirmDeleteDialog = (translateDeleteQuestion, paramsDeleteDialog, toggleClose, onValidSubmit) => (
  <BasicFormDialog toggleClose={toggleClose} onValidSubmit={onValidSubmit} childrenHeader={<Translate contentKey={'entity.delete.title'} />}>
    <div className="mb-auto">
      <div className="title content mt-5">
        <Translate contentKey={translateDeleteQuestion} interpolate={paramsDeleteDialog} />
      </div>
    </div>
    {buttonGroup(toggleClose, 'first-type', 'entity.action.delete', 'second-type')}
  </BasicFormDialog>
);

interface IConfirmDeactivateDialog {
  translateDeleteQuestion: string;
  translateSecondText?: string;
  paramsDeleteDialog?: any;
  toggleClose: () => void;
  onValidSubmit: () => void;
  isOpen?: boolean;
}
export const ConfirmDeactivateDialog:FC<IConfirmDeactivateDialog> = (
  {
    isOpen = true, paramsDeleteDialog, toggleClose, translateDeleteQuestion, onValidSubmit, translateSecondText
  }: IConfirmDeactivateDialog) =>
  <BasicFormDialog isOpen={isOpen} toggleClose={toggleClose} onValidSubmit={onValidSubmit} childrenHeader={<Translate contentKey={'entity.deactive.title'} />}>
    <div className="mt-2">
      <Translate contentKey={translateDeleteQuestion} interpolate={paramsDeleteDialog} />
      {translateSecondText && <Translate className="d-block" contentKey={translateSecondText} />}
    </div>
    {buttonGroup(toggleClose, 'first-type', 'entity.action.disable', 'only-border')}
  </BasicFormDialog>;

export const renderRejectReasonDialog = (
  translateTitleDialog,
  paramsTitleDialog,
  toggleClose,
  onValidSubmit,
  rejectValue,
  onChangeRejectValue
) => (
  <BasicFormDialog
    toggleClose={toggleClose}
    onValidSubmit={onValidSubmit}
    childrenHeader={<Translate contentKey={translateTitleDialog} interpolate={paramsTitleDialog} />}
  >
    <AvGroup>
      <Label for="reject-reason" className="has-float-label">
        <Translate contentKey="entity.delete.rejectedReason" />
      </Label>
      <AvField
        type="text"
        name="reject-reason"
        id="reject-reason"
        value={rejectValue}
        onChange={onChangeRejectValue}
        validate={{
          required: { value: true, errorMessage: translate('entity.validation.required') },
          maxLength: { value: 500, errorMessage: translate('entity.validation.maxlength', { max: 500 }) },
        }}
      />
    </AvGroup>
    {buttonGroup(toggleClose, 'primary', 'entity.action.reject', 'outline-danger')}
  </BasicFormDialog>
);

export const renderInputDialog = (translateTitleDialog, paramsTitleDialog, toggleClose, onValidSubmit, inputValue, onChangeValue) => (
  <BasicFormDialog
    toggleClose={toggleClose}
    onValidSubmit={onValidSubmit}
    childrenHeader={<Translate contentKey={translateTitleDialog} interpolate={paramsTitleDialog} />}
  >
    <AvGroup>
      <Label for="content" className="has-float-label">
        <Translate contentKey="entity.send.title" />
      </Label>
      <AvField
        type="textarea"
        name="content"
        id="content"
        value={inputValue}
        onChange={onChangeValue}
        validate={{
          required: { value: true, errorMessage: translate('entity.validation.required') },
          maxLength: { value: 500, errorMessage: translate('entity.validation.maxlength', { max: 500 }) },
        }}
      />
    </AvGroup>
    {buttonGroup(toggleClose, 'primary', 'entity.action.send', 'outline-danger')}
  </BasicFormDialog>
);
