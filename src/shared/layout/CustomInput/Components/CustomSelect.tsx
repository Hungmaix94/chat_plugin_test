import React, { FC, useRef } from "react";
import Select, { ActionMeta, components } from "react-select";
import { translate } from "app/shared/layout/Translation/translate";
import { validateInvalidField } from "app/shared/layout/CustomInput/CustomInput";
import { IDefaultField } from "app/shared/layout/FormGenerator/FormGenerator";
import { AvField } from 'availity-reactstrap-validation';
import { Translate } from "react-jhipster";

interface ICustomSelect extends IDefaultField {
  isMulti?: boolean;
  placeholder?: any;
  className?: string;
  disableClassPrefix?: boolean;
  onChange?: (newValue: any, actionMeta: ActionMeta<any>) => void;
}

export const CustomSelect: FC<ICustomSelect> = (
  {
    type,
    name,
    id = '',
    label,
    placeholder,
    readOnly = false,
    className = '',
    validate = null,
    options = null,
    disableClassPrefix,
    ...otherProps
  }: ICustomSelect) => {
  const selectRef = useRef(null);
  const childrenFormClassName = selectRef?.current?.children?.[1]?.children?.[0]?.className;
  const isError = (childrenFormClassName || '').includes('is-invalid') && !selectRef?.current?.children?.[1]?.children?.[0]?.value;

  const SelectOption = props => {
    const newProps = { ...props };
    newProps.innerProps.id = `select-${newProps.selectProps.id}-option-${newProps.value}`;
    return <components.Option {...newProps} />;
  };

  const NoOptions = <Translate contentKey="entity.placeholder.noOptions"/>
  const NoResultsFound = <Translate contentKey="entity.placeholder.noResultsFound"/>

  return (
    <div ref={selectRef}>
      <Select
        className={`react-select ${className} ${isError ? 'is-invalid' : ''}`}
        classNamePrefix={disableClassPrefix ? '' : 'react-select'}
        options={options}
        id={id || `${name}-select`}
        placeholder={placeholder || translate('entity.placeholder.select')}
        isDisabled={readOnly}
        components={{ Option: SelectOption }}
        name={name}
        isSearchable
        noOptionsMessage={({ inputValue }) => !inputValue ? NoOptions : NoResultsFound}
        {...otherProps}
      />
      {otherProps.isMulti ? (
        <AvField
          errorMessage={validateInvalidField}
          type="select"
          style={{ display: 'none' }}
          name={name}
          className="form-control"
          multiple
          value={otherProps.value?.length ? otherProps.value.map(value => value.value) : []}
          validate={validate}
        />
      ) : (
        <AvField
          errorMessage={validateInvalidField}
          type="hidden"
          name={name}
          value={otherProps?.value?.value ? otherProps.value.value : otherProps?.value}
          validate={validate}
        />
      )}
    </div>
  );
}
