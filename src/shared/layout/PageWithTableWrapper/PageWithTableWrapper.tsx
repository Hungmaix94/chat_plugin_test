import React, { FC, useState } from 'react';
import { Col, Row } from 'reactstrap';
import WrapperDynamicColumnTable from '../DynamicColumnTable/WrapperDynamicColumnTable';
import PageHeader from '../PageHeader/PageHeader';

interface IPageWithTableWrapper {
  childrenTop?: React.ReactNode;
  children?: React.ReactNode;
  titleContentKey: string;
  totalItems: number;
  persistenceKey: string;
  renderActionCell?: (entity: any) => JSX.Element;
  tableColumns: string[];
  permanentColumns: string[];
  items: any[];
  renderTableCell: (data: any, fieldId: string) => JSX.Element;
  loading: boolean;
  i18nGroupName: string;
  defaultSort: string;
  canAdvancedSearch?: boolean;
  childrenSearchForm?: React.ReactNode;
  translateCreateNew?: string;
  handleCreate?: any;
  fieldIdListWithoutSorting?: string[];
  modalCreateNew?: React.ReactElement;
  getEntities: (params) => void;
  updateSuccess: boolean;
  searchCriteria?: any;
  setSearchCriteria?: (param) => void;
  fieldIdIcon?: any;
  childrenStatistic?: React.ReactElement;
  classNameHeader?: string;
  disablePagination?: boolean;
  sortItems?: Record<string, string>;
}

const PageWithTableWrapper: FC<IPageWithTableWrapper> = ({
  titleContentKey,
  renderActionCell,
  totalItems,
  persistenceKey,
  tableColumns,
  items,
  renderTableCell,
  permanentColumns,
  loading,
  i18nGroupName,
  defaultSort,
  canAdvancedSearch = false,
  childrenSearchForm,
  childrenStatistic,
  fieldIdListWithoutSorting,
  translateCreateNew,
  modalCreateNew,
  children,
  getEntities,
  updateSuccess,
  searchCriteria,
  setSearchCriteria,
  fieldIdIcon,
  handleCreate,
  classNameHeader = '',
  disablePagination,
  childrenTop,
  sortItems,
}: IPageWithTableWrapper) => {
  const defaultColumns = [...permanentColumns, ...tableColumns];
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleIsOpenCreateModal = () => {
    setIsOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  const buttonCreateNewTmp = {
    handleModalCreateNew: handleCreate ? handleCreate : handleIsOpenCreateModal,
    translateCreateNew,
  };

  return (
    <div className="app-page-size page-with-table-wrapper">
      <Row className="justify-content-center">
        <Col xs={12} xl={12}>
          {childrenTop}
          <PageHeader titleContentKey={titleContentKey} className={classNameHeader} />
          {childrenStatistic || ''}
          <WrapperDynamicColumnTable
            renderActionCell={renderActionCell}
            totalItems={totalItems}
            persistenceKey={persistenceKey}
            itemPropertyNames={tableColumns}
            items={items}
            renderTableCell={renderTableCell}
            permanentColumns={permanentColumns}
            defaultVisibleProperties={defaultColumns}
            i18nGroupName={i18nGroupName}
            loadingItems={loading}
            translateEmptyTable={`${i18nGroupName}.notFound`}
            defaultSort={defaultSort}
            canAdvancedSearch={canAdvancedSearch}
            childrenSearchForm={childrenSearchForm}
            getEntities={getEntities}
            updateSuccess={updateSuccess}
            searchCriteria={searchCriteria}
            setSearchCriteria={setSearchCriteria}
            fieldIdIcon={fieldIdIcon}
            fieldIdListWithoutSorting={fieldIdListWithoutSorting}
            disablePagination={disablePagination}
            {...(translateCreateNew && { buttonCreateNew: buttonCreateNewTmp })}
            sortItems={sortItems}
          />
        </Col>
      </Row>
      {translateCreateNew &&
        modalCreateNew &&
        React.cloneElement(modalCreateNew, {
          toggleClose: handleCloseCreateModal,
          isOpen: isOpenCreateModal,
        })}
      {children}
    </div>
  );
};

export default PageWithTableWrapper;
