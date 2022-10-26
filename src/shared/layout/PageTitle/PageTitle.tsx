import React from 'react';

interface IPageTitleProps {
  withSeparator?: boolean;
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({ withSeparator, className, children, ...props }) => (
  <>
    <h1 className={`page-title ${className || ''} ${withSeparator ? 'mb-3' : ''}`} {...props}>
      {children}
    </h1>
  </>
);

export default PageTitle;
