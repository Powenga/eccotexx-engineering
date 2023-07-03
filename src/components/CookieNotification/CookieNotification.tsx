import { FC, SyntheticEvent, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import block from 'bem-css-modules';
import FocusLock from 'react-focus-lock';
import { useTranslation } from 'react-i18next';
import { MODAL_ROOT_SELECTOR } from '../../utils/config';
import styles from './CookieNotification.module.css';
import Text, { TextStyle, TextTag, TextType } from '../Text/Text';

const b = block(styles);
let MODAL_ROOT = document.querySelector(MODAL_ROOT_SELECTOR);

if (!MODAL_ROOT) {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  document.body.appendChild(modalRoot);
  MODAL_ROOT = modalRoot;
}

type Props = {
  onPolicyClick: () => void;
  onConsent: () => void;
};

const CookieNotification: FC<Props> = ({ onConsent, onPolicyClick }) => {
  const { t } = useTranslation();
  const focusRef = useRef<HTMLDivElement>(null);
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    onConsent();
  };

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  if (MODAL_ROOT) {
    return createPortal(
      <FocusLock autoFocus={false}>
        <div
          className={b()}
          role="alertdialog"
          aria-modal
          aria-label={t('consentPolicy')}
          tabIndex={-1}
          ref={focusRef}
        >
          <Text className={b('message')} style={TextStyle.white}>
            {t('cookieMessage')}
          </Text>
          <button type="button" className={b('link')} onClick={onPolicyClick}>
            <Text
              Tag={TextTag.span}
              type={TextType.footerPolicy}
              style={TextStyle.white}
            >
              {t('consentPolicy')}
            </Text>
          </button>
          <button type="button" className={b('button')} onClick={handleClick}>
            <Text Tag={TextTag.span}> {t('consentCookie')}</Text>
          </button>
        </div>
      </FocusLock>,
      MODAL_ROOT
    );
  }
  return null;
};

export default CookieNotification;
