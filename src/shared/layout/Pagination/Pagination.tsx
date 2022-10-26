import * as React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './Pagination.scss';
import Translate from 'app/shared/layout/Translation/translate';

export interface IPaginationDashboardProps {
  activePage: number;
  onSelect: (page: number) => void;
  maxButtons: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface IPaginationDashboardState {
  currentPage: number;
}

export default class PaginationDashboard extends React.Component<IPaginationDashboardProps, IPaginationDashboardState> {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.activePage,
    };
  }

  updateActivePage = currentPage => () => {
    this.setState({ currentPage });
    this.props.onSelect(currentPage);
  };

  previousPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
    this.props.onSelect(this.state.currentPage - 1);
  };

  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
    this.props.onSelect(this.state.currentPage + 1);
  };

  itemsToDisplay = activePage => {
    const items = [];
    let item: any = {};
    let previousItem: any = {};
    const maxPage = this.getMaxPage();
    const padSup = Math.floor((this.props.maxButtons - 1) / 2);
    const modulo = (this.props.maxButtons - 1) % 2;
    const padInf = padSup + modulo;
    for (let j = 0; j < maxPage; j++) {
      item = {};
      if (
        j === 0 ||
        j === maxPage - 1 ||
        j === activePage - 1 ||
        j === activePage - 2 ||
        (activePage === 1 && j === 1) ||
        (activePage - padInf < j && j < activePage + padSup)
      ) {
        item.display = 'display';
        if (j === activePage - 1) item.active = true;
      } else if (previousItem.display === 'disabled') {
        item.display = 'hidden';
      } else {
        item.display = 'disabled';
      }
      items.push(item);
      previousItem = { ...item };
      if (item.display === 'hidden') {
        previousItem.display = 'disabled';
      }
    }
    return items;
  };

  displayPaginationItem = (i, isActive) => (
    <PaginationItem key={i} {...(isActive && { className: 'active' })}>
      <PaginationLink className="number" onClick={this.updateActivePage(i + 1)}>
        <div className="inner">{i + 1}</div>
      </PaginationLink>
    </PaginationItem>
  );

  cleanActivePage = () => {
    const { totalItems, itemsPerPage, activePage } = this.props;
    const cleanActivePage = totalItems > 0 ? Math.min(activePage, Math.ceil(totalItems / itemsPerPage)) : 1;
    if (cleanActivePage !== activePage) {
      this.updateActivePage(cleanActivePage)();
    }
  };

  getMaxPage = () => {
    const { itemsPerPage, totalItems } = this.props;
    const division = Math.floor(totalItems / itemsPerPage);
    const modulo = totalItems % itemsPerPage;
    return Math.max(division + (modulo !== 0 ? 1 : 0), 1);
  };

  render() {
    this.cleanActivePage();
    const { activePage } = this.props;
    const maxPage = this.getMaxPage();
    const canPrev = activePage > 1;
    const canNext = activePage !== maxPage;

    return (
      <Pagination className="d-inline-block ml-3" size="sm" listClassName="justify-content-center">
        <PaginationItem className="prev" disabled={!canPrev}>
          <PaginationLink disabled={!canPrev} onClick={this.updateActivePage(1)}>
            <Translate contentKey="entity.action.first" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="prev" disabled={!canPrev}>
          <PaginationLink
            previous
            onClick={() => {
              if (!canPrev) return;
              this.previousPage();
            }}
            disabled={!canPrev}
          >
            <Translate contentKey="entity.action.previous" />
          </PaginationLink>
        </PaginationItem>
        {this.itemsToDisplay(activePage).map((paginationItem, i) =>
          paginationItem.display === 'display' ? (
            this.displayPaginationItem(i, paginationItem.active)
          ) : paginationItem.display === 'disabled' ? (
            <PaginationItem className="hexagon" disabled key={i}>
              <PaginationLink href="#">...</PaginationLink>
            </PaginationItem>
          ) : null
        )}
        <PaginationItem className="next" disabled={!canNext}>
          <PaginationLink
            next
            onClick={() => {
              if (!canNext) return;
              this.nextPage();
            }}
            disabled={!canNext}
          >
            <Translate contentKey="entity.action.next" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="next" disabled={!canNext}>
          <PaginationLink onClick={this.updateActivePage(maxPage)} disabled={!canNext}>
            <Translate contentKey="entity.action.last" />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    );
  }
}
