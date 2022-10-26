import React, { FC } from 'react';
import Translate from 'app/shared/layout/Translation/translate';
import './PageHeader.scss';
import WebPath, { IPathItem } from 'app/shared/layout/WebPath/WebPath';

interface IPageHeader {
  titleContentKey?: string;
  subTitleContentKey?: string;
  className?: string;
  children?: React.ReactNode;
  pathArray?: IPathItem[];
  secondColumn?: React.ReactNode;
}

const PageHeader: FC<IPageHeader> = ({ titleContentKey, subTitleContentKey, className = '', pathArray, children, secondColumn }: IPageHeader) => {
  return (
    <div className={`page-header ${className}`}>
      <div>
        {pathArray && <WebPath pathArray={pathArray} />}
        <div className="page-title">
          {!!titleContentKey && <Translate contentKey={titleContentKey}/>}
          {children}
        </div>
        {subTitleContentKey ? (
          <div className="page-subtitle">
            <Translate contentKey={subTitleContentKey} />
          </div>
        ) : null}
      </div>
      {secondColumn}
    </div>
  );
};

export default PageHeader;
