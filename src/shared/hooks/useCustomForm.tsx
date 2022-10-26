import React, { useRef, useState } from 'react';
import { cloneDeep, compact, get, remove, set, unset } from 'lodash';

interface ICustomForm {
  search?: (params) => void;
  initFields?: any;
}

const useCustomForm = ({ search, initFields }: ICustomForm) => {
  const [fieldsState, setFieldsState] = useState<any>(initFields);
  const formRef = useRef(null);

  const onChangeSelect = (objSelected, meta) => {
      setFieldsState(prev => ({ ...prev, [meta.name]: objSelected }));
  };

  const onChangeDate = type => date => {
    setFieldsState(prev => ({ ...prev, [type]: date }));
  };
  const onChangeInput = ev => setFieldsState(prev => ({ ...prev, [ev.target.name]: ev.target.value }));

  const onClear = () => {
    setFieldsState(initFields);
    formRef?.current?.reset();
    search && search({});
  };

  return {
    fieldsState,
    setFieldsState,
    onClear,
    formRef,
    onChangeDate,
    onChangeSelect,
    onChangeInput,
  };
};

export const useCustomFormArr = ({ search, initFields }: ICustomForm) => {
  const [fieldsState, setFieldsState] = useState<any>(initFields);
  const formRef = useRef(null);

  const onChangeInput = ev =>
    setFieldsState(prev => {
      const newState = cloneDeep(prev);
      set(newState, `${ev.target.name}`, ev.target.value);
      return newState;
    });

  const onChangeSelect = (objSelected, meta) => {
    setFieldsState(prev => {
      const newState = cloneDeep(prev);
      set(newState, `${meta.name}`, objSelected);
      return newState;
    });
  };

  const onAddRow = (key, defaultValue = {}) => {
    setFieldsState(prev => {
      const newState = cloneDeep(prev);
      if (key) {
        const length = get(prev, key)?.length ?? 0;
        set(newState, `${key}[${length}]`, defaultValue);
        return newState;
      }

      const length = prev?.length;
      set(newState, `[${length}]`, defaultValue);
      return newState;
    });
  };

  const onRemoveRow = (key, index) => {
    setFieldsState(prev => {
      const newState = cloneDeep(prev);
      if (key) {
        unset(newState, `${key}.[${index}]`);
        set(newState, key, compact(get(newState, key)));
        return newState;
      }
      remove(newState, function (item, i) {
        return i === index;
      });
      return newState;
    });
  };

  const onClear = () => {
    setFieldsState(initFields);
    formRef?.current?.reset();
    search && search({});
  };

  return {
    fieldsState,
    setFieldsState,
    onClear,
    formRef,
    onChangeInput,
    onChangeSelect,
    onAddRow,
    onRemoveRow,
  };
};

export default useCustomForm;
