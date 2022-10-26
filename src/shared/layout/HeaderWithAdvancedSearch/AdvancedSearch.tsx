import React, { FC } from 'react';
import { Collapse } from 'reactstrap';
import { IButtonCreateNew, WrapperButtons } from './Buttons';

interface IAdvancedSearchProps {
  toggleTableConfigPopup?: () => void;
  canAdvancedSearch?: boolean;
  toggleAdvancedSearch?: () => void;
  isSearchFormVisible?: boolean;
  childrenSearchForm?: React.ReactNode;
  buttonCreateNew?: IButtonCreateNew;
  canTableConfig?: boolean;
  renderChildren?: any;
  searchWithoutButton?: boolean;
}

const AdvancedSearch: FC<IAdvancedSearchProps> = ({
  toggleTableConfigPopup,
  toggleAdvancedSearch,
  isSearchFormVisible,
  childrenSearchForm,
  buttonCreateNew,
  canAdvancedSearch,
  canTableConfig,
  renderChildren,
  searchWithoutButton,
}: IAdvancedSearchProps) => {
  return (
    <>
      {!searchWithoutButton && (
        <WrapperButtons
          buttonCreateNew={buttonCreateNew}
          isSearchFormVisible={isSearchFormVisible}
          canAdvancedSearch={canAdvancedSearch}
          toggleAdvancedSearch={toggleAdvancedSearch}
          canTableConfig={canTableConfig}
          toggleTableConfigPopup={toggleTableConfigPopup}
          renderChildren={renderChildren}
        />
      )}
      <Collapse isOpen={isSearchFormVisible}>{childrenSearchForm}</Collapse>
    </>
  );
};

export default AdvancedSearch;
