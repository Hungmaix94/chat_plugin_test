import React from 'react';
import Translate, { translate } from 'app/shared/layout/Translation/translate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Button, UncontrolledTooltip } from 'reactstrap';
import PageSizeOptions from 'app/shared/layout/PageSizeOptions/PageSizeOptions';
import { PAGE_SIZE_OPTIONS } from 'app/shared/util/pagination.constants';
import { Link } from 'react-router-dom';

interface IButtonTableConfigProps {
  onClick: any;
}

export const ButtonTableConfig: React.FC<IButtonTableConfigProps> = ({ onClick }) => {
  return (
    <>
      <Button
        id="buttonToggleTableConfigPopup"
        color="outline-dark"
        className={`btn button config-button outline-dark-no-border mr-2 mb-2`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faCog} />
      </Button>
      <UncontrolledTooltip placement="bottom" target="buttonToggleTableConfigPopup">
        {translate('global.tooltip.buttonToggleTableConfigPopup')}
      </UncontrolledTooltip>
    </>
  );
};

interface IButtonAdvancedSearchProps {
  onClick: any;
  translateAdvanced?: string;
  isSearchFormVisible?: boolean;
  onlyIcon?: boolean;
}

export const ButtonAdvancedSearch: React.FC<IButtonAdvancedSearchProps> = ({ onClick, isSearchFormVisible, onlyIcon = false }) => {
  return (
    <Button id="button-toggle-advanced-search" color="only-border" onClick={onClick} className={'btn-default-size mr-3'}>
      <Translate contentKey="entity.action.filter" />
    </Button>
  );
};

export interface IButtonCreateNew {
  handleModalCreateNew: () => void;
  translateCreateNew: string;
  isLink?: boolean;
  link?: string;
}

interface IWrapperButtonsProps {
  buttonCreateNew?: IButtonCreateNew;
  canTableConfig?: boolean;
  toggleTableConfigPopup?: (any) => void;
  canAdvancedSearch?: boolean;
  isSearchFormVisible?: boolean;
  translateAdvancedSearch?: string;
  toggleAdvancedSearch?: (any) => void;
  pageSizeOptions?: any;
  itemsPerPage?: number;
  onPageSizeChange?: (any) => void;
  disablePagination?: boolean;
  renderChildren?: any;
  headerOptionClass?: string;
  onlyText?: any;
  isBottomPageSize?: boolean;
}

export const WrapperButtons: React.FC<IWrapperButtonsProps> = ({
  buttonCreateNew,
  canAdvancedSearch,
  toggleAdvancedSearch,
  isSearchFormVisible,
  translateAdvancedSearch,
  pageSizeOptions = PAGE_SIZE_OPTIONS,
  itemsPerPage,
  onPageSizeChange,
  disablePagination,
  isBottomPageSize,
}) => {
  return (
    <div className={'mb-2 d-flex justify-content-end align-items-start flex-wrap'}>
      {canAdvancedSearch && (
        <ButtonAdvancedSearch
          onClick={toggleAdvancedSearch}
          isSearchFormVisible={isSearchFormVisible}
          translateAdvanced={translateAdvancedSearch}
          onlyIcon={true}
        />
      )}
      {buttonCreateNew ? (
        buttonCreateNew.isLink ? (
          <Link to={buttonCreateNew.link}>
            <Button id="table-button-create-new" color="first-type" className="btn-default-size">
              <Translate contentKey={buttonCreateNew.translateCreateNew} />
            </Button>
          </Link>
        ) : (
          <Button
            id="table-button-create-new"
            color="first-type"
            className="btn-default-size"
            onClick={buttonCreateNew.handleModalCreateNew}
          >
            <Translate contentKey={buttonCreateNew.translateCreateNew} />
          </Button>
        )
      ) : null}

      {itemsPerPage && !disablePagination && !isBottomPageSize && (
        <PageSizeOptions pageSizeOptions={pageSizeOptions} pageSize={itemsPerPage} onPageSizeChange={onPageSizeChange} />
      )}
    </div>
  );
};
