import React, { FC } from 'react';
import './PageWrapper.scss';
import PageHeader from 'app/shared/layout/PageWrapper/PageHeader';
import { Row } from 'reactstrap';

const PageWrapper: FC = () => {
  return (
    <div>
      <PageHeader titleContentKey="userManagement.home.supervisorTitle" />
      <Row className="justify-content-center"></Row>
    </div>
  );
};

export default PageWrapper;
