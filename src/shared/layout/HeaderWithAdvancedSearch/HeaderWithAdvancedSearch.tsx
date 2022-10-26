import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Translate from 'app/shared/layout/Translation/translate';

export interface IHeaderWithAdvancedSearchProps {
  titleId: string;
  toggleTableConfigPopup?: () => void;
  translateTitle: string;
  canAdvancedSearch?: boolean;
  toggleAdvancedSearch?: () => void;
  isSearchFormVisible?: boolean;
  translateAdvancedSearch?: string;
  childrenSearchForm?: React.ReactNode;
  canCreateNew?: boolean;
  urlCreateNew?: string;
  translateCreateNew?: string;
  canTableConfig?: boolean;
  disablePagination?: boolean;
  disableHeader?: boolean;
}

export default class HeaderWithAdvancedSearch extends React.Component<IHeaderWithAdvancedSearchProps> {
  render() {
    const {
      titleId,
      toggleTableConfigPopup,
      toggleAdvancedSearch,
      isSearchFormVisible,
      childrenSearchForm,
      translateTitle,
      translateAdvancedSearch,
      canCreateNew,
      urlCreateNew,
      translateCreateNew,
      canAdvancedSearch,
      canTableConfig,
      disablePagination,
      disableHeader,
    } = this.props;
    return (
      <div className="page-header">
        {!disableHeader && (
          <PageTitle id={titleId}>
            <Translate contentKey={translateTitle} />
          </PageTitle>
        )}
      </div>
    );
  }
}
