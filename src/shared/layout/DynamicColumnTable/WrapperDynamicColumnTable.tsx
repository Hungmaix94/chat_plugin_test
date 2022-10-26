import React, { FC, useEffect, useState } from 'react';
import DynamicColumnTable, { IDynamicColumnTableProps } from './DynamicColumnTable';
import { useLocation } from 'react-router-dom';
import { get } from 'lodash';
import AdvancedSearch from '../HeaderWithAdvancedSearch/AdvancedSearch';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import Loader from 'app/shared/layout/Loader/Loader';
import Translate from 'app/shared/layout/Translation/translate';
import { getSortStateWithDefaultSort, sortIcon } from 'app/shared/util/sort-utils';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { IButtonCreateNew } from 'app/shared/layout/HeaderWithAdvancedSearch/Buttons';

export interface IWrapperDynamicColumnTableProps {
  totalItems: number;
  pageSizeOptions?: number[];
  loadingItems?: boolean;
  buttonCreateNew?: IButtonCreateNew;
  canAdvancedSearch?: boolean;
  childrenSearchForm?: React.ReactNode;
  canTableConfig?: boolean;
  toggleTableConfigPopup?: () => void;
  disablePagination?: boolean;
  editField?: boolean;
  tableConfig?: any;
  renderHeaderOptions?: any;
  headerOptionClass?: string;
  translateEmptyTable: string;
  viewAboveTable?: any;
  childrenAboveTable?: React.ReactNode;
  isBottomPageSize?: boolean;
  dynamicColumnTableProps?: IDynamicColumnTableProps;
  defaultSort?: string;
  defaultOrder?: 'asc' | 'desc';
  defaultItemsPerPage?: number;
  fieldIdListWithoutSorting?: string[];
  i18nGroupName: string;
  items: any[];
  itemPropertyNames: string[];
  renderTableCell: (data: any, fieldId: string) => JSX.Element;
  renderTableRow?: (data: any) => JSX.Element;
  renderActionCell?: (entity: any) => JSX.Element;
  persistenceKey?: string;
  defaultVisibleProperties?: string[];
  permanentColumns?: string[];
  searchWithoutButton?: boolean;
  getEntities: (params) => void;
  updateSuccess: boolean;
  searchCriteria?: any;
  setSearchCriteria?: (param) => void;
  fieldIdIcon?: any;
  sortItems?: Record<string, string>;
  composeOnClickTableRow?: (item: any) => () => void;
}

const WrapperDynamicColumnTable: FC<IWrapperDynamicColumnTableProps> = ({
                                                                          totalItems,
                                                                          disablePagination,
                                                                          isBottomPageSize,
                                                                          pageSizeOptions,
                                                                          buttonCreateNew,
                                                                          canAdvancedSearch,
                                                                          canTableConfig,
                                                                          toggleTableConfigPopup,
                                                                          renderHeaderOptions,
                                                                          headerOptionClass,
                                                                          childrenSearchForm,
                                                                          viewAboveTable,
                                                                          childrenAboveTable,
                                                                          loadingItems,
                                                                          defaultSort = 'id',
                                                                          defaultOrder = 'asc',
                                                                          defaultItemsPerPage = ITEMS_PER_PAGE,
                                                                          fieldIdListWithoutSorting = [],
                                                                          fieldIdIcon = [],
                                                                          searchWithoutButton,
                                                                          getEntities,
                                                                          updateSuccess,
                                                                          searchCriteria,
                                                                          setSearchCriteria,
                                                                          sortItems,
                                                                          ...props
                                                                        }: IWrapperDynamicColumnTableProps) => {
  const location = useLocation();
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortStateWithDefaultSort(location, ITEMS_PER_PAGE, defaultSort, defaultOrder), location.search)
  );
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(searchWithoutButton);
  const { activePage, itemsPerPage } = paginationState;

  const updateList = () => {
    const params = {
      page: paginationState.activePage - 1,
      size: paginationState.itemsPerPage,
      sort: `${paginationState.sort},${paginationState.order}`,
      ...searchCriteria,
    };
    getEntities(params);
  };

  useEffect(() => {
    updateList();
  }, [paginationState, searchCriteria]);

  useEffect(() => {
    updateList();
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      updateList();
    }
  }, [updateSuccess]);

  const handlePagination = (currentPage: number) =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const onPageSizeChange = (size: number) =>
    setPaginationState({
      ...paginationState,
      itemsPerPage: size,
    });

  const sort = (p: string) => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' ? 'desc' : 'asc',
      sort: p,
    });
  };

  const checkIcon = (value: string) => {
    return fieldIdIcon.find(item => item.fieldId === value);
  };

  const checkSort = (value: string) => {
    return !fieldIdListWithoutSorting.find(item => item === value);
  };

  const renderTableHeader = (fieldId: string) => {
    const itemFieldId = sortItems && sortItems[fieldId] ? sortItems[fieldId] : fieldId;
    const fieldIcon = checkIcon(itemFieldId);
    const translateText =
      fieldId === 'translateDescription'
        ? 'proEcoApp.translateDictItem.translateDescription'
        : fieldId === 'itemTranslation'
          ? 'proEcoApp.translateDictItem.itemTranslation'
          : `${props.i18nGroupName}.${fieldId}`;
    return (
      <th {...(checkSort(fieldId) && { className: 'hand', onClick: sort(itemFieldId) })} key={itemFieldId}>
        {fieldId && (
          <>
            <Translate contentKey={translateText}/>
            {fieldIcon && fieldIcon.component}
            {checkSort(fieldId) && sortIcon(itemFieldId, get(paginationState, 'sort', defaultSort), get(paginationState, 'order', 'asc'))}
          </>
        )}
      </th>
    );
  };

  const toggleAdvancedSearch = () => setIsSearchFormVisible(!isSearchFormVisible);

  const renderInner = () => (
    <DynamicColumnTable
      {...props}
      tableConfig={{ striped: true }}
      renderTableHeader={renderTableHeader}
      pageSizeOptions={pageSizeOptions}
      itemsPerPage={itemsPerPage}
      onPageSizeChange={onPageSizeChange}
      activePage={activePage}
      handlePagination={handlePagination}
      totalItems={totalItems}
      disablePagination={disablePagination}
    />
  );

  const renderSearchPanel = () => (
    <AdvancedSearch
      buttonCreateNew={buttonCreateNew}
      isSearchFormVisible={isSearchFormVisible}
      canAdvancedSearch={canAdvancedSearch}
      toggleAdvancedSearch={toggleAdvancedSearch}
      canTableConfig={canTableConfig}
      toggleTableConfigPopup={toggleTableConfigPopup}
      childrenSearchForm={childrenSearchForm}
      renderChildren={renderHeaderOptions}
      searchWithoutButton={searchWithoutButton}
    />
  );

  return (
    <>
      {renderSearchPanel()}
      {loadingItems && <Loader/>}
      {renderInner()}
    </>
  );
};

export default WrapperDynamicColumnTable;
