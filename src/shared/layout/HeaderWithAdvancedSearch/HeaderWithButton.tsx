import React from 'react';
import PageTitle from 'app/shared/layout/PageTitle/PageTitle';
import Translate from 'app/shared/layout/Translation/translate';
import './HeaderWithButtons.scss';
import { Title } from 'app/shared/layout/PageTitle/Title';

export interface IHeaderWithButtonProps {
  titleId: string;
  translateTitle: string;
  canCreateNew?: boolean;
  urlCreateNew?: string;
  translateCreateNew?: string;
  disableHeader?: boolean;
  children?: React.ReactNode;
  translateSubtitle?: string;
  customChildClass?: string;
  btnAddNewClass?: string;
  additionalTitle?: string | React.ReactNode;
  additionalTitleClass?: string;
  customWrapperClass?: string;
  interpolate?: any;
  withBackButton?: boolean;
}

const HeaderWithButton: React.FC<IHeaderWithButtonProps> = ({
  titleId,
  translateTitle,
  disableHeader,
  children,
  translateSubtitle = '',
  customChildClass = '',
  additionalTitle = '',
  interpolate,
  customWrapperClass = '',
  additionalTitleClass,
}: IHeaderWithButtonProps) => {
  const classNameWrapperChild = `n-m-child`;

  return (
    <div className={`header-with-advanced-search ${customWrapperClass}`}>
      <div className="page-header">
        {!disableHeader && (
          <PageTitle id={titleId}>
            <Translate contentKey={translateTitle} interpolate={interpolate} />
            <span className={additionalTitleClass}>{additionalTitle}</span>
          </PageTitle>
        )}
        <div className={`${classNameWrapperChild} ${customChildClass}`}>{children}</div>
      </div>
      {translateSubtitle && <Title className="ml-4" isSubtitle contentKeyText={translateSubtitle} />}
    </div>
  );
};

export default HeaderWithButton;
