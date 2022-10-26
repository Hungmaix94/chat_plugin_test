import React from 'react';
import Translate, { translate } from 'app/shared/layout/Translation/translate';
import { orderBy } from 'lodash';

export interface IOption {
  id?: number;
  key?: number;
  value?: number;
  enumKey?: number;
  translateLabel?: any;
  label: string;
  description: string;
}

export const getOptions = (list, dictType, addField?) => {
  return (list || []).map(otherEntity => ({
    id: otherEntity.id,
    key: otherEntity.id,
    value: otherEntity.id,
    enumKey: otherEntity?.enumKey,
    translateLabel: <Translate contentKey={`dynamic.${dictType}.${otherEntity.enumKey}.itemTranslation`} />,
    label: translate(`dynamic.${dictType}.${otherEntity.enumKey}.itemTranslation`),
    description: translate(`dynamic.${dictType}.${otherEntity.enumKey}.translateDescription`),
    [addField]: otherEntity[addField],
  }));
};

export const getOptionsWithDisabled = (list, dictType, addField?) => {
  return (list || []).map(otherEntity => ({
    id: otherEntity.id,
    key: otherEntity.id,
    value: otherEntity.id,
    enumKey: otherEntity?.enumKey,
    translateLabel: <Translate contentKey={`dynamic.${dictType}.${otherEntity.enumKey}.itemTranslation`} />,
    label: translate(`dynamic.${dictType}.${otherEntity.enumKey}.itemTranslation`),
    description: translate(`dynamic.${dictType}.${otherEntity.enumKey}.translateDescription`),
    isDisabled: !otherEntity?.isActive,
    [addField]: otherEntity[addField],
  }));
};

export const getOptionsAllDataWithoutDisabled = (list, dictType, addField?, isDetail?: boolean) => {
  return (list || []).filter(item => isDetail ? true : item.isActive).map(otherEntity => ({
    ...otherEntity,
    id: otherEntity.id,
    key: otherEntity.id,
    value: otherEntity.id,
    enumKey: otherEntity?.enumKey,
    translateLabel: <Translate contentKey={`dynamic.${dictType}.${otherEntity.enumKey}.itemTranslation`} />,
    label: translate(`dynamic.${dictType}.${otherEntity.enumKey}.itemTranslation`),
    description: translate(`dynamic.${dictType}.${otherEntity.enumKey}.translateDescription`),
    [addField]: otherEntity[addField],
  }));
};

export interface IField {
  key: number;
  value: number;
  label: string;
  enumKey?: string;
}

export const getOptionsByName = list => {
  return (list || []).map(otherEntity => ({
    key: otherEntity.id,
    value: otherEntity.id,
    enumKey: otherEntity?.enumKey,
    label: otherEntity.name,
  }));
};

export const getOptionsEnumkey = (list, dictType) => {
  return (list || []).map(otherEntity => ({
    key: otherEntity.id,
    value: otherEntity.enumKey,
    translateLabel: <Translate contentKey={`dynamic.${dictType}.${otherEntity.enumKey}.itemTranslation`} />,
    label: translate(`dynamic.${dictType}.${otherEntity.enumKey}.itemTranslation`),
  }));
};

export const getOptionsBySerialNumber = list => {
  return (list || []).map(otherEntity => ({
    key: otherEntity.deviceId,
    value: otherEntity.deviceId,
    id: otherEntity.deviceId,
    label: otherEntity.serialNumber,
  }));
};

export const getOptionsSortedByLabel = getOptionsAction => {
  return orderBy(getOptionsAction, 'label', 'asc');
};

export const DEVICE_OPTIONS = ['beacon', 'sensor', 'all'].map(device => ({
  id: device,
  key: device,
  value: device,
  enumKey: device,
  translateLabel: <Translate contentKey={`global.menu.entities.${device}`} />,
  label: translate(`global.menu.entities.${device}`),
}));

export const getOptionsForOrganizationStructure = list => {
  return list?.map(otherEntity => {
    return {
      id: otherEntity.id,
      key: otherEntity.id,
      value: otherEntity?.id,
      enumKey: otherEntity?.organizationStructureTypeId,
      label: otherEntity.name,
    };
  });
};

export const getOptionsForOrganizationStructureWithParent = (list, parentList) => {
  return list?.map(otherEntity => {
    const parent = parentList.find(item => item.id === otherEntity.parentOrganizationStructureId);

    return {
      id: otherEntity.id,
      key: otherEntity.id,
      value: otherEntity?.id,
      enumKey: otherEntity?.organizationStructureTypeId,
      label: `${otherEntity.name} ${parent ? `- ${parent.name}` : ''}`,
    };
  });
};

export const onChangeSelect = (setFieldsState: (state) => void, isMulti?: boolean, name?: string) => (objSelected, meta) => {
  let newObjSelected = null;
  if (objSelected) {
    if (isMulti) {
      newObjSelected = (objSelected || []).map(obj => ({ ...obj, label: obj?.translateLabel || obj?.label }));
    } else newObjSelected = { ...objSelected, label: objSelected?.translateLabel || objSelected?.label };
  }
  setFieldsState(prev => ({ ...prev, [name || meta.name]: newObjSelected }));
};

export const getValueFromOptions = (setFieldsState, id, entity, fieldsState, options, fieldValueName) => {
  if (id && entity?.id && id === entity.id.toString() && options?.length && !fieldsState[fieldValueName]) {
    const option = options.find(item => item.value === entity[fieldValueName]);
    if (option) option.label = option.translateLabel;
    setFieldsState(prev => ({ ...prev, [fieldValueName]: option }));
  }
};
