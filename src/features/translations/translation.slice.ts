import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {I18n} from 'i18n-js';
import storage from '../../utils/storage';

import en from '../../translations/en.json';
import de from '../../translations/de.json';
import es from '../../translations/es.json';
import fr from '../../translations/fr.json';

const i18n = new I18n({
  en,
  es,
  de,
  fr,
});

export interface TranslateState {
  locale: string;
  i18n: any;
}

const INITIAL_STATE: TranslateState = {
  locale: '',
  i18n: i18n,
};

const translationSlice = createSlice({
  name: 'translation',
  initialState: INITIAL_STATE,
  reducers: {
    setLocale: (state, {payload: locale}: PayloadAction<string>) => {
      state.locale = locale;
      i18n.defaultLocale = 'en';
      i18n.locale = locale;
      storage.storeInfo('LOCALE', locale);
      i18n.enableFallback = true;
      state.i18n = i18n;
    },
  },
});

export const {setLocale} = translationSlice.actions;
export default translationSlice.reducer;
