import React, { FC } from 'react';
import Translate from 'app/shared/layout/Translation/translate';
import './PageHeader.scss';

interface IPageHeader {
  titleContentKey: string;
  className?: string;
}

const PageHeader: FC<IPageHeader> = ({ titleContentKey, className = '' }: IPageHeader) => {
  return (
    <div className={`page-header ${className}`}>
      <Translate className="page-title" contentKey={titleContentKey} />
    </div>
  );
};

export default PageHeader;
