import { Label } from 'reactstrap';
import RequiredAsterisk from 'app/shared/layout/RequiredAsterisk';
import { translate } from 'app/shared/layout/Translation/translate';
import React from 'react';
import { AvCheckbox, AvCheckboxGroup, AvField, AvGroup, AvInput, AvRadio, AvRadioGroup } from 'availity-reactstrap-validation';
import './Checkboxes.scss';
import CustomInput from 'app/shared/layout/CustomInput/CustomInput';
import { MIN, onChangePositiveInput, REQUIRED } from 'app/shared/util/validation';

export function renderCheckbox(field) {
  return (
    <AvGroup check className={`custom-checkbox ${field.avGroupClassName || ''}`}>
      <AvInput
        onChange={field.onChange}
        value={field.value}
        id={field.id}
        className="custom-control-input"
        disabled={field.readOnly}
        readOnly={field.readOnly}
        type="checkbox"
        name={field.name}
        checked={field.value}
      />
      <Label for={field.name} check className="custom-control-label label-with-tooltip">
        <div className="d-flex">
          {field.label} {field.isRequired && !field.hiddenRequiredLabel && <RequiredAsterisk />}
        </div>
        {field.withTooltip && (
          <div className="tooltip-for-label bs-tooltip-bottom">
            <div className="tooltip-inner">{field.tooltipText}</div>
            <span className="arrow" />
          </div>
        )}
      </Label>
      {field.isRequired && (
        <AvField
          errorMessage={translate('global.messages.validate.invalidField') || 'This field is invalid'}
          type="hidden"
          name={'required'}
          value={field.value ? field.value : ''}
          validate={field.validate}
        />
      )}
    </AvGroup>
  );
}

interface ICheckboxGroup {
  name: string;
  isRequired?: boolean;
  label?: string | React.ReactNode;
  checkboxes?: ICheckbox[];
  readOnly?: boolean;
  className?: string;
  customLabelClassName?: string;
  customGroupCheckbox?: string;
  value?: any;
  isInline?: boolean;
  labelContentKey?: string;
  onValueChange?: (env) => void;
  validate?: any;
}

interface ICheckbox {
  label: string | React.ReactNode;
  value: string | number;
}

export const renderCheckboxGroup = ({ name, readOnly, checkboxes = [], isInline, label, value }: ICheckboxGroup) => {
  return (
    <div className={'custom-input'}>
      {label && <Label for={name}>{label}</Label>}
      <AvCheckboxGroup name={name} className="custom-checkbox-group" inline={isInline}>
        {checkboxes.map((item, i) => (
          <AvCheckbox disabled={readOnly} customInput key={i} label={item.label} value={item.value} />
        ))}
      </AvCheckboxGroup>
    </div>
  );
};

export const renderCheckboxGroupCustom = ({
  name,
  readOnly,
  checkboxes = [],
  label,
  className = '',
  customLabelClassName = '',
  customGroupCheckbox = '',
}: ICheckboxGroup) => {
  return (
    <div className={`custom-input ${customGroupCheckbox}`}>
      {label && (
        <Label for={name} className={customLabelClassName}>
          {label}
        </Label>
      )}
      <div className={className}>
        {checkboxes.map((item, i) => {
          return (
            <div className={'mr-2'} key={i}>
              {renderCheckbox(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const renderRadioGroup = ({
  name,
  checkboxes = [],
  isRequired,
  readOnly,
  className = '',
  isInline,
  label,
  value,
  onValueChange = event => {},
  validate,
}: ICheckboxGroup) => (
  <>
    {label && (
      <Label for={name} className="checkbox-label">
        {label}
        {!readOnly && isRequired && <RequiredAsterisk />}
      </Label>
    )}
    <AvRadioGroup
      name={name}
      required={isRequired}
      className={`custom-checkbox-group ${className} ${readOnly ? 'disabled' : ''}`}
      inline={isInline}
      onChange={onValueChange}
      value={value}
      validate={validate}
    >
      {checkboxes.map((item, i) => (
        <AvRadio checked={i === 0} customInput key={i} disabled={readOnly} label={item.label} value={item.value} />
      ))}
    </AvRadioGroup>
  </>
);

export const renderCheckboxGroupWithInputs = ({ name, readOnly, checkboxes = [] }: ICheckboxGroup) => (
  <AvCheckboxGroup name={name} className="custom-checkbox-group">
    {checkboxes.map((item, i) => (
      <div key={i} className="checkbox-with-input-wrapper">
        <AvCheckbox disabled={readOnly} readOnly customInput label={item.label} value={item.value} />
        <CustomInput
          readOnly={readOnly}
          name={`offerDeviceAccessories[${i}].quantity`}
          id={`offerDeviceAccessories[${i}].quantity`}
          validate={{
            ...REQUIRED(),
            ...MIN(0),
          }}
          onKeyPress={onChangePositiveInput}
          appendText={'item'}
        />
        <CustomInput
          readOnly={readOnly}
          name={`offerDeviceAccessories[${i}].amount`}
          id={`offerDeviceAccessories[${i}].amount`}
          validate={{
            ...REQUIRED(),
            ...MIN(0),
          }}
          onKeyPress={onChangePositiveInput}
          appendText={'net'}
        />
      </div>
    ))}
  </AvCheckboxGroup>
);

export const renderRadioGroupColumn = ({
  name,
  checkboxes = [],
  isRequired,
  readOnly,
  className = '',
  labelContentKey = '',
}: ICheckboxGroup) => (
  <AvRadioGroup name={name} required={isRequired} className={`custom-checkbox-group ${className} inline`}>
    <div className="col">{labelContentKey}</div>
    {checkboxes.map((item, i) => (
      <div className="col" key={i}>
        <AvRadio customInput disabled={readOnly} label={item.label} value={item.value} />
      </div>
    ))}
  </AvRadioGroup>
);
