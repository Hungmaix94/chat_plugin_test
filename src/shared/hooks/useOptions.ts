import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { TRANSLATED_DICTS } from 'app/entities/translate-dict-item/constants';
import { TranslatorContext } from 'react-jhipster';
import { getOptions } from 'app/shared/util/select-utils';
import { getDictEnumsIfNeeded } from 'app/entities/translate-dict-item/translate-dict-item.reducer';
import { camelCase } from 'lodash';

export const useOptions = key => {
  const keyDict = TRANSLATED_DICTS[key];
  const dispatch = useAppDispatch();

  const dicts = useAppSelector(state => state?.translateDictItem?.dictEnums[keyDict] || []);
  const options = useMemo(() => getOptions(dicts, keyDict), [dicts, TranslatorContext.context.locale]);

  useEffect(() => {
    dispatch(getDictEnumsIfNeeded(keyDict));
  }, []);

  return {
    [camelCase(key) + 'Dicts']: dicts,
    [camelCase(key) + 'Options']: options,
  };
};
