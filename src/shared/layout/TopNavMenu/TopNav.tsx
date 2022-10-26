import React, { useEffect, useState } from 'react';
import { AccountMenu } from './AccountMenu';
import './navbar.scss';
import { Navbar, NavbarBrand } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import HomeMenu from 'app/shared/layout/TopNavMenu/Components/HomeMenu/HomeMenu';

const TopNav: React.FC = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/' || pathname === '/welcome';
  const [withBg, setWithBig] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setWithBig(window.pageYOffset > 200));
    }
  }, []);

  return (
    <div>
      <Navbar expand="lg" fixed="top" className={isHomePage && !withBg ? 'home-page-mode' : ''}>
        <NavbarBrand href="/">
          <div className="brand-icon">
            <img src="content/images/logo-dark.png" alt="Logo" />
          </div>
        </NavbarBrand>
        <HomeMenu />
        <div className="ml-auto d-flex align-items-center">
          <AccountMenu />
        </div>
      </Navbar>
    </div>
  );
};

export default TopNav;
