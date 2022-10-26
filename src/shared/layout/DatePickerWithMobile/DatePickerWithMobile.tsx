import React, { FC } from 'react';
import DatePickerMobileInput from 'app/shared/layout/DatePickerWithMobile/Components/DatePickerMobileInput';
import DatePicker, { registerLocale } from 'react-datepicker';
import Translate, { translate } from 'app/shared/layout/Translation/translate';
import RequiredAsterisk from 'app/shared/layout/RequiredAsterisk';
import { Label } from 'reactstrap';
import { AvField, AvGroup } from 'availity-reactstrap-validation';
import { APP_DATEPICKER_DATE_FORMAT } from 'app/config/constants';
import { mapLocalToDateTime } from 'app/shared/util/date-utils';
import pl from 'date-fns/locale/pl';
import { useAppSelector } from 'app/config/store';
import './datepicker.scss';

registerLocale('pl', pl);

const validateInvalidField = translate('global.messages.validate.invalidField') || 'This field is invalid';

export interface IDatePickerWithMobileProps {
  name: string;
  id?: string;
  selected?: any;
  onChange?: any;
  dateFormat?: string;
  minDate?: any;
  maxDate?: any;
  startDate?: any;
  endDate?: any;
  selectsEnd?: any;
  isClearable?: boolean;
  withTime?: boolean;
  labelTranslate?: string;
  timeIntervals?: any;
  showTimeSelect?: any;
  isRequired?: boolean;
  isDisabled?: boolean;
  shouldCloseOnSelect?: boolean;
  label?: any;
  labelClassName?: string;
  validate?: any;
  selectsStart?: boolean;
  disableLabelField?: boolean;
  afterLabelContent?: any;
  showTimeInput?: any;
  className?: string;
  selectsRange?: boolean;
  showTimeSelectOnly?: boolean;
  minTime?: any;
  maxTime?: any;
  filterTime?: any;
}

const DatePickerWithMobile: FC<IDatePickerWithMobileProps> = (props: IDatePickerWithMobileProps) => {
  const currentLocale = useAppSelector(state => state.locale.currentLocale);
  const {
    onChange,
    selected,
    withTime,
    labelTranslate,
    isRequired,
    maxDate,
    minDate,
    dateFormat,
    label,
    isDisabled,
    name,
    validate,
    disableLabelField,
    afterLabelContent,
    className = '',
    labelClassName = '',
    isClearable,
    selectsRange,
    showTimeSelectOnly,
    maxTime,
    minTime,
  } = props;
  return (
    <AvGroup className={`custom-input ${className}`}>
      {!disableLabelField && (
        <Label className={labelClassName}>
          <span>
            {label ? label : labelTranslate ? <Translate contentKey={labelTranslate} /> : null}{' '}
            {isRequired && labelTranslate && <RequiredAsterisk />} {afterLabelContent}
          </span>
        </Label>
      )}
      <div className={'form-group'}>
        <DatePicker
          {...{
            ...props,
            ...(selected ? { selected } : {}),
          }}
          minTime={minTime}
          maxTime={maxTime}
          showTimeSelectOnly={showTimeSelectOnly}
          selectsRange={selectsRange}
          isClearable={!isDisabled && isClearable}
          timeCaption="Time"
          dateFormat={mapLocalToDateTime(currentLocale, dateFormat || APP_DATEPICKER_DATE_FORMAT)}
          required={isRequired}
          disabled={isDisabled}
          timeFormat="HH:mm"
          locale={currentLocale}
          customInput={<DatePickerMobileInput withTime={withTime || props.showTimeInput} max={maxDate} min={minDate} />}
        />
      </div>
      <AvField errorMessage={validateInvalidField} type="hidden" name={name} value={selected || ''} validate={validate} />
    </AvGroup>
  );
};

export default DatePickerWithMobile;
