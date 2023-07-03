import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        slides: [],
        navigation: [{ id: 'test', content: 'nav-test-link', to: '#' }],
        intro: { content: [] },
        features: [],
        products: { entities: [] },
        objects: { entities: [] },
        advantages: { entities: [] },
        interaction: { ways: [] },
        contacts: { entities: [] },
        footer: { paragraphs: [] },
        policy: {
          paragraphs: [
            { title: 'test-content-title', content: ['test-content'] },
          ],
        },
      },
    },
  },
});

export default i18next;
