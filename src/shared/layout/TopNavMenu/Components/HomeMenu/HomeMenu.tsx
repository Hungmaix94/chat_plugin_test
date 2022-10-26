import { Nav } from 'reactstrap';
import Translate from 'app/shared/layout/Translation/translate';
import React from 'react';
import './HomeMenu.scss';
import { Link } from 'react-router-dom';

const HomeMenu = () => {
  return (
    <Nav className="ml-auto d-none d-lg-block home-menu" navbar>
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
    </Nav>
  );
};
export default HomeMenu;
