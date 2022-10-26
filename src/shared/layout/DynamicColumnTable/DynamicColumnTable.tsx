import React, { FC, useEffect, useState } from 'react';
import DynamicColumnTableConfigDialog from './DynamicColumnTableConfigDialog';
import { get } from 'lodash';
import ColumnTable from './Components/ColumnTable';
import { translate } from 'app/shared/layout/Translation/translate';
import { renderConfirmDeleteDialog } from 'app/shared/layout/Dialog/Dialogs';
import PageSizeContainer from 'app/shared/layout/DynamicColumnTable/Components/PageSizeContainer/PageSizeCointainer';
import { PaginationWrapper } from 'app/shared/layout/PageSizeOptions/PaginationWrapper';
import './DynamicColumnTable.scss';

export interface IDeleteDialog {
  onCloseDeletePopup: () => void;
  removeEntityFunction: () => void;
  deletingQuestionTranslate: string;
  paramNameDeletingQuestion?: string;
  isOpen?: boolean;
  enumKey?: string;
  dynamicDictPrefix?: string;
}

export interface IDynamicColumnTableProps {
  persistenceKey?: string;
  items: any[];
  itemPropertyNames: string[];
  defaultVisibleProperties?: string[];
  renderTableHeader: (fieldId: string) => JSX.Element;
  renderTableCell: (data: any, fieldId: string) => JSX.Element;
  renderTableRow?: (data: any) => JSX.Element;
  renderActionCell?: (entity: any) => JSX.Element;
  renderActionCellHeader?: () => void;
  isConfigDialogVisible?: boolean;
  onConfigPopupClosed?: () => void;
  i18nGroupName: string;
  composeOnClickTableRow?: (item: any) => () => void;
  i18nGroupPrefix?: string;
  tableConfig?: any;
  trConfig?: any;
  permanentColumns?: string[];
  canRenderDeletePopup?: boolean;
  deleteDialog?: IDeleteDialog;
  editField?: boolean;
  translateEmptyTable: string;
  //  pageSizeContainer
  pageSizeOptions?: number[];
  itemsPerPage?: number;
  onPageSizeChange?: (size: number) => void;
  //  pagination
  disablePagination?: boolean;
  totalItems?: number;
  activePage?: number;
  handlePagination?: (currentPage: number) => void;
}

const DynamicColumnTable: FC<IDynamicColumnTableProps> = ({
  items,
  renderTableHeader,
  renderTableCell,
  renderTableRow,
  tableConfig,
  trConfig,
  permanentColumns,
  composeOnClickTableRow,
  renderActionCell,
  renderActionCellHeader,
  editField,
  translateEmptyTable,
  persistenceKey,
  itemPropertyNames,
  defaultVisibleProperties,
  isConfigDialogVisible,
  i18nGroupName,
  i18nGroupPrefix,
  onConfigPopupClosed,
  canRenderDeletePopup,
  deleteDialog,
  // PageSizeWrapper
  pageSizeOptions,
  itemsPerPage,
  onPageSizeChange,
  //  Pagination
  disablePagination,
  totalItems = 0,
  handlePagination,
  activePage,
}: IDynamicColumnTableProps) => {
  const getDefaultPropertyVisibility = (visibilityObj: any) => {
    if (defaultVisibleProperties) {
      for (const propertyName of defaultVisibleProperties) {
        // eslint-disable-next-line no-prototype-builtins
        if (visibilityObj.hasOwnProperty(propertyName)) visibilityObj[propertyName] = true;
      }
    } else {
      // eslint-disable-next-line guard-for-in
      for (const propertyName in visibilityObj) visibilityObj[propertyName] = true;
    }
    return visibilityObj;
  };

  const loadTableColumnsVisibility = () => {
    const visibility = itemPropertyNames.reduce(
      (result, key) => ({
        ...result,
        [key]: false,
      }),
      {}
    );
    if (!persistenceKey) return getDefaultPropertyVisibility(visibility);
    const savedVisibility = localStorage.getItem(persistenceKey);
    if (!savedVisibility) return getDefaultPropertyVisibility(visibility);
    for (const key in visibility) {
      if (savedVisibility[key] === true) {
        visibility[key] = true;
      }
    }
    return visibility;
  };
  const [columnsVisibility, setColumnsVisibility] = useState(loadTableColumnsVisibility());

  useEffect(() => {
    setColumnsVisibility(loadTableColumnsVisibility());
  }, [itemPropertyNames]);

  const renderDeletePopup = () => {
    if (deleteDialog) {
      const { deletingQuestionTranslate, dynamicDictPrefix, onCloseDeletePopup, paramNameDeletingQuestion, removeEntityFunction, enumKey } =
        deleteDialog;
      const param =
        paramNameDeletingQuestion === 'enumKey'
          ? translate(`dynamic.${dynamicDictPrefix}.${enumKey}.itemTranslation`)
          : paramNameDeletingQuestion || '';
      return renderConfirmDeleteDialog(deletingQuestionTranslate, { param }, onCloseDeletePopup, removeEntityFunction);
    }
  };

  const setTableColumnVisibility = (colId: string, value: number) => {
    const newColumnsVisibility = { ...columnsVisibility, [colId]: value };
    setColumnsVisibility(newColumnsVisibility);
    if (persistenceKey) {
      localStorage.setItem(persistenceKey, newColumnsVisibility);
    }
  };

  return (
    <div className="mt-2">
      <ColumnTable
        items={items}
        renderTableHeader={renderTableHeader}
        renderTableCell={renderTableCell}
        renderTableRow={renderTableRow}
        composeOnClickTableRow={composeOnClickTableRow}
        tableConfig={tableConfig}
        trConfig={trConfig}
        permanentColumns={permanentColumns}
        columnsVisibility={columnsVisibility}
        renderActionCell={renderActionCell}
        renderActionCellHeader={renderActionCellHeader}
        editField={editField}
        translateEmptyTable={translateEmptyTable}
      />
      {!disablePagination && (
        <div className="pagination-wrapper">
          <PageSizeContainer onPageSizeChange={onPageSizeChange} pageSizeOptions={pageSizeOptions} itemsPerPage={itemsPerPage} />
          <PaginationWrapper
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            activePage={activePage}
            handlePagination={handlePagination}
          />
        </div>
      )}

      {onConfigPopupClosed && (
        <DynamicColumnTableConfigDialog
          isOpen={!!isConfigDialogVisible}
          i18nGroupName={i18nGroupName}
          onCheckboxValueChanged={setTableColumnVisibility}
          onClose={onConfigPopupClosed}
          columnsVisibility={columnsVisibility}
          i18nGroupPrefix={i18nGroupPrefix}
        />
      )}
      {canRenderDeletePopup && get(deleteDialog, 'isOpen') && renderDeletePopup()}
    </div>
  );
};

export default DynamicColumnTable;
