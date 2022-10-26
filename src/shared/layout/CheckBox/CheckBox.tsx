import React from 'react';
import { translate } from 'app/shared/layout/Translation/translate';
import { AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import RequiredAsterisk from 'app/shared/layout/RequiredAsterisk';
import { Label } from 'reactstrap';

export default function CheckBox(field) {
  return (
    <AvGroup check className={`custom-checkbox ${field.avGroupClassName}`}>
      <AvInput
        onChange={field.onChange}
        value={field.value}
        id={field.id}
        className="custom-control-input"
        disabled={field.readOnly}
        type="checkbox"
        name={field.name}
        checked={field.value}
        required={field.isRequired}
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
