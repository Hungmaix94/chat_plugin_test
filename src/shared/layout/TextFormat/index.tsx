import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextFormat } from 'react-jhipster';
import { mapLocalToDateTime } from 'app/shared/util/date-utils';

export interface ICustomTextFormat {
  format?: string;
  value: any;
  type: 'date' | 'number';
  currentLocale: string;
  blankOnInvalid?: boolean;
}

class CustomTextFormat extends Component<ICustomTextFormat> {
  render() {
    const { currentLocale, format, ...rest } = this.props;
    return <TextFormat {...rest} format={mapLocalToDateTime(currentLocale, format)} />;
  }
}

const mapStateToProps = state => ({
  currentLocale: state.locale.currentLocale,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomTextFormat);
