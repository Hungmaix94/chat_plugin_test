import React, { useState } from 'react';
import { AvForm } from 'availity-reactstrap-validation';
import { Button, Col, Row } from 'reactstrap';
import PartForm from 'app/shared/layout/FormGenerator/Components/PartForm';
import Translate from 'app/shared/layout/Translation/translate';

export default function StepForm(props) {
  const {
    model = {},
    onInvalidSubmit,
    onSubmit,
    fields,
    titleFields,
    children,
    titlePrevButton,
    index,
    isHideSaveChange,
    titleNextButton,
    onClickPrev,
    isHidePreview,
    isHideNext,
    subTitle,
    titleSave,
    avFormRef,
  } = props;

  const [submitType, setSubmitType] = useState();

  const handleSubmit = (event, errors, values) => {
    onSubmit(event, errors, values, submitType);
  };
  const onClickButton = type => () => {
    setSubmitType(type);
  };
  return (
    <div>
      <AvForm model={model} onSubmit={handleSubmit} onInvalidSubmit={onInvalidSubmit} ref={avFormRef}>
        <Row>
          {fields && <PartForm fields={fields} title={titleFields} subTitle={subTitle} />}
          {children}
        </Row>
        <Row className="justify-content-between mt-4">
          {index > 0 && !isHidePreview && (
            <Col className="d-flex justify-content-center d-sm-block mb-1 mb-sm-0">
              <Button
                onClick={onClickPrev}
                color="third-type"
                className="text-uppercase float-left btn-default-size"
                id="stepper-button-prev"
              >
                <Translate contentKey={titlePrevButton || 'entity.action.previous'}>Previous</Translate>
              </Button>
            </Col>
          )}
          {!isHideSaveChange && (
            <Col className="d-flex justify-content-center d-sm-block mb-1 mb-sm-0">
              <Button
                type="submit"
                onClick={onClickButton('save')}
                color="first-type"
                className="text-uppercase float-right btn-default-size"
                id="stepper-button-save"
              >
                <Translate contentKey={titleSave || 'entity.action.save'}>Save</Translate>
              </Button>
            </Col>
          )}
          {!isHideNext && (
            <Col className="d-flex justify-content-center d-sm-block mb-1 mb-sm-0">
              <Button
                color="first-type"
                onClick={onClickButton('next')}
                className="text-uppercase float-right btn-default-size"
                id="stepper-button-next"
                type="submit"
              >
                <Translate contentKey={titleNextButton || 'entity.action.next'}>Next</Translate>
              </Button>
            </Col>
          )}
        </Row>
      </AvForm>
    </div>
  );
}
