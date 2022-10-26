import React, { useMemo } from 'react';
import { get } from 'lodash';
import { useAppSelector } from 'app/config/store';

const useAccountHook = () => {
  const account = useAppSelector(state => state.authentication.account);
  const currentLocale = useAppSelector(state => state.locale.currentLocale);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const ribbonEnv = useAppSelector(state => state.applicationProfile.ribbonEnv);
  const roleIds = useMemo(() => get(account, 'roleIds', []), [account]);

  const firstName = useMemo(() => (isAuthenticated ? get(account, 'firstName') : 'Guest'), [isAuthenticated, account]);
  const username = useMemo(
    () => (isAuthenticated ? get(account, 'firstName') + ' ' + get(account, 'lastName') : 'Guest'),
    [isAuthenticated, account]
  );
  return { account, currentLocale, username, isAuthenticated, ribbonEnv, firstName, roleIds };
};

export default useAccountHook;
