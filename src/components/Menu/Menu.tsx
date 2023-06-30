import { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import block from 'bem-css-modules';
import { useTranslation } from 'react-i18next';
import Navigation, { NavigationType } from '../Navigation/Navigation';
import styles from './Menu.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { KeyboardKeys, MODAL_ROOT_SELECTOR } from '../../utils/config';
import LanguageSelector, {
  LanguageSelectorTypes,
} from '../LanguageSelector/LanguageSelector';

const b = block(styles);

let MODAL_ROOT = document.querySelector(MODAL_ROOT_SELECTOR);

if (!MODAL_ROOT) {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  document.body.appendChild(modalRoot);
  MODAL_ROOT = modalRoot;
}

const Menu: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { t } = useTranslation();
  const focusElementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (focusElementRef.current) {
      focusElementRef.current.focus();
    }
  }, []);

  useEffect(() => {
    function handleEscPress(event: KeyboardEvent) {
      if (event.key === KeyboardKeys.esc) {
        onClose();
      }
    }
    document.addEventListener('keydown', handleEscPress);
    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [onClose]);

  if (MODAL_ROOT) {
    return createPortal(
      <div ref={focusElementRef} tabIndex={-1} className={b()}>
        <div
          className={b('container')}
          role="dialog"
          aria-label={t('menu')}
          aria-modal="true"
        >
          <Navigation onClick={onClose} type={NavigationType.column} />
          <LanguageSelector
            className={b('lang-sel')}
            type={LanguageSelectorTypes.row}
          />
        </div>
        <ModalOverlay closeModal={onClose} />
      </div>,
      MODAL_ROOT
    );
  }

  return null;
};

export default Menu;
