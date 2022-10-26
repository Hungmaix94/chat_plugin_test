import React, { FC } from 'react';
import { Table } from 'reactstrap';
import { isEmpty } from 'lodash';
import './ColumnTable.scss';
import Translate from 'app/shared/layout/Translation/translate';

export interface IColumnTableProps {
  items: any[];
  renderTableHeader: (fieldId: string) => JSX.Element;
  renderTableCell: (data: any, fieldId: string) => JSX.Element;
  renderTableRow?: (data: any) => JSX.Element;
  renderActionCell?: (entity: any) => JSX.Element;
  composeOnClickTableRow?: (item: any) => () => void;
  tableConfig?: any;
  trConfig?: any;
  columnsVisibility: any;
  permanentColumns?: string[];
  editField?: boolean;
  translateEmptyTable: string;
  renderActionCellHeader?: any;
}

const ColumnTable: FC<IColumnTableProps> = ({
  renderTableCell,
  permanentColumns,
  renderActionCell,
  renderTableRow,
  tableConfig,
  renderTableHeader,
  composeOnClickTableRow,
  items,
  trConfig,
  columnsVisibility,
  editField,
  translateEmptyTable,
  renderActionCellHeader,
}: IColumnTableProps) => {
  const visibleColumns = [
    ...(permanentColumns ? permanentColumns : []),
    ...Object.keys(columnsVisibility).filter(propertyName => columnsVisibility[propertyName]),
  ];
  return (
    <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'stretch' }}>
      <div className="table-responsive" style={{ flex: '1 1 auto' }}>
        <Table {...(tableConfig || { borderless: true })} className={'custom-table'}>
          {renderTableHeader && (
            <thead>
              <tr className="header-table" style={{ whiteSpace: 'nowrap' }}>
                {visibleColumns.map(propertyName => renderTableHeader(propertyName))}
                {renderActionCell && renderTableHeader && !renderActionCellHeader && (
                  <th className="hand">
                    <div>
                      <Translate contentKey="entity.action.actions" />
                    </div>
                  </th>
                )}
                {renderActionCellHeader && (
                  <td className="fixed-last-column">
                    <div>{renderActionCellHeader()}</div>
                  </td>
                )}
              </tr>
            </thead>
          )}
          <tbody>
            {!isEmpty(items) &&
              items.map((item, index) => {
                if (renderTableRow) {
                  return renderTableRow(item);
                }

                return (
                  <tr
                    style={{
                      ...(composeOnClickTableRow ? { cursor: 'pointer' } : {}),
                    }}
                    {...(composeOnClickTableRow && { onClick: composeOnClickTableRow(item) })}
                    {...(trConfig && trConfig(item))}
                    key={item.id || index}
                    className="row-table"
                  >
                    {visibleColumns.map(propertyName => {
                      const cell = renderTableCell(item, propertyName);
                      if (!cell || (!cell.props.children && cell.props.children !== 0 && !editField)) {
                        return (
                          <td key={propertyName} className="text-muted">
                            <Translate contentKey="global.messages.na" />
                          </td>
                        );
                      } else return cell;
                    })}
                    {renderActionCell && (
                      <td className="hand action-cell">
                        <div>{renderActionCell(item)}</div>
                      </td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </Table>
        {isEmpty(items) && (
          <div className="mt-4 ml-4 mb-4">
            <Translate contentKey={translateEmptyTable} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ColumnTable;
