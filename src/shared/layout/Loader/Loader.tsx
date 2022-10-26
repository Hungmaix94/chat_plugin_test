import React from 'react';
import { Spinner } from 'reactstrap';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <Spinner style={{ width: '3rem', height: '3rem' }} />
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader">
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </div>
    </div>
  );
};

export default Loader;
