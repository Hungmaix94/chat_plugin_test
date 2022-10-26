import React, { FC, useState } from 'react';
import './PageWrapper.scss';
import PageHeader from 'app/shared/layout/PageWrapper/PageHeader';
import { Col, Row } from 'reactstrap';
import WrapperDynamicColumnTable from '../DynamicColumnTable/WrapperDynamicColumnTable';
import { IPathItem } from 'app/shared/layout/WebPath/WebPath';

interface IPageWithTableWrapper {
  children?: React.ReactNode;
  titleContentKey: string;
  subTitleContentKey?: string;
  totalItems: number;
  persistenceKey: string;
  renderActionCell?: (entity: any) => JSX.Element;
  tableColumns: string[];
  permanentColumns: string[];
  items: any[];
  renderTableCell?: (data: any, fieldId: string) => JSX.Element;
  renderTableRow?: (data: any) => JSX.Element;
  tableConfig?: any;
  loading: boolean;
  i18nGroupName: string;
  defaultSort: string;
  defaultOrder?: 'asc' | 'desc';
  canAdvancedSearch?: boolean;
  childrenSearchForm?: React.ReactNode;
  searchWithoutButton?: boolean;
  translateCreateNew?: string;
  handleCreate?: any;
  buttonCreateNew?: any;
  fieldIdListWithoutSorting?: string[];
  modalCreateNew?: React.ReactElement;
  getEntities: (params) => void;
  updateSuccess: boolean;
  searchCriteria?: any;
  setSearchCriteria?: (param) => void;
  fieldIdIcon?: any;
  childrenStatistic?: React.ReactElement;
  classNameHeader?: string;
  sortItems?: Record<string, string>;
  childrenTitle?: React.ReactNode;
  pathArray?: IPathItem[];
  composeOnClickTableRow?: (item: any) => () => void;
}

const PageWithTableWrapper: FC<IPageWithTableWrapper> = ({
  titleContentKey,
  subTitleContentKey,
  renderActionCell,
  totalItems,
  tableConfig,
  persistenceKey,
  tableColumns,
  items,
  renderTableCell,
  renderTableRow,
  permanentColumns,
  loading,
  i18nGroupName,
  defaultSort,
  defaultOrder,
  canAdvancedSearch = false,
  childrenSearchForm,
  searchWithoutButton = false,
  fieldIdListWithoutSorting,
  translateCreateNew,
  buttonCreateNew,
  modalCreateNew,
  children,
  getEntities,
  updateSuccess,
  searchCriteria,
  setSearchCriteria,
  fieldIdIcon,
  handleCreate,
  classNameHeader = '',
  sortItems,
  childrenTitle,
  pathArray,
  composeOnClickTableRow,
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
        <Col xs={12}>
          <PageHeader
            titleContentKey={titleContentKey}
            className={classNameHeader}
            subTitleContentKey={subTitleContentKey}
            pathArray={pathArray}
          >
            {childrenTitle}
          </PageHeader>
          <WrapperDynamicColumnTable
            defaultOrder={defaultOrder}
            composeOnClickTableRow={composeOnClickTableRow}
            renderActionCell={renderActionCell}
            totalItems={totalItems}
            persistenceKey={persistenceKey}
            itemPropertyNames={tableColumns}
            items={items}
            renderTableCell={renderTableCell}
            renderTableRow={renderTableRow}
            permanentColumns={permanentColumns}
            defaultVisibleProperties={defaultColumns}
            i18nGroupName={i18nGroupName}
            loadingItems={loading}
            translateEmptyTable={`${i18nGroupName}.notFound`}
            defaultSort={defaultSort}
            canAdvancedSearch={canAdvancedSearch}
            childrenSearchForm={childrenSearchForm}
            searchWithoutButton={searchWithoutButton}
            getEntities={getEntities}
            updateSuccess={updateSuccess}
            searchCriteria={searchCriteria}
            setSearchCriteria={setSearchCriteria}
            fieldIdIcon={fieldIdIcon}
            tableConfig={tableConfig}
            fieldIdListWithoutSorting={fieldIdListWithoutSorting}
            {...(buttonCreateNew ? { buttonCreateNew } : translateCreateNew ? { buttonCreateNew: buttonCreateNewTmp } : null)}
            {...translateCreateNew}
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
