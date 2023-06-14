import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import block from 'bem-css-modules';
import { langs } from '../../utils/config';
import Text, { TextTag, TextType } from '../Text/Text';
import styles from './LanguageSelector.module.css';

const b = block(styles);

export enum LanguageSelectorTypes {
  row = 'row',
}

type Props = {
  type?: LanguageSelectorTypes;
  className?: string;
};

const LanguageSelector: FC<Props> = ({ type = undefined, className }) => {
  const { i18n } = useTranslation();

  return (
    <div className={cn(b({ type }), className)}>
      <ul className={b('list')}>
        {langs.map(({ key, nativeName }) => (
          <li key={key} className={b('item')}>
            <button
              type="button"
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
