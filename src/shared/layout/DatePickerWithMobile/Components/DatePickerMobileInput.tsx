import React from 'react';
import { get, omit } from 'lodash';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export interface IDatePickerMobileInputState {
  readOnly: boolean;
  width: any;
}

export interface IDatePickerMobileInputProps {
  changeValue?: any;
  onChange?: any;
  value?: any;
  withTime?: boolean;
  min?: any;
  max?: any;
}

export default class DatePickerMobileInput extends React.Component<IDatePickerMobileInputProps, IDatePickerMobileInputState> {
  state: IDatePickerMobileInputState = {
    readOnly: false,
    width: window.innerWidth,
  };

  UNSAFE_componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  onFocus = () => {
    this.setState({ readOnly: true });
  };

  onBlur = () => {
    this.setState({ readOnly: false });
  };

  onKeyDown = event => {
    const value = get(event, 'target.value', null);
    if (value) {
      this.props.changeValue(moment(value));
    }
  };
  render() {
    const { width } = this.state;
    const { value, withTime } = this.props;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <div>
          <span className={'react-datepicker-mobile-input'}>{value}</span>
          <input
            {...omit(this.props, ['changeValue', 'withTime'])}
            style={{ color: 'transparent' }}
            onInput={this.onKeyDown}
            {...(withTime ? { type: 'datetime-local' } : { type: 'date' })}
            onChange={null}
            autoComplete={'off'}
            value={''}
          />
        </div>
      );
    }

    return (
      <div className="input-wrapper-with-append">
        <input
          {...omit(this.props, ['changeValue', 'withTime'])}
          className={'form-control'}
          autoComplete={'off'}
          value={value}
          onChange={e => this.props.onChange(e.target.value)}
        />
        {!value && (
          <div className="input-append-text">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
        )}
      </div>
    );

    return (
      <input
        {...omit(this.props, ['changeValue', 'withTime'])}
        className={'form-control'}
        autoComplete={'off'}
        value={value}
        onChange={e => this.props.onChange(e.target.value)}
      />
    );
  }
}
