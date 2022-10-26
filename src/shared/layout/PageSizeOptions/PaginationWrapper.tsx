import React from 'react';
import { Col, Row } from 'reactstrap';
import PagePagination from 'app/shared/layout/Pagination/Pagination';

const renderPagination = (totalItems: number, itemsPerPage: number, activePage: number, onSelect: (item: any) => void) => (
  <PagePagination totalItems={totalItems} itemsPerPage={itemsPerPage} activePage={activePage} onSelect={onSelect} maxButtons={3} />
);

interface IPaginationWrapper {
  totalItems?: number;
  itemsPerPage?: number;
  activePage?: number;
  handlePagination?: any;
}

export const PaginationWrapper: React.FC<IPaginationWrapper> = ({
  totalItems,
  itemsPerPage,
  activePage,
  handlePagination,
}: IPaginationWrapper) => (
  <Row>
    <Col className="d-flex justify-content-end">
      {totalItems && itemsPerPage && activePage ? renderPagination(totalItems, itemsPerPage, activePage, handlePagination) : null}
    </Col>
  </Row>
);
