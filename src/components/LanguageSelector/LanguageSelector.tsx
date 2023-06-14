import { useTranslation } from 'react-i18next';
import block from 'bem-css-modules';
import { langs } from '../../utils/config';
import Text, { TextTag, TextType } from '../Text/Text';
import styles from './LanguageSelector.module.css';

const b = block(styles);

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className={b()}>
      <ul className={b('list')}>
        {langs.map(({ key, nativeName }) => (
          <li key={key} className={b('item')}>
            <button
              onClick={(event) => {
                event.preventDefault();
                i18n.changeLanguage(key);
              }}
              className={b('button', {
                current: key === i18n.resolvedLanguage,
              })}
              aria-label={nativeName}
              value={key}
            >
              <Text Tag={TextTag.span} type={TextType.lang}>
                {key}
              </Text>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
