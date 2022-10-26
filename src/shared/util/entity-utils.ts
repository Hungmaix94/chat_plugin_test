import pick from 'lodash/pick';
import { IPaginationBaseState } from 'react-jhipster';
import { pickBy, upperCase } from 'lodash';
import { translate } from '../layout/Translation/translate';

/**
 * Removes fields with an 'id' field that equals ''.
 * This function was created to prevent entities to be sent to
 * the server with an empty id and thus resulting in a 500.
 *
 * @param entity Object to clean.
 */
export const cleanEntity = entity => {
  const keysToKeep = Object.keys(entity).filter(k => !(entity[k] instanceof Object) || (entity[k]['id'] !== '' && entity[k]['id'] !== -1));

  return pick(entity, keysToKeep);
};

/**
 * Simply map a list of element to a list a object with the element as id.
 *
 * @param idList Elements to map.
 * @returns The list of objects with mapped ids.
 */
export const mapIdList = (idList: ReadonlyArray<any>) => idList.filter((id: any) => id !== '').map((id: any) => ({ id }));

export const overridePaginationStateWithQueryParams = (paginationBaseState: IPaginationBaseState, locationSearch: string) => {
  const params = new URLSearchParams(locationSearch);
  const page = params.get('page');
  const sort = params.get('sort');
  if (page && sort) {
    const sortSplit = sort.split(',');
    paginationBaseState.activePage = +page;
    paginationBaseState.sort = sortSplit[0];
    paginationBaseState.order = sortSplit[1];
  }
  return paginationBaseState;
};

/**
 * remove elements have null or undefine or '' value in object, without remove elements have 0 value
 * @param obj
 */
export const omitEmpty = obj => pickBy(obj, v => v !== null && v !== undefined && v !== '');

/**
 * update or create element in array by primary key
 * @param array
 * @param element
 * @param {string} primaryKey
 */

export const updateOrCreate = (array, element, primaryKey = 'id') => {
  const i = array.findIndex(_element => _element[primaryKey] === element[primaryKey]);
  if (i > -1) array[i] = element;
  else array.push(element);
};

export const findByKey = (obj, path, val) => {
  let result = '';
  Object.keys(obj).map(key => {
    if (obj[key]?.[path] === val) result = key;
  });
  return obj?.[result];
};

const returnCurrencyFormat = (amount) => `${Intl.NumberFormat('fr-CA', { minimumFractionDigits: 0 }).format(amount)}`;

export const returnVatRate = (vats, vatTypeId) => vats?.find(item => item?.vatTypeId === vatTypeId)?.vatRate || 0;

export const convertCurrency = (amount, vatRate = 0) => {
  const amountNumber = amount ? Number(amount) : 0;
  const currencyUnit = translate("currency.PLN");
  const allAmount = amountNumber + (amountNumber * vatRate);
  if (amount !== null && amount !== undefined) {
    return `${returnCurrencyFormat(allAmount)} ${currencyUnit}`;
  }
  return;
};

export const unique = (arr, keyProps) => {
  const kvArray = arr.map(entry => {
    const key = keyProps.map(k => entry[k]).join('|');
    return [key, entry];
  });
  const map = new Map(kvArray);
  return Array.from(map.values());
}

export const convertEnumKey = name => {
  return upperCase(name)?.split(' ')?.join('_');
};
