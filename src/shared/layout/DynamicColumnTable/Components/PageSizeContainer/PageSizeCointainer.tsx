import React, { FC } from 'react';
import './PageSizeContainer.scss';
import PageSizeOptions from 'app/shared/layout/PageSizeOptions/PageSizeOptions';

interface IPageSizeContainer {
  pageSizeOptions?: number[];
  itemsPerPage?: number;
  onPageSizeChange?: (size: number) => void;
}

const PageSizeContainer: FC<IPageSizeContainer> = ({ pageSizeOptions, itemsPerPage, onPageSizeChange }: IPageSizeContainer) => {
  return (
    <div className="page-size-container flex-column flex-sm-row">
      {itemsPerPage && onPageSizeChange && (
        <PageSizeOptions pageSizeOptions={pageSizeOptions} pageSize={itemsPerPage} onPageSizeChange={onPageSizeChange} />
      )}
    </div>
  );
};

export default PageSizeContainer;
