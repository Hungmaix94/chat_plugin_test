import React, { FC, ReactNode } from 'react';
import './CustomBadge.scss';

interface ICustomBadge {
  children: ReactNode;
  color: 'primary' | 'secondary';
}

const CustomBadge: FC<ICustomBadge> = ({ children, color }: ICustomBadge) => {
  const classNameCustomBadge = `custom-badge ${color}`;

  return <div className={classNameCustomBadge}>{children}</div>;
};

export default CustomBadge;
