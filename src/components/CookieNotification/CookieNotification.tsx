import { FC, SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';
import block from 'bem-css-modules';
import { useTranslation } from 'react-i18next';
import { MODAL_ROOT_SELECTOR } from '../../utils/config';
import styles from './CookieNotification.module.css';
import Text, { TextStyle, TextTag, TextType } from '../Text/Text';

const b = block(styles);
const MODAL_ROOT = document.querySelector(MODAL_ROOT_SELECTOR);

type Props = {
  onPolicyClick: () => void;
  onConsent: () => void;
};

const CookieNotification: FC<Props> = ({ onConsent, onPolicyClick }) => {
  const { t } = useTranslation();
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    onConsent();
  };

  if (MODAL_ROOT) {
    return createPortal(
      <div className={b()}>
        <Text className={b('message')} style={TextStyle.white}>
          {t('cookieMessage')}
        </Text>
        <button type="button" className={b('link')} onClick={onPolicyClick}>
          <Text
            Tag={TextTag.span}
            type={TextType.footerPolicy}
            style={TextStyle.white}
          >
            {t('footer.policy')}
          </Text>
        </button>
        <button type="button" className={b('button')} onClick={handleClick}>
          <Text Tag={TextTag.span}> {t('consentCookie')}</Text>
        </button>
      </div>,
      MODAL_ROOT
    );
  }
  return null;
};

export default CookieNotification;
