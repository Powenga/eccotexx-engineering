import { LangKey, LangNativeName } from './types';

export enum KeyboardKeys {
  enter = 'Enter',
  space = ' ',
  esc = 'Escape',
}

export const MODAL_ROOT_SELECTOR = '#modal';

export const { REACT_APP_API_URL = 'https://eccotexx-eng.com/api' } =
  process.env;

export const langs = [
  { key: LangKey.en, nativeName: LangNativeName.en },
  { key: LangKey.ru, nativeName: LangNativeName.ru },
];
