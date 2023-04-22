import en from './trans/en.json';
import pl from './trans/pl.json';

import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

const resources = {
  en: {
    tranlatione: en,
  },
  pl: {
    tranlatione: pl,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: JSON.parse(localStorage.getItem('language')),
  fallbacklng: 'en',
});

export default i18next;
