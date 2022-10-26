import { Button } from 'reactstrap';
import Translate from 'app/shared/layout/Translation/translate';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

interface IUnauthorizedMenu {
  toggleClose: () => void;
}

const UnauthorizedMenu: FC<IUnauthorizedMenu> = ({ toggleClose }: IUnauthorizedMenu) => {
  const history = useHistory();

  const handleOnClickSignIn = () => {
    history.push('/login');
    toggleClose();
  };

  const handleOnClickRegister = () => {
    history.push('/account/register');
    toggleClose();
  };

  return (
    <>
      <Button className="sign-in-button mr-ml" onClick={handleOnClickSignIn} color="first-type">
        <Translate contentKey="login.form.button" />
      </Button>
      <Translate className="text-inner-line mr-ml" contentKey="global.menu.topNav.noAccounts" />
      <Button className="register-button mt-5 mr-ml" onClick={handleOnClickRegister} color="only-text">
        <Translate contentKey="global.menu.topNav.createAnAccount" />
      </Button>
    </>
  );
};

export default UnauthorizedMenu;
