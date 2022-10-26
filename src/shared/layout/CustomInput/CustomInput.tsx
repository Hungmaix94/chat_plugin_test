import React from 'react';
import { AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Label, Progress } from 'reactstrap';
import RequiredAsterisk from '../RequiredAsterisk';
import { parsePhoneNumberFromString } from 'libphonenumber-js/max';

import { translate } from 'app/shared/layout/Translation/translate';
import './styles/CustomInput.scss';
import PasswordInput from 'app/shared/layout/CustomInput/Components/PasswordInput';
import { omit } from 'lodash';
import { CustomSelect } from "app/shared/layout/CustomInput/Components/CustomSelect";

export const validateInvalidField = translate('global.messages.validate.invalidField') || 'This field is invalid';

export interface ICustomInputProps {
  type: string;
  name: string;
  label?: JSX.Element;
  avGroupClassName?: string;
  readOnly?: symbol;
  children?: React.ReactNode;
  setIsValid?: () => void;
  appendText?: React.ReactNode | string;
  textareaLengthMax?: number;
}

export interface ICustomInputState {
  value: string;
  phoneNumberValidationMessage?: string;
  textareaLength?: number;
}

class CustomInput extends React.Component<ICustomInputProps & any, ICustomInputState> {
  state = {
    value: '',
    phoneNumberValidationMessage: '',
    textareaLength: 0,
  };

  validatePhoneNumber = value => {
    if (value === '' || value === null) return true;

    const phoneNumber = parsePhoneNumberFromString(value);
    const validation = !(!phoneNumber || !phoneNumber.isValid() || !phoneNumber.country);
    if (this.props.setIsValid) this.props.setIsValid(validation);
    return validation ? true : translate('error.invalidPhoneNumber');
  };

  onPhoneNumberChange = e => {
    this.setState({
      value: e.target.value,
    });

    if (typeof this.props.onChange === 'function') this.props.onChange(e);
  };

  getPhoneNumberInternationalFormat = phoneNumber => {
    const parseMobilePhone = parsePhoneNumberFromString(phoneNumber);

    if (parseMobilePhone && parseMobilePhone.isValid()) {
      return parseMobilePhone.formatInternational();
    }
    return phoneNumber;
  };

  onPhoneNumberBlur = e => {
    const value = e.target.value;
    const phoneNumber = parsePhoneNumberFromString(value);

    if (phoneNumber && phoneNumber.isValid) {
      const internationalValue = phoneNumber.formatInternational();
      this.setState({ value: internationalValue });

      if (typeof this.props.onChange === 'function') {
        const fakeEvent = {
          ...e,
          target: {
            ...e.target,
            name: e.target.name,
            value: internationalValue,
          },
        };
        this.props.onChange(fakeEvent);
      }
    }
    if (typeof this.props.onBlur === 'function') this.props.onBlur(e);
  };

  validateLogin = loginValue => {
    if (loginValue === '' || loginValue === null) return true;
    const validation = loginValue && !(loginValue.indexOf(' ') >= 0);
    if (this.props.setIsValid) this.props.setIsValid(validation);
    return validation ? true : translate('error.invalidLogin');
  };

  onLoginChange = e => {
    this.setState({
      value: e.target.value,
    });

    if (typeof this.props.onChange === 'function') this.props.onChange(e);
  };

  onLoginBlur = e => {
    const loginValue = e.target.value;

    if (loginValue && loginValue.isValid) {
      this.setState({ value: loginValue });

      if (typeof this.props.onChange === 'function') {
        const fakeEvent = {
          ...e,
          target: {
            ...e.target,
            name: e.target.name,
            value: loginValue,
          },
        };
        this.props.onChange(fakeEvent);
      }
    }
    if (typeof this.props.onBlur === 'function') this.props.onBlur(e);
  };

  onEnumKeyPress = e => {
    if (!/[a-zA-Z0-9_*()+-]/i.test(e.key)) e.preventDefault();
    else if (typeof this.props.onKeyPress === 'function') this.props.onKeyPress(e);
  };

  onEnumKeyChange = e => {
    const parsedValue = e.target.value.replace(/[^a-zA-Z0-9_*()+-]/g, '');
    this.setState({ value: parsedValue });

    if (typeof this.props.onChange !== 'function') return;

    const fakeEvent = {
      ...e,
      target: {
        ...e.target,
        name: e.target.name,
        value: parsedValue,
      },
    };
    this.props.onChange(fakeEvent);
  };

  renderBasicInput = ({ type, name, label, readOnly, ...props }) => (
    <AvField
      type={type}
      name={name}
      disabled={readOnly}
      readOnly={readOnly}
      {...omit(props, ['children', 'childrenLabel', 'customLabelClassName'])}
      errorMessage={validateInvalidField}
      {...(this.props.textareaLengthMax && { onChange: this.onChangeTextLengthReason })}
    />
  );

  renderCurrencyInput = ({ type, name, label, ...props }) => (
    <AvField
      type={type}
      name={name}
      {...props}
      pattern={'^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$'}
      errorMessage={validateInvalidField}
    />
  );

  onChangeTextLengthReason = event => {
    const text = event.target.value;
    this.setState({ textareaLength: text?.length || 0 });
  };

  filterFunction = (input, treeNode) => {
    const compare1 = treeNode.props.title.toLowerCase();
    const compare2 = input.toLowerCase();
    return compare1.includes(compare2);
  };

  renderPhoneInput = ({ type, name, value, onChange, label, validate, readOnly, onBlur, ...props }) => (
    <AvField
      type="text"
      value={this.getPhoneNumberInternationalFormat(value || this.state.value)}
      name={name}
      readOnly={readOnly}
      disabled={readOnly}
      {...(!readOnly && {
        validate: {
          ...(validate || {}),
          async: (validate || {}).async || this.validatePhoneNumber,
        },
      })}
      onChange={this.onPhoneNumberChange}
      onBlur={this.onPhoneNumberBlur}
      errorMessage={validateInvalidField}
      {...props}
    />
  );

  renderLoginInput = ({ type, name, label, readOnly, validate, ...props }) => (
    <AvField
      type="text"
      name={name}
      disabled={readOnly}
      readOnly={readOnly}
      {...(!readOnly && {
        validate: {
          ...(validate || {}),
          async: (validate || {}).async || this.validateLogin,
        },
      })}
      onChange={this.onLoginChange}
      onBlur={this.onLoginBlur}
      errorMessage={validateInvalidField}
      {...props}
    />
  );

  onPhoneNumberChangeValidate = status => {
    this.setState({
      phoneNumberValidationMessage: status.friendlyMessage,
    });
    this.props.onChange(status.intlPhoneNumber);
  };

  renderPasswordInput = ({ name, id, ...props }) => <PasswordInput name={name} id={id || `${name}-input`} {...props} />;

  renderPinInput = ({ name, type, ...props }) => <AvField type="password" name={name} {...props} errorMessage={validateInvalidField} />;

  renderRadioButton = ({ name, type, value = false, ...props }) => <AvInput type="radio" name={name} value={value.toString()} {...props} />;

  renderEnumKeyInput = ({ type, label, value, onKeyPress, readOnly, placeholder, onChange, ...props }) => (
    <AvField
      type="text"
      value={value || this.state.value}
      onKeyPress={this.onEnumKeyPress}
      onChange={this.onEnumKeyChange}
      disabled={readOnly}
      readOnly={readOnly}
      placeholder={placeholder || translate('entity.placeholder.enumKey')}
      errorMessage={validateInvalidField}
      {...props}
    />
  );

  renderImageUploadInput = ({
    type,
    label,
    src,
    progress,
    onChange,
    name,
    id,
    accept,
    disabled,
    onLoad,
    value,
    validate,
    multiple = false,
    ...props
  }) => (
    <div className="file-container">
      {typeof progress === 'number' ? (
        <div className="bg-light p-3">
          <Progress max="100" color="success" value={progress}/>
        </div>
      ) : (
        src && <img alt="uploadImage" src={src} style={{ width: '100%' }} {...{ onLoad, ...props }} />
      )}
      <input
        type="file"
        disabled={disabled || typeof progress === 'number'}
        name={name}
        id={id || `${name}-input`}
        accept={accept || 'image/svg, image/png, image/jpeg'}
        onChange={onChange}
        className="cover-parent hand d-none"
        style={{ opacity: 0 }}
        multiple={multiple}
      />
      <AvField
        errorMessage={translate('global.messages.validate.invalidField') || 'This field is invalid'}
        type="hidden"
        name={name}
        value={value ? value : ''}
        validate={validate}
      />
    </div>
  );

  renderInputType = props => {
    switch (props.type) {
      case 'image':
        return this.renderImageUploadInput(props);
      case 'select':
        return <CustomSelect {...props}/>;
      case 'phone':
        return this.renderPhoneInput(props);
      case 'enumKey':
        return this.renderEnumKeyInput(props);
      case 'password':
        return this.renderPasswordInput(props);
      case 'pin':
        return this.renderPinInput(props);
      case 'currency':
        return this.renderCurrencyInput(props);
      case 'radio':
        return this.renderRadioButton(props);
      case 'login':
        return this.renderLoginInput(props);
      default:
        return this.renderBasicInput(props);
    }
  };

  render() {
    const {
      type,
      label,
      name,
      avGroupClassName = '',
      readOnly,
      children,
      childrenLabel,
      customLabelClassName = '',
      appendText = '',
      textareaLengthMax,
    } = this.props;
    const omitProps = readOnly
      ? ['validate', 'avGroupClassName', 'setIsValid', 'appendText', 'textareaLengthMax']
      : ['avGroupClassName', 'setIsValid', 'appendText', 'textareaLengthMax'];
    const labelClassName = `${type === 'checkbox' ? 'label-checkbox' : ''} ${type === 'radio' ? 'form-check-label' : ''}`;
    const radioClass = type === 'radio' ? 'form-check form-check-inline' : '';
    const avGroupClassNames = `${avGroupClassName} ${readOnly ? 'disabled custom-input' : 'custom-input'} ${radioClass}`;

    return (
      <AvGroup className={avGroupClassNames}>
        {type !== 'hidden' && type !== 'radio' && label && (
          <Label for={name} className={`${labelClassName} ${customLabelClassName}`}>
            {label}
            {type !== 'image' && !readOnly && (this.props.required || (this.props.validate && this.props.validate.required && !this.props.hiddenRequired)) && (
              <RequiredAsterisk />
            )}
            {childrenLabel}
          </Label>
        )}
        {appendText || textareaLengthMax ? (
          <div className={`input-wrapper-with-append ${textareaLengthMax ? 'textarea-text' : ''}`}>
            {this.renderInputType(omit(this.props, omitProps))}
            {textareaLengthMax && this.state.textareaLength > 0 && (
              <div className="textarea-length">
                {this.state.textareaLength}/{textareaLengthMax}
              </div>
            )}
            {appendText && <div className="input-append-text">{appendText}</div>}
          </div>
        ) : (
          this.renderInputType(omit(this.props, omitProps))
        )}
        {type !== 'hidden' && type === 'radio' && label && (
          <Label for={name} className={labelClassName}>
            {label}
            {!readOnly && (this.props.required || (this.props.validate && this.props.validate.required)) && <RequiredAsterisk />}
          </Label>
        )}
        {children}
      </AvGroup>
    );
  }
}

export default CustomInput;
