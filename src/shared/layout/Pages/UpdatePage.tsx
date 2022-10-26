import React, { useEffect, useMemo } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from 'app/shared/layout/Loader/Loader';
import PageHeader from 'app/shared/layout/PageWrapper/PageHeader';

export interface IUpdatePageProps {
  isLoading?: boolean;
  i18nGroupPrefix: string;
  children?: React.ReactNode;
  withAppPrefix?: boolean;
  reset: () => void;
  getEntity: (id: string) => void;
  pathName: string;
  pathArray?: any;
  isReadOnly?: boolean;
}

export const UpdatePage: React.FC<IUpdatePageProps> = ({
  isLoading,
  i18nGroupPrefix,
  children,
  withAppPrefix,
  getEntity,
  reset,
  pathArray,
  pathName,
  isReadOnly
}: IUpdatePageProps) => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const isNew = useMemo(() => !id, [id]);
  const pageTitle = useMemo(
    () => `${withAppPrefix ? 'proEcoApp.' : ''}${i18nGroupPrefix}.${isReadOnly ? 'detail.title' : isNew ? 'home.createLabel' : 'home.editLabel'}`,
    [withAppPrefix, i18nGroupPrefix, isNew, isReadOnly]
  );

  pathArray = useMemo(
    () => pathArray ? pathArray : [
      {path: 'admin/dashboard', translation: 'global.menu.admin.mainPage'},
      {path: 'admin/dict', translation: 'global.menu.admin.dictionaries'},
      {
        path: `admin/dict/${pathName}`,
        translation: `${withAppPrefix ? 'proEcoApp.' : ''}${i18nGroupPrefix}.home.title`
      },
      {path: '', translation: pageTitle},
    ],
    [pageTitle, pathName]
  );

  useEffect(() => {
    return () => dispatch(reset());
  }, []);

  useEffect(() => {
    if (!id) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, [id]);

  return (
    <div className="app-page-size page-with-table-wrapper">
      <Row className="justify-content-center h-100">
        <Col xs={12} lg={12} className="h-100">
          <PageHeader
            titleContentKey={pageTitle}
            subTitleContentKey={`${withAppPrefix ? 'proEcoApp.' : ''}${i18nGroupPrefix}.new.subtitle`}
            pathArray={pathArray}
          />
        </Col>
        <Col xs={12} md={6}>
          <Card>{isLoading ? <Loader /> : children}</Card>
        </Col>
      </Row>
    </div>
  );
};
