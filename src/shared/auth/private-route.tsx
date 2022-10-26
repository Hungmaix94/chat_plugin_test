import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAppSelector } from 'app/config/store';
import ErrorBoundary from 'app/shared/error/error-boundary';

interface IOwnProps extends RouteProps {
  hasAnyAuthorities?: any[];
  componentProps?: any;
}

export const PrivateRouteComponent = ({ component: Component, componentProps, hasAnyAuthorities = [], ...rest }: IOwnProps) => {
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const account = useAppSelector(state => state.authentication.account);
  const isAuthorized = hasAnyAuthority(account.roleIds, hasAnyAuthorities);

  const checkAuthorities = props =>
    isAuthorized ? (
      <ErrorBoundary>
        <Component {...props} {...componentProps}/>
      </ErrorBoundary>
    ) : (
      <div>
        <Redirect
          to={{
            pathname: '/',
            search: props.location.search,
            state: { from: props.location },
          }}
        />
      </div>
    );

  const renderRedirect = props => {
    return isAuthenticated ? (
      checkAuthorities(props)
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          search: props.location.search,
          state: { from: props.location },
        }}
      />
    );
  };

  if (!Component) throw new Error(`A component needs to be specified for private route for path ${(rest as any).path}`);

  return <Route {...rest} render={renderRedirect} />;
};

export const hasAnyAuthority = (authorities: any[], hasAnyAuthorities: any[]) => {
  if (hasAnyAuthorities.length === 0) {
    return true;
  }
  if (authorities && authorities.length !== 0) {
    return hasAnyAuthorities.some(auth => authorities.includes(auth));
  }
  return false;
};

/**
 * A route wrapped in an authentication check so that routing happens only when you are authenticated.
 * Accepts same props as React router Route.
 * The route also checks for authorization if hasAnyAuthorities is specified.
 */
export default PrivateRouteComponent;
