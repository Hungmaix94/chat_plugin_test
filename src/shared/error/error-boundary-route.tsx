import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from 'app/shared/error/error-boundary';

interface IErrorBoundaryRoute extends RouteProps {
  componentProps?: any;
}

export const ErrorBoundaryRoute = ({ component: Component, componentProps, ...rest }: IErrorBoundaryRoute) => {
  const encloseInErrorBoundary = props => (
    <ErrorBoundary>
      <Component {...props} {...componentProps} />
    </ErrorBoundary>
  );

  if (!Component) throw new Error(`A component needs to be specified for path ${(rest as any).path}`);

  return <Route {...rest} render={encloseInErrorBoundary} />;
};

export default ErrorBoundaryRoute;
