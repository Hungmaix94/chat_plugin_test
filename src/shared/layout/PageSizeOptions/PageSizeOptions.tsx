import React, { FC, useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import './PageSizeOptions.scss';
import Translate from 'app/shared/layout/Translation/translate';
import { PAGE_SIZE_OPTIONS } from 'app/shared/util/pagination.constants';

interface IPageSizeOptionsProps {
  pageSizeOptions?: number[];
  pageSize: number;
  onPageSizeChange: (number: number) => void;
}

const PageSizeOptions: FC<IPageSizeOptionsProps> = ({ pageSize, pageSizeOptions, onPageSizeChange }: IPageSizeOptionsProps) => {
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);

  const changePageSize = (size: number) => () => {
    onPageSizeChange(size);
    setCurrentPageSize(size);
  };

  return (
    <div className="page-size-wrapper">
      <Translate contentKey="global.search.show" />
      <UncontrolledDropdown className="d-inline-block">
        <DropdownToggle caret color="page-size" size="xs">
          {currentPageSize}
        </DropdownToggle>
        <DropdownMenu right>
          {(pageSizeOptions || PAGE_SIZE_OPTIONS).map((size: number, index: number) => (
            <DropdownItem key={index} onClick={changePageSize(size)}>
              {size}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
      <Translate contentKey="global.search.itemsOnThePage" />
    </div>
  );
};

export default PageSizeOptions;
