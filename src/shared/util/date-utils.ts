import dayjs from 'dayjs';

import * as Constants from 'app/config/constants';
import { APP_LOCAL_DATE_FORMAT, APP_LOCAL_DATETIME_FORMAT } from 'app/config/constants';

export const convertDateTimeFromServer = date => (date ? dayjs(date).format(APP_LOCAL_DATETIME_FORMAT) : null);
export const convertDateFromServer = date => (date ? dayjs(date).format(APP_LOCAL_DATE_FORMAT) : null);

export const convertDateTimeToServer = date => (date ? dayjs(date).toDate() : null);
export const convertDateTimeFrom = date =>
  date && date instanceof Date ? dayjs(date).set('hour', 0).set('minute', 0).set('second', 0).toDate() : null;
export const convertDateTimeTo = date =>
  date && date instanceof Date ? dayjs(date).set('hour', 23).set('minute', 59).set('second', 59).toDate() : null;

export const displayDefaultDateTime = () => dayjs().startOf('day').format(APP_LOCAL_DATETIME_FORMAT);
export function mapLocalToDateTime(local: string, format: string) {
  if (local === 'pl') {
    switch (format) {
      case Constants.APP_LOCAL_DATE_FORMAT:
        return 'YYYY-MM-DD';
      case Constants.APP_DATE_FORMAT:
        return 'YYYY-MM-DD HH:mm';
      case Constants.APP_TIMESTAMP_FORMAT:
        return 'YYYY-MM-DD HH:mm:ss';

      default:
        return format;
    }
  }

  if (local === 'pl') {
    switch (format) {
      case Constants.APP_LOCAL_DATE_FORMAT:
        return 'DD/MM/YY';
      case Constants.APP_DATE_FORMAT:
        return 'DD/MM/YY HH:mm';
      case Constants.APP_TIMESTAMP_FORMAT:
        return 'DD/MM/YY HH:mm:ss';

      default:
        return format;
    }
  }
  return format;
}
