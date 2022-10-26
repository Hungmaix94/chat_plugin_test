import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AvField } from 'availity-reactstrap-validation';
import { Button, InputGroup, InputGroupAddon } from 'reactstrap';
import { omit } from 'lodash';
import { translate } from 'app/shared/layout/Translation/translate';

export interface IPasswordInputProps {
  name: string;
  id: string;
}

export interface IPasswordInputState {
  showPassword: boolean;
}

const PasswordInput: FC<IPasswordInputProps> = ({ name, id, ...props }: IPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const buttonIcon = showPassword ? faEye : faEyeSlash;

  const handleSetShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <InputGroup>
      <div style={{ flex: '1 1 auto', width: '1%' }}>
        <AvField
          type={showPassword ? 'input' : 'password'}
          className="password"
          name={name}
          id={id}
          {...omit(props, ['type', 'label'])}
          errorMessage={translate('global.messages.validate.invalidField') || ''}
        />
        <InputGroupAddon addonType="append" className="password-append">
          <Button id={`${name}-button-show-password`} type="button" className="mb-3 button-eye-password" onClick={handleSetShowPassword}>
            <FontAwesomeIcon className="password-view-icon" icon={buttonIcon} />
          </Button>
        </InputGroupAddon>
      </div>
    </InputGroup>
  );
};

export default PasswordInput;
