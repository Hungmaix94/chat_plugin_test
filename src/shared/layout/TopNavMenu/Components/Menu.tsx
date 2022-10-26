import React, { FC, useMemo } from 'react';
import Translate from '../../Translation/translate';
import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import LocaleMenu from '../../LocaleMenu/LocaleMenu';
import { useAppSelector } from 'app/config/store';
import AuthorizedMenu from 'app/shared/layout/TopNavMenu/Components/authorized';
import UnauthorizedMenu from 'app/shared/layout/TopNavMenu/Components/unauthorized';
import { Link } from 'react-router-dom';

interface IMenu {
  isOpen: boolean;
  isUserProfile: boolean;
  toggleClose: () => void;
}

const Menu: FC<IMenu> = ({ isOpen, toggleClose, isUserProfile }: IMenu) => {
  const className = useMemo(() => `menu ${isOpen ? 'show' : ''}`, [isOpen]);
  const classNameBg = useMemo(() => `modal-backdrop menu-backdrop fade ${isOpen ? 'show' : ''}`, [isOpen]);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);

  return (
    <div className="d-block">
      <div className={className}>
        <div className="logo">
          <img src="content/images/logo-dark.png" alt="Logo" />
        </div>
        <div className="body-wrapper">
          <div className="authorized-menu d-lg-none">
            <Link className="home-menu-item" to="/offer">
              <Translate contentKey="global.menu.homePage.offer" />
            </Link>
            <Link to="/our-services">
              <Translate contentKey="global.menu.homePage.services" />
            </Link>
            <Link to="/about-us">
              <Translate contentKey="global.menu.homePage.aboutUs" />
            </Link>
            <Link to="/contact">
              <Translate contentKey="global.menu.homePage.contact" />
            </Link>
          </div>
          {isAuthenticated ? (
            <AuthorizedMenu toggleClose={toggleClose} isUserProfile={isUserProfile} />
          ) : (
            <UnauthorizedMenu toggleClose={toggleClose} />
          )}
          <div className="language-wrapper mr-ml">
            <Translate contentKey="global.menu.language" /> <LocaleMenu />
          </div>
          <div className="media-wrapper">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </div>
      <div onClick={toggleClose} className={classNameBg} />
    </div>
  );
};

export default Menu;
