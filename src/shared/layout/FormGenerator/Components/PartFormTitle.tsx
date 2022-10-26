import React from 'react';
import Translate from 'app/shared/layout/Translation/translate';
import './partFormTitle.scss';

interface IPartFormTitle {
  title: string;
  subTitle?: any;
  beforeChildren?: React.ReactNode;
  childrenTitlePart?: React.ReactNode;
  partFormTitleClass?: string;
}

export const PartFormTitle: React.FC<IPartFormTitle> = ({ title, subTitle, beforeChildren, childrenTitlePart, partFormTitleClass }) => {
  return (
    <div className={`part-form-title ${partFormTitleClass}`}>
      {beforeChildren}
      {title && <Translate contentKey={title} />}
      {childrenTitlePart}
      {subTitle}
    </div>
  );
};
