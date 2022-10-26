import React, { FC, useEffect, useMemo, useState } from 'react';
import Translate from 'app/shared/layout/Translation/translate';

import { validatePassword } from 'app/shared/util/password-util';

export interface IPasswordValidationChecksProps {
  password: string;
  minLength: number;
  maxLength: number;
}

export interface IPasswordValidationChecksState {
  lowerLetters: boolean;
  upperLetters: boolean;
  numbers: boolean;
  symbols: boolean;
  passwordLength: boolean;
  diacritic: boolean;
}

const PasswordValidationChecks: FC<IPasswordValidationChecksProps> = (
  {
    password,
    minLength = -9999,
    maxLength = 9999,
  }: IPasswordValidationChecksProps) => {
  const [passwordDetails, setPasswordDetails] = useState<IPasswordValidationChecksState>(validatePassword(password, minLength, maxLength));
  const isInvalid = useMemo(
    () =>
      !passwordDetails.lowerLetters ||
      !passwordDetails.upperLetters ||
      !passwordDetails.numbers ||
      !passwordDetails.symbols ||
      !passwordDetails.diacritic,
    [passwordDetails]
  );
  useEffect(() => {
    setPasswordDetails(validatePassword(password, minLength, maxLength));
  }, [password]);
  const validateArray = [
    { isInvalid: !passwordDetails.lowerLetters, translate: 'lowercase' },
    { isInvalid: !passwordDetails.upperLetters, translate: 'uppercase' },
    { isInvalid: !passwordDetails.numbers, translate: 'number' },
    { isInvalid: !passwordDetails.symbols, translate: 'symbol' },
  ].filter(item => item.isInvalid);

  const returnValidateItems = () => validateArray?.map((item, index) =>
    <div key={index} className="d-inline">
      <Translate contentKey={`global.messages.validate.newpassword.${item.translate}`}/>{(validateArray.length !== index + 1) && ','}
    </div>
  );

  return (
    <div className="size-12">
      {!passwordDetails.passwordLength && <Translate contentKey="global.messages.validate.newpassword.length"/>}
      {!passwordDetails.diacritic && <Translate contentKey="global.messages.validate.newpassword.diacritic"/>}
      {isInvalid && <Translate contentKey="global.messages.validate.newpassword.atLeast1"/>}
      {
        returnValidateItems()
      }
    </div>
  );
};

export default PasswordValidationChecks;
