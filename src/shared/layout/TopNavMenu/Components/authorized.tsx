import Translate from 'app/shared/layout/Translation/translate';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './authorized.scss';
import { useRole } from 'app/shared/hooks/useRole';

interface IAuthorizedMenu {
  toggleClose?: () => void;
  isUserProfile?: boolean;
}

const AuthorizedMenu: FC<IAuthorizedMenu> = ({ toggleClose, isUserProfile }: IAuthorizedMenu) => {
  const { isAdministrator, isSystem, isClient } = useRole();

  if (isAdministrator && !isUserProfile) {
    return (
      <div className="authorized-menu">
        <Translate className="menu-section" contentKey="global.menu.admin.analytics" />
        <Link onClick={toggleClose} to="/admin/dashboard">
          <Translate contentKey="global.menu.admin.dashboard" />
        </Link>
        <Translate className="menu-section" contentKey="global.menu.admin.newProject" />
        <Link onClick={toggleClose} to="/admin/home-object">
          <Translate contentKey="global.menu.admin.homeObjectsDirectory" />
        </Link>
        <Link onClick={toggleClose} to="/admin/property-directory">
          <Translate contentKey="global.menu.admin.propertyOptions" />
        </Link>
        <Link onClick={toggleClose} to="/admin/arrangements">
          <Translate contentKey="global.menu.admin.arrangements" />
        </Link>
        <Translate className="menu-section" contentKey="global.menu.admin.content" />
        <Link onClick={toggleClose} to="/admin/offers">
          <Translate contentKey="global.menu.admin.offers" />
        </Link>
        <Link onClick={toggleClose} to="/admin/services">
          <Translate contentKey="global.menu.admin.services" />
        </Link>
        <Link onClick={toggleClose} to="/admin/promotions">
          <Translate contentKey="global.menu.admin.promotions" />
        </Link>
        <Link onClick={toggleClose} to="/admin/cms-v2">
          <Translate contentKey="global.menu.admin.cms" />
        </Link>
        <Link onClick={toggleClose} to="/admin/orders">
          <Translate contentKey="global.menu.admin.orders" />
        </Link>
        <Translate className="menu-section" contentKey="global.menu.admin.systemManagement" />
        <Link onClick={toggleClose} to="/admin/finances">
          <Translate contentKey="global.menu.admin.finances" />
        </Link>
        <Link onClick={toggleClose} to="/admin/requests">
          <Translate contentKey="global.menu.admin.contactForms" />
        </Link>
        <Link onClick={toggleClose} to="/admin/dict">
          <Translate contentKey="global.menu.admin.dictionaries" />
        </Link>
        <Translate className="menu-section" contentKey="global.menu.admin.userManagement" />
        <Link onClick={toggleClose} to="/admin/users">
          <Translate contentKey="global.menu.admin.users" />
        </Link>
      </div>
    );
  }

  if (isSystem) {
    return (
      <div className="authorized-menu">
        <Link onClick={toggleClose} to="/logout">
          <Translate contentKey="global.menu.account.logout" />
        </Link>
      </div>
    );
  }
  if ((isAdministrator || isClient) && isUserProfile) {
    return (
      <div className="authorized-menu">
        {!isAdministrator && <Translate className="menu-section" contentKey="global.menu.content" />}
        <Link onClick={toggleClose} to="/account/profile">
          <Translate contentKey="global.menu.account.myProfile" />
        </Link>
        <Link onClick={toggleClose} to="/account/password">
          <Translate contentKey="global.menu.account.password" />
        </Link>
        <Link onClick={toggleClose} to="/logout">
          <Translate contentKey="global.menu.account.logout" />
        </Link>
      </div>
    );
  }

  return (
    <div className="authorized-menu">
      {!isAdministrator && (
        <>
          <Link onClick={toggleClose} to="/arrangements">
            <Translate contentKey="global.menu.entities.configurations" />
          </Link>
          <Link onClick={toggleClose} to="/orders">
            <Translate contentKey="global.menu.entities.orders" />
          </Link>
          <Link onClick={toggleClose} to="/finances">
            <Translate contentKey="global.menu.admin.invoice" />
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthorizedMenu;
