import React from 'react';
import { AvForm } from 'availity-reactstrap-validation';
import Translate from 'app/shared/layout/Translation/translate';
import { Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import ButtonLoading from 'app/shared/layout/ButtonLoading/ButtonLoading';
import PartForm from './Components/PartForm';

export interface IDefaultField {
  isActive?: boolean;
  id: string;
  type?: string;
  name: string;
  readOnly?: boolean;
  col?: any;
  html?: any;
  accept?: any;
  value?: any;
  style?: any;
  src?: any;
  multiple?: boolean;
  colors?: string[];
  currentColor?: string;
  onColorChanged?: () => void;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange?: Function;
  validate?: any;
  qrCode?: string;
  label?: any;
  datePickerProps?: IDatePickerProps;
  avGroupClassName?: string;
  space?: any;
  withTooltip?: boolean;
  tooltipText?: any;
  component?: any;
  classCol?: string;
  styleCol?: any;
  options?: any;
  isInline?: any;
}

export interface IDatePickerProps {
  minDate?: any;
  maxDate?: any;
  dateFormat?: any;
  selected: any;
  withTime?: boolean;
  timeIntervals?: any;
  isClearable?: boolean;
  onChange?: () => void;
  isDisabled?: boolean;
}

interface IPartFields {
  title?: string;
  fields: Array<any>;
  preTitle?: any;
}

export interface IFormGeneratorProps {
  fields?: IDefaultField[];
  titleFields?: string;
  partsFields?: IPartFields[];
  model: any;
  isNew?: boolean;
  updating?: boolean;
  pathButtonBack?: string;
  pathButtonEdit?: string;
  titleButtonEdit?: string;
  titleEditLoadingButton?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onValidSubmit?: Function;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onInvalidSubmit?: Function;
  isSave?: boolean;
  labelTranslate?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
  onlyBackButton?: boolean;
  isDisabled?: boolean;
  isButtonsCenter?: boolean;
  classNamesButtonSave?: string;
  partsClassName?: string;
  formClassName?: string;
  isGhostButton?: boolean;
  custombutton?: any;
  forwardedRef?: any;
  number?: number;
}

export default function FormGenerator(props: IFormGeneratorProps) {
  const {
    fields,
    model,
    isNew,
    updating,
    pathButtonBack,
    pathButtonEdit,
    onValidSubmit,
    isSave,
    titleButtonEdit,
    custombutton,
    children,
    titleEditLoadingButton,
    titleFields,
    partsFields,
    onlyBackButton,
    onInvalidSubmit,
    isDisabled,
    isButtonsCenter,
    classNamesButtonSave = '',
    forwardedRef,
    partsClassName = '',
    formClassName = '',
    isGhostButton,
    number,
  } = props;
  return (
    <AvForm model={model} onValidSubmit={onValidSubmit} onInvalidSubmit={onInvalidSubmit} ref={forwardedRef} className={formClassName}>
      <Row>
        {fields && <PartForm fields={fields} title={titleFields} titleClass={partsClassName} number={number} />}
        {partsFields &&
          partsFields.map((partFields, i) => (
            <PartForm key={i} fields={partFields.fields} title={partFields.title} titleClass={partsClassName} />
          ))}
        <Col sm={12}>{children}</Col>
      </Row>
      <div
        className={`d-flex ${isGhostButton ? 'wrapper-btn-min-height' : ''} mt-4 ${
          isButtonsCenter ? 'justify-content-center' : 'justify-content-start'
        }`}
      >
        {pathButtonBack && (
          <Button
            tag={Link}
            id="cancel-save"
            to={pathButtonBack}
            replace
            color="only-border"
            className={`button btn-default-size ${onlyBackButton ? '' : 'mr-3'}`}
          >
            <Translate contentKey="entity.action.cancel">Back</Translate>
          </Button>
        )}
        {!onlyBackButton &&
          (isNew || isSave ? (
            <ButtonLoading
              updating={updating}
              disabled={isDisabled || updating}
              text={titleEditLoadingButton}
              classNames={`btn-default-size ${classNamesButtonSave}`}
            />
          ) : (
            pathButtonEdit && (
              <Button className="button btn-default-size" id="form-edit-button" tag={Link} to={pathButtonEdit} replace color="first-type">
                <Translate contentKey={titleButtonEdit || 'entity.action.edit'}>Edit</Translate>
              </Button>
            )
          ))}
      </div>
      {custombutton}
    </AvForm>
  );
}
