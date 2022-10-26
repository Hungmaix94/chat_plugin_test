import axios from 'axios';
import dayjs from 'dayjs';
import { createSlice } from '@reduxjs/toolkit';

import { AppThunk } from 'app/config/store';
import { Storage, TranslatorContext } from 'react-jhipster';
import { getDynamicTranslation } from 'app/entities/translate-dict-item/translate-dict-item.reducer';

const initialState = {
  currentLocale: '',
};

export type LocaleState = Readonly<typeof initialState>;

export const setLocale: (locale: string, refreshDynamic?: boolean) => AppThunk =
  (locale, refreshDynamic = false) =>
  async (dispatch, getState) => {
    const allLocales = ['en', 'pl'];
    for (const currLocale of allLocales) {
      if (!Object.keys(TranslatorContext.context.translations).includes(currLocale) || refreshDynamic) {
        await fetchTranslation(currLocale, dispatch, getState);
      }
    }
    dispatch(updateLocale(locale));
  };

const fetchTranslation = async (locale, dispatch, getState) => {
  const staticResponse = await axios.get(`i18n/${locale}.json?_=${I18N_HASH}`, { baseURL: '' });
  const staticTranslations = staticResponse.data;

  await dispatch(getDynamicTranslation(locale));
  const translationContext = {
    ...staticTranslations,
    dynamic: getState().translateDictItem ? getState().translateDictItem.dynamicTranslations : {},
  };
  TranslatorContext.registerTranslations(locale, translationContext);
};

export const LocaleSlice = createSlice({
  name: 'locale',
  initialState: initialState as LocaleState,
  reducers: {
    updateLocale(state, action) {
      const currentLocale = action.payload;
      if (state.currentLocale !== currentLocale) {
        dayjs.locale(currentLocale);
        TranslatorContext.setLocale(currentLocale);
        Storage.local.set('locale', currentLocale);
        Storage.session.set('locale', currentLocale);
      }
      state.currentLocale = currentLocale;
    },
  },
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/require-await
export const refreshDynamicTranslation = () => async dispatch => dispatch(setLocale(Storage.session.get('locale', 'pl'), true));

export const { updateLocale } = LocaleSlice.actions;

// Reducer
export default LocaleSlice.reducer;
