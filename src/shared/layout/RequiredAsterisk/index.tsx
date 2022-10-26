import React from 'react';

interface IRequiredAsterisk {
  className?: string;
}

const RequiredAsterisk = ({ className }: IRequiredAsterisk) => <span className={`required-asterisk ${className}`}>*</span>;

export default RequiredAsterisk;
