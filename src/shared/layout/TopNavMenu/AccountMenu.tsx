import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Translate from '../Translation/translate';
import Menu from './Components/Menu';
import './account-menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from 'app/config/store';
import { useHistory } from "react-router";

export const AccountMenu = () => {
  const history = useHistory();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const firstName = useAppSelector(state => state.authentication.account.firstName);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);

  const [isUserProfile, setIsUserProfile] = useState(false);
  const handleOpenMenu = () => setIsOpenMenu(true);

  const handleOpenUserProfile = () => {
    if (!isAuthenticated) {
      history.push('/login');
    } else {
      setIsOpenMenu(true);
      setIsUserProfile(true);
    }
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
    setIsUserProfile(false);
  };

  return (
    <div className="account-menu">
      <div onClick={handleOpenUserProfile} className="welcome-button">
        <img src="content/images/user.png" alt="user" className="header-icon"/>
        <div>
          <Translate contentKey="global.menu.welcome"/>
          {firstName ? <span>{firstName}</span> : <Translate contentKey="global.menu.logIn"/>}
        </div>
        <FontAwesomeIcon className="arrow" icon={faAngleDown}/>
      </div>
      <div>
        <img src="content/images/shopping-cart.png" alt="shopping-cart" className="header-icon"/>
      </div>
      <Button color="first-type" className="ml-3 top-button">
        <Translate contentKey={'global.menu.configurator'}/>
      </Button>
      <Button color="only-text" className="ml-3 top-button" onClick={handleOpenMenu}>
        <Translate contentKey={'global.menu.menu'}/>
      </Button>
      <Menu isOpen={isOpenMenu} toggleClose={handleCloseMenu} isUserProfile={isUserProfile}/>
    </div>
  );
};
