import React from 'react';
import DatePickerWithMobile from 'app/shared/layout/DatePickerWithMobile/DatePickerWithMobile';
import { Col, Row } from 'reactstrap';
import { PartFormTitle } from 'app/shared/layout/FormGenerator/Components/PartFormTitle';
import Translate from 'app/shared/layout/Translation/translate';
import { IDefaultField } from 'app/shared/layout/FormGenerator/FormGenerator';
import { renderCheckbox, renderCheckboxGroupCustom, renderRadioGroup } from 'app/shared/layout/FormGenerator/Components/Checkboxes';
import CustomInput from '../../CustomInput/CustomInput';
import EditorComponent from 'app/shared/layout/FormGenerator/Components/EditorComponent';
import { omit } from 'lodash';

export interface IPartFormProps {
  title?: string;
  fields?: IDefaultField[];
  titleClass?: string;
  subTitle?: any;
  number?: number;
  secondSubtitle?: string;
  classNameSecondSubtitle?: string;
  childrenTitlePart?: React.ReactNode;
  partFormTitleClass?: string;
  formCol?: number;
}

export default function PartForm({
  title = '',
  fields,
  titleClass = '',
  subTitle,
  secondSubtitle,
  number = 0,
  classNameSecondSubtitle = '',
  childrenTitlePart,
  partFormTitleClass = '',
  formCol = 12
}: IPartFormProps) {
  return (
    <Col xs={formCol}>
      {(title || subTitle) && (
        <div className={titleClass}>
          <PartFormTitle
            title={title}
            subTitle={subTitle}
            {...(number && {
              beforeChildren: <span className="part-number mr-1">{number}.</span>,
            })}
            childrenTitlePart={childrenTitlePart}
            partFormTitleClass={partFormTitleClass}
          />
        </div>
      )}
      <Row className="inputs-wrapper">
        {secondSubtitle && (
          <Col sm={12}>
            <div className={`second-subtitle ${classNameSecondSubtitle}`}>
              <Translate contentKey={secondSubtitle} />
            </div>
          </Col>
        )}
        {fields.map((field, i) => {
          return field.space || field.type === 'space' ? (
            <Col key={i} {...(field.col || { sm: 12 })} className={`${field?.classCol || ''} ${field.type === 'hidden' ? 'h-0' : ''}`}>
              {field?.label}
            </Col>
          ) : (
            <Col key={i} {...(field.col || { sm: 12 })} className={`${field?.classCol || ''} ${field.type === 'hidden' ? 'h-0' : ''}`}>
              {field.type === 'checkbox' ? (
                renderCheckbox(omit(field, 'classCol'))
              ) : field.type === 'editor' ? (
                <EditorComponent {...omit(field, 'classCol')} />
              ) : field.type === 'datePicker' ? (
                <DatePickerWithMobile labelTranslate={field.label} {...field} {...field.datePickerProps} />
              ) : field.type === 'customComponent' ? (
                field.component
              ) : field.type === 'radioGroup' ? (
                renderRadioGroup(omit(field, 'classCol'))
              ) : field.type === 'checkboxGroup' ? (
                renderCheckboxGroupCustom(omit(field, 'classCol'))
              ) : (
                <CustomInput type={field.type || 'text'} {...omit(field, 'classCol')} />
              )}
            </Col>
          );
        })}
      </Row>
    </Col>
  );
}
